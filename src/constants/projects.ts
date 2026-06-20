import Project from '@/types/project.type';

export const PROJECTS: Project[] = [
  {
    project_id: '9043b3ca-5e53-4e12-99a3-f5fa69fdc685',
    slug: 'training-house-no-4',
    logo: 'no-4.webp',
    ownership: 'personal',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Training House No: 4',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Training House No: 4',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Training House No: 4',
        story: 'lorem10',
        logoAlt: 'Training House No: 4 Logo',
      },
    ],
    tech_stack: ['react', 'next'],
    stores: [
      {
        name: 'app-store',
        link: 'https://apps.apple.com/tr/app/no-4/id6749334969',
      },
      {
        name: 'google-play',
        link: 'https://play.google.com/store/apps/details?id=com.anonymous.TrainingHouseNo4&hl=en',
      },
    ],
    social: {
      web: {
        url: 'https://no4.barisyasar.com/',
        name: 'Web',
      },
      instagram: {
        url: 'https://www.instagram.com/traininghouseno4/',
        name: 'traininghouseno4',
      },
    },
  },
];
