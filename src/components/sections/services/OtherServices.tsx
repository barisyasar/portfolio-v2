import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import OtherServiceCard from './OtherServiceCard';
import HoverGrid from '@/components/ui/hover-grid';

export type ServiceId = 'full-stack' | 'frontend' | 'backend' | 'seo';

export interface ServiceCardData {
  id: ServiceId;
  title: string;
  description: string;
  href: string;
}

async function OtherServices({ excludeIds }: { excludeIds?: ServiceId[] }) {
  const t = await getTranslations('ServicesMarquee');

  const serviceCards: ServiceCardData[] = [
    {
      id: 'full-stack',
      title: t('fullStack.title'),
      description: t('fullStack.description'),
      href: '/services/full-stack-development',
    },
    {
      id: 'frontend',
      title: t('frontend.title'),
      description: t('frontend.description'),
      href: '/services/frontend-development',
    },
    {
      id: 'backend',
      title: t('backend.title'),
      description: t('backend.description'),
      href: '/services/backend-development',
    },
    {
      id: 'seo',
      title: t('seo.title'),
      description: t('seo.description'),
      href: '/services/search-engine-optimization',
    },
  ];

  const filteredCards = excludeIds
    ? serviceCards.filter((card) => !excludeIds.includes(card.id))
    : serviceCards;

  return (
    <Card className="section">
      <div className="mx-auto max-w-screen-lg space-y-3">
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <HoverGrid
            className="grid gap-2 md:grid-cols-2 lg:grid-cols-3"
            childrenClassNames={['col-span-1', 'col-span-1', 'col-span-1']}
          >
            {filteredCards.map((card) => (
              <OtherServiceCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </HoverGrid>
        </CardContent>
      </div>
    </Card>
  );
}

export default OtherServices;
