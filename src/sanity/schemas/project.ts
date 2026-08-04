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
