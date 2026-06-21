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
  platforms: ProjectPlatform[];
}

export type ProjectOwnership = 'personal' | 'team';
export type ProjectCategory = 'frontend' | 'mobile' | 'backend';

export type ProjectPlatform = {
  name: 'web' | 'instagram' | 'google-play' | 'app-store';
  url: string;
};

export interface ProjectTranslation {
  locale: {
    code: string;
  };
  name: string;
  storyTitle: string;
  story: string;
  logoAlt: string;
}
