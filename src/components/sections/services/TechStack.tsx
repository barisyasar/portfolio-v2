import TechStackTabList from '@/components/TechStackTabList';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { getTranslations } from 'next-intl/server';

interface TechStackProps {
  defaultActiveCategory?: string;
  withFiltering?: boolean;
  className?: string;
  descriptionKey?: string;
}

async function TechStack({
  defaultActiveCategory = 'all',
  withFiltering = true,
  className,
  descriptionKey = 'description',
}: TechStackProps) {
  const t = await getTranslations('ServicesPage.techStack');

  return (
    <Card className={cn('section min-h-[calc(100svh-2rem)]', className)}>
      <div className="mx-auto max-w-screen-lg space-y-5">
        <CardHeader>
          <CardTitle>
            <h2>{t('title')}</h2>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{ __html: t.raw(descriptionKey) }}
          />
        </CardHeader>
        <CardContent>
          <TechStackTabList
            defaultActiveCategory={defaultActiveCategory}
            withFiltering={withFiltering}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          <p className="text-muted-foreground">{t('visitContact')}</p>
          <Button
            asChild
            className="shadow-[0_0px_10px] shadow-primary"
            size="lg"
          >
            <Link href="/contact" prefetch={false}>
              {t('contact')}{' '}
              <ChevronRight className="animate-bounce-horizontal" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default TechStack;
