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

import { getTranslations } from 'next-intl/server';

async function TechStack() {
  const t = await getTranslations('ServicesPage.techStack');

  return (
    <Card className="section min-h-[calc(100svh-2rem)]">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <CardHeader>
          <CardTitle>
            <h2>{t('title')}</h2>
          </CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <TechStackTabList />
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
