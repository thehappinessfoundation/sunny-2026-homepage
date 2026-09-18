export const project = {
  name: 'project',
  title: 'Project (LAB)',
  type: 'document',
  groups: [
    { name: 'overview', title: '1. 기본 및 모달 정보', default: true },
    { name: 'report', title: '2. 아티클 1 (Report)' },
    { name: 'projectArticle', title: '3. 아티클 2 (Project)' },
    { name: 'featured', title: '4. 메인 노출 설정' },
  ],
  fields: [
    // ==========================================
    // 1. 기본 및 모달 정보 (overview)
    // ==========================================
    { name: 'title', title: 'Project Name', type: 'string', group: 'overview' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, group: 'overview' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true }, group: 'overview' },
    { name: 'team', title: 'Team Name', type: 'string', group: 'overview' },
    { name: 'category', title: 'Category', type: 'string', group: 'overview', options: {
        list: [
          { title: '장애 (Disability)', value: 'disability' },
          { title: '노인 (Elderly)', value: 'elderly' },
          { title: '다문화 (Multicultural)', value: 'multicultural' },
          { title: '기타 (Others)', value: 'others' },
        ],
      } 
    },
    { name: 'cohort', title: 'Cohort / Program Tag (기수/프로그램)', type: 'string', description: 'e.g., Sunny Scholar 5기', group: 'overview' },
    { name: 'period', title: 'Project Period (기간)', type: 'string', description: 'e.g., 2025.07-2026.01', group: 'overview' },
    { name: 'innovator', title: 'Innovator Name (사회혁신가)', type: 'string', group: 'overview' },
    { name: 'teamMembers', title: 'Team Members (팀원)', type: 'string', description: 'e.g., 오재란, 박성인, 김은결, 하수진', group: 'overview' },
    { name: 'teamPhoto', title: 'Team Modal Photo (모달 내부 전용 팀 사진)', type: 'image', options: { hotspot: true }, description: '모달 상단에 표시될 전용 사진입니다. 비워두면 외부 썸네일(Thumbnail)이 사용됩니다.', group: 'overview' },
    { name: 'contactEmail', title: 'Contact Email (대표 이메일)', type: 'string', description: 'e.g., fore_team@sunny.or.kr (팀원 이메일)', group: 'overview' },
    { name: 'landingPageUrl', title: 'Landing Page URL (노션 랜딩페이지 링크)', type: 'url', description: 'e.g., https://notion.so/...', group: 'overview' },
    { name: 'shortDescription', title: 'Short Description', type: 'string', group: 'overview' },
    { name: 'link', title: 'Detail Link', type: 'string', group: 'overview' },

    // 모달 액션 카드 2개 설정
    { name: 'reportCardTitle', title: 'REPORT 카드 메인 제목', type: 'string', description: '비워두면 기본값("최종 성과를 확인하고 활용하고 싶다면") 사용', group: 'overview' },
    { name: 'reportCardDesc', title: 'REPORT 카드 설명 문구', type: 'string', description: '비워두면 기본값("{팀명}팀이 8개월간의 여정 끝에 정리한 결과물을 만나보세요.") 사용', group: 'overview' },
    { name: 'projectCardTitle', title: 'PROJECT 카드 메인 제목', type: 'string', description: '비워두면 기본값("문제 해결의 과정과 방법론이 궁금하다면") 사용', group: 'overview' },
    { name: 'projectCardDesc', title: 'PROJECT 카드 설명 문구', type: 'string', description: '비워두면 기본값("{팀명}팀이 어떻게 문제를 정의하고 현장에서 무엇을 발견했는지 따라가보세요.") 사용', group: 'overview' },
    { name: 'reportLink', title: 'Report Link (외부 링크 직접 연결 시 입력)', type: 'url', group: 'overview' },
    { name: 'projectLink', title: 'Project Article Link (외부 링크 직접 연결 시 입력)', type: 'url', group: 'overview' },

    // 모달 요약 정보 영역
    { name: 'problemDetail', title: 'Problem Detail (왜 이 문제가 중요하며...)', type: 'text', group: 'overview' },
    { name: 'researchTarget', title: 'Research Target (연구 대상)', type: 'string', group: 'overview' },
    { name: 'researchTopic', title: 'Research Topic (연구 주제)', type: 'string', group: 'overview' },
    { name: 'problemCauses', title: 'Problem Causes (문제 원인)', type: 'string', group: 'overview' },
    { name: 'solution', title: 'Solution (해결책)', type: 'text', group: 'overview' },
    { name: 'vision', title: 'Vision (비전)', type: 'text', group: 'overview' },
    { name: 'visionSlideshow', title: 'Vision Slideshow Images (비전 항목 아래 이미지들)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], group: 'overview' },
    { name: 'additionalImages', title: 'Additional Photos (추가 사진 및 이미지 영역)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], group: 'overview' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime', group: 'overview' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], group: 'overview' },
    { name: 'attachment', title: 'Attachment', type: 'file', group: 'overview' },

    // ==========================================
    // 2. 아티클 1 - Report (report)
    // ==========================================
    {
      name: 'reportTitle',
      title: '아티클 1 (Report) 제목',
      type: 'string',
      description: '모달의 Report 버튼 클릭 시 표시될 아티클의 메인 제목 (문제정의 & 솔루션 소개)',
      group: 'report'
    },
    {
      name: 'reportBody',
      title: '아티클 1 (Report) 본문',
      type: 'array',
      description: '리포트 아티클 본문 (텍스트, 이미지, 소제목, 인용구 등)',
      group: 'report',
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
    { 
      name: 'reportPdf', 
      title: 'Report PDF Upload (실제 다운로드용 공식 PDF)', 
      type: 'file', 
      options: { accept: 'application/pdf' },
      description: '방문자가 다운로드받을 수 있는 공식 완성형 리포트 PDF입니다. (순서 확인용 참고 PDF 아님)',
      group: 'report'
    },
    { 
      name: 'body', 
      title: 'Body (구버전 호환용)', 
      type: 'array', 
      group: 'report',
      hidden: true,
      of: [{ type: 'block' }]
    },

    // ==========================================
    // 3. 아티클 2 - Project (projectArticle)
    // ==========================================
    {
      name: 'projectTitle',
      title: '아티클 2 (Project) 제목',
      type: 'string',
      description: '모달의 Project 버튼 클릭 시 표시될 아티클의 메인 제목 (과정 회고)',
      group: 'projectArticle'
    },
    {
      name: 'projectBody',
      title: '아티클 2 (Project) 본문',
      type: 'array',
      description: '프로젝트 아티클 본문 (텍스트, 이미지, 소제목, 인용구 등)',
      group: 'projectArticle',
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

    // ==========================================
    // 4. 메인 노출 설정 (featured)
    // ==========================================
    { 
      name: 'isMainFeatured', 
      title: 'Show on Main Page?', 
      type: 'boolean', 
      initialValue: false,
      group: 'featured'
    },
    { 
      name: 'mainOrder', 
      title: 'Main Page Order', 
      type: 'number', 
      description: 'Lower number means it shows up first (e.g. 1, 2, 3)',
      hidden: ({ document }: any) => !document?.isMainFeatured,
      group: 'featured'
    },
    {
      name: 'featuredSubtitle',
      title: 'Featured Subtitle (주목할 만한 리포트용 부제)',
      type: 'string',
      description: '주목할 만한 리포트 카드에 표시될 멘트입니다. 비워두면 Short Description이 사용됩니다.',
      hidden: ({ document }: any) => !document?.isMainFeatured,
      group: 'featured'
    },
    {
      name: 'mainSubtitle',
      title: 'Main Subtitle (메인 페이지용 부제)',
      type: 'string',
      description: '메인 페이지의 프로젝트 카드에 표시될 멘트입니다. 비워두면 Short Description이 사용됩니다.',
      hidden: ({ document }: any) => !document?.isMainFeatured,
      group: 'featured'
    },
    { 
      name: 'cardColor', 
      title: 'Card Background Color (Main Page)', 
      type: 'string', 
      description: 'e.g., #e0f2fe (Blue), #fef3c7 (Beige), #dcfce7 (Green)',
      hidden: ({ document }: any) => !document?.isMainFeatured,
      group: 'featured'
    },
    { 
      name: 'appImage', 
      title: 'App/Product Image (Main Page)', 
      type: 'image', 
      options: { hotspot: true },
      hidden: ({ document }: any) => !document?.isMainFeatured,
      group: 'featured'
    },
  ],
}
