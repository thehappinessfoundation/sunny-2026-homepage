export const alumni = {
  name: 'alumni',
  title: 'Alumni',
  type: 'document',
  fields: [
    { name: 'cohort', title: 'Cohort (기수)', type: 'string' },
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string', options: {
        list: [
          { title: '사회혁신가 (Social Innovator)', value: 'innovator' },
          { title: '개발자 (Developer)', value: 'developer' },
          { title: '디자이너 (Designer)', value: 'designer' },
          { title: '기획자 (Planner)', value: 'planner' },
        ]
      } 
    },
    { name: 'shortDescription', title: 'Short Description', type: 'string' },
    { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
  ],
}
