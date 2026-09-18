import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { createClient } from 'next-sanity';

// 1. Load environment variables from .env.local if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([\w_]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(.*))\s*$/);
      if (match) {
        const key = match[1];
        const val = match[2] || match[3] || match[4] || '';
        if (!process.env[key]) {
          process.env[key] = val.trim();
        }
      }
    }
  }
}

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u1oyirho';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('\n❌ [오류] SANITY_API_WRITE_TOKEN 환경변수가 설정되지 않았습니다.');
  console.error('👉 .env.local 파일에 SANITY_API_WRITE_TOKEN="sk..." 를 추가하거나,');
  console.error('👉 명령 실행 시 SANITY_API_WRITE_TOKEN="sk..." node scripts/upload-report.mjs ... 형태로 실행해주세요.\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

function randomKey() {
  return crypto.randomBytes(6).toString('hex');
}

// Parse CLI flags
const args = process.argv.slice(2);
function getArg(flag, defaultValue) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) {
    return args[idx + 1];
  }
  return defaultValue;
}

const targetDir = getArg('--dir', 'report_data/두드림');
const targetPdf = getArg('--pdf', 'report_data/두드림.pdf');
const teamName = getArg('--team', '팀 두드림');
const slugCurrent = getArg('--slug', 'doodream');

async function findFileOnDisk(dirPath, rawName) {
  const files = fs.readdirSync(dirPath);
  const decoded = decodeURIComponent(rawName);
  const withSpace = decoded.replace(/_/g, ' ');
  const withUnderscore = decoded.replace(/ /g, '_');

  for (const f of files) {
    if (
      f === decoded ||
      f.normalize('NFC') === decoded.normalize('NFC') ||
      f.normalize('NFD') === decoded.normalize('NFD') ||
      f === withSpace ||
      f.normalize('NFC') === withSpace.normalize('NFC') ||
      f === withUnderscore ||
      f.normalize('NFC') === withUnderscore.normalize('NFC')
    ) {
      return path.join(dirPath, f);
    }
  }
  return null;
}

// Convert inline markdown formatting to PortableText spans
function parseSpans(text) {
  const spans = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const preText = text.substring(lastIndex, match.index);
    if (preText) {
      spans.push({
        _type: 'span',
        _key: randomKey(),
        text: preText,
        marks: [],
      });
    }

    const matchedStr = match[0];
    if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
      spans.push({
        _type: 'span',
        _key: randomKey(),
        text: matchedStr.slice(2, -2),
        marks: ['strong'],
      });
    } else if (matchedStr.startsWith('[')) {
      const linkMatch = matchedStr.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        spans.push({
          _type: 'span',
          _key: randomKey(),
          text: linkMatch[1],
          marks: [],
        });
      }
    }

    lastIndex = match.index + matchedStr.length;
  }

  const endText = text.substring(lastIndex);
  if (endText || spans.length === 0) {
    spans.push({
      _type: 'span',
      _key: randomKey(),
      text: endText || text,
      marks: [],
    });
  }

  return spans;
}

