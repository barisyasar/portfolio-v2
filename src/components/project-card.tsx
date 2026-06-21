import { Link } from '@/i18n/routing';
import Project, { ProjectTranslation } from '@/types/project.type';
import { getLocalizedContent } from '@/utils/get-localized-content';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle } from './ui/card';

async function ProjectCard({ project }: { project: Project }) {
  const t = await getTranslations('ProjectCard');
  const { getTranslation } = await getLocalizedContent();
  const translation = getTranslation(
    project.translations,
  ) as ProjectTranslation;

  return (
    <Link
      href={{
        pathname: '/projects/[slug]',
        params: {
          slug: project.slug,
        },
      }}
      prefetch={false}
    >
      <Card className="card--5">
        <CardHeader className="flex-row items-center gap-4 space-y-0">
          <Image
            src={`/projects/${project.logo}`}
            width={60}
            height={60}
            alt={translation.logoAlt}
            unoptimized
            className="rounded-lg border"
            loading="lazy"
          />
          <div className="flex-grow">
            <CardTitle className="line-clamp-1 text-xl font-medium">
              {translation.name}
            </CardTitle>
            {project.ownership === 'personal' ? (
              <Badge variant={'success'}>{t('personal')}</Badge>
            ) : (
              <Badge>{t('team')}</Badge>
            )}
          </div>
          <Button className="size-7 shrink-0 rounded-full p-0">
            <ChevronRight />
          </Button>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default ProjectCard;
