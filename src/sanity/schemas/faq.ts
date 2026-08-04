import { defineType, defineField } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          { title: 'Sunny Scholar', value: 'scholar' },
          { title: 'Sunny On-site', value: 'onsite' },
          { title: '지원 관련', value: 'support' },
          { title: '기타', value: 'others' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'question',
      title: '질문',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: '답변',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: '노출 순서',
      type: 'number',
      description: '숫자가 작을수록 먼저 노출됩니다.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      const categoryMap: Record<string, string> = {
        scholar: 'Sunny Scholar',
        onsite: 'Sunny On-site',
        support: '지원 관련',
        others: '기타'
      };
      return {
        title,
        subtitle: categoryMap[subtitle as string] || subtitle,
      }
    }
  }
})