async function convertMarkdownToBlocks(lines, dirPath, uploadedAssetsMap) {
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i].trim();

    if (!rawLine) {
      i++;
      continue;
    }

    // 1. Image: ![alt](url)
    const imgMatch = rawLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      const altText = imgMatch[1];
      const imgRef = imgMatch[2];
      
      let assetRef = uploadedAssetsMap[imgRef];
      if (!assetRef) {
        const diskPath = await findFileOnDisk(dirPath, imgRef);
        if (diskPath && fs.existsSync(diskPath)) {
          console.log(`  📸 이미지 업로드 중: ${path.basename(diskPath)}`);
          const fileStream = fs.createReadStream(diskPath);
          const asset = await client.assets.upload('image', fileStream, {
            filename: path.basename(diskPath),
          });
          assetRef = asset._id;
          uploadedAssetsMap[imgRef] = assetRef;
        } else {
          console.warn(`  ⚠️ 이미지 파일을 찾을 수 없음: ${imgRef}`);
        }
      }

      if (assetRef) {
        blocks.push({
          _type: 'image',
          _key: randomKey(),
          asset: {
            _type: 'reference',
            _ref: assetRef,
          },
          alt: altText || '리포트 이미지',
        });
      }
      i++;
      continue;
    }

    // 2. Headings (#, ##, ###, ####)
    if (rawLine.startsWith('# ') || rawLine.startsWith('## ') || rawLine.startsWith('### ') || rawLine.startsWith('#### ')) {
      let level = 'h2';
      if (rawLine.startsWith('### ')) level = 'h2';
      else if (rawLine.startsWith('#### ')) level = 'h3';
      else if (rawLine.startsWith('# ')) level = 'h1';

      let text = rawLine.replace(/^#+\s*/, '').replace(/^\*\*|\*\*$/g, '').trim();
      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: level,
        children: [{ _type: 'span', _key: randomKey(), text, marks: [] }],
        markDefs: [],
      });
      i++;
      continue;
    }

    // 3. Standalone bold line acting as subheader (e.g. **두드림이 경계선 지능인에 집중하게 된 이유**)
    if (/^\*\*[^*]+\*\*$/.test(rawLine)) {
      const text = rawLine.replace(/^\*\*|\*\*$/g, '').trim();
      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: 'h3',
        children: [{ _type: 'span', _key: randomKey(), text, marks: [] }],
        markDefs: [],
      });
      i++;
      continue;
    }

    // 4. Blockquote (> ...)
    if (rawLine.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && (lines[i].trim().startsWith('>') || lines[i].trim() === '')) {
        const cleaned = lines[i].trim().replace(/^>\s*/, '');
        if (cleaned) quoteLines.push(cleaned);
        i++;
      }
      const quoteText = quoteLines.join('\n');
      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: 'blockquote',
        children: [{ _type: 'span', _key: randomKey(), text: quoteText, marks: [] }],
        markDefs: [],
      });
      continue;
    }

    // 5. Unordered List (- item)
    if (rawLine.startsWith('- ') || rawLine.startsWith('* ')) {
      const text = rawLine.replace(/^[-*]\s+/, '');
      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: parseSpans(text),
        markDefs: [],
      });
      i++;
      continue;
    }

    // 6. Ordered List (1. item)
    if (/^\d+\.\s+/.test(rawLine)) {
      const text = rawLine.replace(/^\d+\.\s+/, '');
      blocks.push({
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        listItem: 'number',
        level: 1,
        children: parseSpans(text),
        markDefs: [],
      });
      i++;
      continue;
    }

    // 7. Regular paragraph
    blocks.push({
      _type: 'block',
      _key: randomKey(),
      style: 'normal',
      children: parseSpans(rawLine),
      markDefs: [],
    });
    i++;
  }

  return blocks;
}

