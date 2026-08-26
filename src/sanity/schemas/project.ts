export const project = {
  name: 'project',
  title: 'Project (LAB)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'team', title: 'Team Name', type: 'string' },
    { name: 'link', title: 'Detail Link', type: 'string' },
    { 
      name: 'isMainFeatured', 
      title: 'Show on Main Page?', 
      type: 'boolean', 
      initialValue: false 
    },
    { 
      name: 'mainOrder', 
      title: 'Main Page Order', 
      type: 'number',
      description: 'Lower number means it shows up first (e.g. 1, 2, 3)',
      hidden: ({ document }: any) => !document?.isMainFeatured
    },
    {
      name: 'featuredSubtitle',
      title: 'Featured Subtitle (주목할 만한 리포트용 부제)',
      type: 'string',
      description: '주목할 만한 리포트 카드에 표시될 멘트입니다. 비워두면 Short Description이 사용됩니다.',
      hidden: ({ document }: any) => !document?.isMainFeatured
    },
    {
      name: 'mainSubtitle',
      title: 'Main Subtitle (메인 페이지용 부제)',
      type: 'string',
      description: '메인 페이지의 프로젝트 카드에 표시될 멘트입니다. 비워두면 Short Description이 사용됩니다.',
      hidden: ({ document }: any) => !document?.isMainFeatured
    },
    { 
      name: 'cardColor', 
      title: 'Card Background Color (Main Page)', 
      type: 'string',
      description: 'e.g., #e0f2fe (Blue), #fef3c7 (Beige), #dcfce7 (Green)',
      hidden: ({ document }: any) => !document?.isMainFeatured
    },
    { 
      name: 'appImage', 
      title: 'App/Product Image (Main Page)', 
      type: 'image', 
      options: { hotspot: true },
      hidden: ({ document }: any) => !document?.isMainFeatured
    },
    { name: 'innovator', title: 'Innovator Name (사회혁신가)', type: 'string' },
    { name: 'period', title: 'Project Period (기간)', type: 'string', description: 'e.g., 2025.07-2026.01' },
    { name: 'shortDescription', title: 'Short Description', type: 'string' },
    { name: 'category', title: 'Category', type: 'string', options: {
        list: [
          { title: '장애 (Disability)', value: 'disability' },
          { title: '노인 (Elderly)', value: 'elderly' },
          { title: '다문화 (Multicultural)', value: 'multicultural' },
          { title: '기타 (Others)', value: 'others' },
        ],
      } 
    },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 }
    },
    { name: 'teamMembers', title: 'Team Members (팀원)', type: 'string', description: 'e.g., 오재란, 박성인, 김은결, 하수진' },
    { name: 'teamPhoto', title: 'Team Modal Photo (모달 내부 전용 팀 사진)', type: 'image', options: { hotspot: true }, description: '모달 상단에 표시될 전용 사진입니다. 비워두면 외부 썸네일(Thumbnail)이 사용됩니다.' },
    { name: 'cohort', title: 'Cohort / Program Tag (기수/프로그램)', type: 'string', description: 'e.g., Sunny Scholar 5기' },
    { name: 'contactEmail', title: 'Contact Email (대표 이메일)', type: 'string', description: 'e.g., fore_team@sunny.or.kr (팀원 이메일)' },
    { name: 'landingPageUrl', title: 'Landing Page URL (노션 랜딩페이지 링크)', type: 'url', description: 'e.g., https://notion.so/...' },
    { name: 'reportCardTitle', title: 'REPORT 카드 메인 제목', type: 'string', description: '비워두면 기본값("최종 성과를 확인하고 활용하고 싶다면") 사용' },
    { name: 'reportCardDesc', title: 'REPORT 카드 설명 문구', type: 'string', description: '비워두면 기본값("{팀명}팀이 8개월간의 여정 끝에 정리한 결과물을 만나보세요.") 사용' },
    { name: 'projectCardTitle', title: 'PROJECT 카드 메인 제목', type: 'string', description: '비워두면 기본값("문제 해결의 과정과 방법론이 궁금하다면") 사용' },
    { name: 'projectCardDesc', title: 'PROJECT 카드 설명 문구', type: 'string', description: '비워두면 기본값("{팀명}팀이 어떻게 문제를 정의하고 현장에서 무엇을 발견했는지 따라가보세요.") 사용' },
    { name: 'reportLink', title: 'Report Link (리포트 아티클/영상 링크)', type: 'url' },
    { name: 'projectLink', title: 'Project Article Link (프로젝트 아티클 링크)', type: 'url' },
    { name: 'problemDetail', title: 'Problem Detail (왜 이 문제가 중요하며...)', type: 'text' },
    { name: 'researchTarget', title: 'Research Target (연구 대상)', type: 'string' },
    { name: 'researchTopic', title: 'Research Topic (연구 주제)', type: 'string' },
    { name: 'problemCauses', title: 'Problem Causes (문제 원인)', type: 'string' },
    { name: 'solution', title: 'Solution (해결책)', type: 'text' },
    { name: 'vision', title: 'Vision (비전)', type: 'text' },
    { name: 'visionSlideshow', title: 'Vision Slideshow Images (비전 항목 아래 이미지들)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'additionalImages', title: 'Additional Photos (추가 사진 및 이미지 영역)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'reportLink', title: 'Report Link (리포트 아티클/영상 링크)', type: 'url' },
    { name: 'reportPdf', title: 'Report PDF Upload (리포트 다운로드용 파일)', type: 'file', options: { accept: 'application/pdf' } },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    { 
      name: 'body', 
      title: 'Body', 
      type: 'array', 
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Embed',
          fields: [
            { name: 'url', type: 'url', title: 'YouTube Video URL' }
          ]
        },
        {
          type: 'object',
          name: 'slideshow',
          title: 'Slideshow',
          fields: [
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }]
            }
          ]
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Gray Callout Box',
          fields: [
            { name: 'title', type: 'string', title: 'Box Title' },
            { name: 'content', type: 'text', title: 'Box Content' },
            { name: 'attachmentUrl', type: 'url', title: 'Attachment Link (Optional)' },
            { name: 'buttonText', type: 'string', title: 'Button Text (Optional)' }
          ]
        }
      ] 
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'attachment', title: 'Attachment', type: 'file' },
  ],
}
