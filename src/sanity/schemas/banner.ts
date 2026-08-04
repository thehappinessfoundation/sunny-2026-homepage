export const banner = {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'link', title: 'Link', type: 'string' },
  ],
}