async function main() {
  console.log('🚀 [Sanity Report Uploader 시작]');
  console.log(`📁 작업 폴더: ${targetDir}`);
  console.log(`📄 PDF 파일: ${targetPdf}`);

  const dirResolved = path.resolve(process.cwd(), targetDir);
  if (!fs.existsSync(dirResolved)) {
    console.error(`❌ 대상 폴더가 존재하지 않습니다: ${dirResolved}`);
    process.exit(1);
  }

  // Find the markdown file
  const files = fs.readdirSync(dirResolved);
  const mdFile = files.find(f => f.endsWith('.md'));
  if (!mdFile) {
    console.error('❌ 폴더 안에 .md 마크다운 파일이 없습니다.');
    process.exit(1);
  }

  const mdPath = path.join(dirResolved, mdFile);
  console.log(`📝 마크다운 파일 감지: ${mdFile}`);
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const allLines = mdContent.split('\n');

  // Split into Article 1 and Article 2
  let art1Index = allLines.findIndex(l => l.includes('## 아티클 1'));
  let art2Index = allLines.findIndex(l => l.includes('## 아티클 2'));

  if (art1Index === -1) art1Index = 0;
  if (art2Index === -1) art2Index = allLines.length;

  const art1Lines = allLines.slice(art1Index, art2Index);
  const art2Lines = allLines.slice(art2Index);

  // Extract titles
  let reportTitle = '경계선 지능 청년은 왜 아르바이트를 시작하고도 오래 일하기 어려울까요?';
  const t1Match = art1Lines.find(l => l.includes('###') && l.includes('**'));
  if (t1Match) {
    reportTitle = t1Match.replace(/[#*]/g, '').trim();
  }

  let projectTitle = '현장에 나갈 때마다, 질문이 달라졌습니다';
  const t2Match = art2Lines.find(l => (l.includes('###') || l.includes('####')) && l.includes('**'));
  if (t2Match) {
    projectTitle = t2Match.replace(/[#*]/g, '').trim();
  }

  console.log(`\n📌 [아티클 1 (Report)] 제목: "${reportTitle}"`);
  console.log(`📌 [아티클 2 (Project)] 제목: "${projectTitle}"`);

  const uploadedAssetsMap = {};

  console.log('\n🔄 [1/3] 아티클 1 본문 변환 및 이미지 업로드 시작...');
  const reportBody = await convertMarkdownToBlocks(art1Lines, dirResolved, uploadedAssetsMap);
  console.log(`✅ 아티클 1 변환 완료 (블록 수: ${reportBody.length})`);

  console.log('\n🔄 [2/3] 아티클 2 본문 변환 및 이미지 업로드 시작...');
  const projectBody = await convertMarkdownToBlocks(art2Lines, dirResolved, uploadedAssetsMap);
  console.log(`✅ 아티클 2 변환 완료 (블록 수: ${projectBody.length})`);

  // Upload PDF if present
  let pdfAssetRef = null;
  const pdfResolved = path.resolve(process.cwd(), targetPdf);
  if (fs.existsSync(pdfResolved)) {
    console.log(`\n📄 [3/3] PDF 파일 업로드 중: ${path.basename(pdfResolved)}`);
    const pdfStream = fs.createReadStream(pdfResolved);
    const pdfAsset = await client.assets.upload('file', pdfStream, {
      filename: path.basename(pdfResolved),
      contentType: 'application/pdf',
    });
    pdfAssetRef = pdfAsset._id;
    console.log(`✅ PDF 업로드 완료 (Asset ID: ${pdfAssetRef})`);
  } else {
    console.log('ℹ️ PDF 파일이 없어 건너뜁니다.');
  }

  // Find existing project in Sanity
  console.log(`\n🔍 새니티에서 기존 프로젝트 검색 (팀: ${teamName})...`);
  const query = `*[_type == "project" && (team match "*두드림*" || _id == "HcWQvK4iArVlCLHhvbsGfA")][0]`;
  const existingProject = await client.fetch(query);

  const docData = {
    reportTitle,
    reportBody,
    projectTitle,
    projectBody,
    slug: { _type: 'slug', current: slugCurrent },
  };

  if (pdfAssetRef) {
    docData.reportPdf = {
      _type: 'file',
      asset: {
        _type: 'reference',
        _ref: pdfAssetRef,
      },
    };
  }

  if (existingProject) {
    console.log(`✨ 기존 문서 발견 (${existingProject._id}) -> 업데이트 진행`);
    await client.patch(existingProject._id).set(docData).commit();
    console.log(`\n🎉 성공적으로 업데이트되었습니다! ID: ${existingProject._id}`);
  } else {
    console.log('✨ 새 프로젝트 문서 생성 진행');
    const newDoc = await client.create({
      _type: 'project',
      title: reportTitle,
      team: teamName,
      shortDescription: reportTitle,
      category: 'disability',
      publishedAt: new Date().toISOString(),
      ...docData,
    });
    console.log(`\n🎉 새 문서가 생성되었습니다! ID: ${newDoc._id}`);
  }

  console.log(`\n🌐 확인 가능한 URL:`);
  console.log(`   - 리포트 (Card 1): http://localhost:3000/impact/report/${slugCurrent}?tab=report`);
  console.log(`   - 프로젝트 (Card 2): http://localhost:3000/impact/report/${slugCurrent}?tab=project`);
  console.log(`   - 온라인 배포: https://besunny.com/impact/report/${slugCurrent}?tab=report\n`);
}

main().catch(err => {
  console.error('\n❌ 업로드 중 오류 발생:', err);
  process.exit(1);
});
