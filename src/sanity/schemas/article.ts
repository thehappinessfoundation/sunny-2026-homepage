export const article = {
  name: 'article',
  title: 'Article (News/Report)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '공지사항', value: '공지사항' },
          { title: '언론보도', value: '언론보도' },
          { title: '모집소식', value: '모집소식' },
          { title: '프로젝트', value: '프로젝트' }
        ]
      }
    },
    { name: 'summary', title: 'Summary', type: 'text' },
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
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'attachment', title: 'Attachment', type: 'file' },
  ],
}
