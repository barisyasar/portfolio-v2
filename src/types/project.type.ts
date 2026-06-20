export default interface Project {
  project_id: string;
  slug: string;
  logo: string;
  ownership: ProjectOwnership;
  // categories: ProjectCategory[];
  metadata: {
    translations: {
      locale: {
        code: string;
      };
      title: string;
      description: string;
    }[];
  };
  translations: ProjectTranslation[];
  tech_stack: string[];
  stores: {
    name: string;
    link: string;
  }[];
  social: {
    web: {
      url: string;
      name: string;
    };
    instagram: {
      url: string;
      name: string;
    };
  };
}

export type ProjectOwnership = 'personal' | 'team';
export type ProjectCategory = 'frontend' | 'mobile' | 'backend';

export interface ProjectTranslation {
  locale: {
    code: string;
  };
  name: string;
  story: string;
  logoAlt: string;
}
