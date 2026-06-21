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
        storyTitle: 'Training House No: 4 Nedir?',
        story:
          "<p>Training House No: 4, bir mobil spor uygulamasıdır. İçerisinde fitness, kardiyo ve esneme programları bulunmaktadır.</p><p>İstanbul'da bulunan spor salonumuzun mobil bir yüzü olarak kullanılmaktadır.</p><p>Web sitesi de bulunan bir mobil uyuglamadır.</p>",
        logoAlt: 'Training House No: 4 Logo',
      },
    ],
    tech_stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next',
      'Tailwind',
      'React Native',
      'Expo',
      'Supabase',
      'AdMob',
      'TanStack Query',
      'PostgreSQL',
      'Vercel',
    ],
    platforms: [
      {
        name: 'app-store',
        url: 'https://apps.apple.com/tr/app/no-4/id6749334969',
      },
      {
        name: 'google-play',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.TrainingHouseNo4&hl=en',
      },
      {
        name: 'web',
        url: 'https://no4.barisyasar.com',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/traininghouseno4/',
      },
    ],
  },
  {
    project_id: 'e34b5bfc-8031-496e-9af0-e5c6ea7c1613',
    slug: 'chameleon',
    logo: 'chameleon.webp',
    ownership: 'personal',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Chameleon',
          description: 'Multitenenat website builder',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Chameleon',
          description: 'Dinamik website oluşturucu',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        logoAlt: 'Chameleon Logo',
        name: 'Chameleon',
        storyTitle: 'Chameleon Nedir?',
        story:
          '<p>Chameleon, projelerimin tanıtım sitelerini yaparken kullanılan genel altyapının hazır bulunduğu projedir.</p><p>Genel kullanıcı senaryoları, dil yapısı ve tema gibi yapılar mevcuttur.</p>',
      },
      {
        locale: {
          code: 'en',
        },
        logoAlt: 'Chameleon Logo',
        name: 'Chameleon',
        storyTitle: 'What is Chameleon?',
        story:
          '<p>Chameleon is a project that provides the ready-made infrastructure used when building promotional websites for my projects.</p><p>It includes general user scenarios, language structure, and theme systems.</p>',
      },
    ],
    tech_stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next',
      'Tailwind',
      'Supabase',
      'TanStack Query',
      'PostgreSQL',
      'Vercel',
    ],
    platforms: [],
  },
  /* {
    project_id: '643f1c9b-4188-4b5d-9f49-056d4f50f59e',
    slug: 'pulse-house',
    logo: 'pulse-house.webp',
    ownership: 'personal',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Pulse House',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Pulse House',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Pulse House',
        story: 'lorem10',
        logoAlt: 'Pulse House Logo',
      },
    ],
    tech_stack: ['react', 'next'],
  },
  {
    project_id: '24fb9599-af91-406f-a3ae-da0dada500ca',
    slug: 'portfolio',
    logo: 'vercel.webp',
    ownership: 'personal',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Portfolio',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Portfolio',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Portfolio',
        story: 'lorem10',
        logoAlt: 'Vercel Logo',
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
  {
    project_id: 'b85def92-8245-4b0f-ad11-8d2741821a4c',
    slug: 'smart-chatbot-ai',
    logo: 'smart-chatbot-ai.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Smart Chatbot AI',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Smart Chatbot AI',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Smart Chatbot AI',
        story: 'lorem10',
        logoAlt: 'Smart Chatbot AI Logo',
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
  {
    project_id: '96b81660-d93c-49e4-b330-b12d46b56073',
    slug: 'customizable-onboarding-builder',
    logo: 'vercel.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Customizable Onboarding Builder',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Customizable Onboarding Builder',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Customizable Onboarding Builder',
        story: 'lorem10',
        logoAlt: 'Vercel Logo',
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
  {
    project_id: '263c1005-5f1a-4fec-ab87-76585e2f9cb9',
    slug: 'scholarship-application',
    logo: 'scholarship-application.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Burs Uygulaması',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Scholarship Applcation',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Burs Uygulaması',
        story: 'lorem10',
        logoAlt: 'Vercel Logo',
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
  {
    project_id: '7e8c2a4b-d992-4a49-a3b5-0173507fa3fe',
    slug: 'internal-dashboard',
    logo: 'internal-dashboard.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Internal Dashboard',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Internal Dashboard',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Internal Dashboard',
        story: 'lorem10',
        logoAlt: 'TanStack Router Logo',
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
  {
    project_id: '3c614a90-5f11-40b3-be73-e30218084410',
    slug: 'enerjey',
    logo: 'enerjey.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Enerjey',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Enerjey',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Enerjey',
        story: 'lorem10',
        logoAlt: 'Enerjey Logo',
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
  {
    project_id: 'dc79e273-8753-4d2b-8b47-c70860e55ba5',
    slug: 'tripy',
    logo: 'tripy.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Tripy',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Tripy',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Tripy',
        story: 'lorem10',
        logoAlt: 'Tripy Logo',
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
  {
    project_id: '9076cd75-251f-49b7-a6f1-751d8f016fe1',
    slug: 'karafaki',
    logo: 'karafaki.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Karafaki',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Karafaki',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Karafaki',
        story: 'lorem10',
        logoAlt: 'Karafaki Logo',
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
  {
    project_id: '454f006b-a42d-4c19-a421-ae2f7ec933b7',
    slug: 'kanvibe',
    logo: 'kanvibe.webp',
    ownership: 'team',
    metadata: {
      translations: [
        {
          locale: {
            code: 'tr',
          },
          title: 'Kanvibe',
          description: 'Güç, dayanıklılık ve esneme antrenmanları',
        },
        {
          locale: {
            code: 'en',
          },
          title: 'Kanvibe',
          description: 'Strength, endurance, and flexibility trainings',
        },
      ],
    },
    translations: [
      {
        locale: {
          code: 'tr',
        },
        name: 'Kanvibe',
        story: 'lorem10',
        logoAlt: 'Kanvibe Logo',
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
  }, */
];
