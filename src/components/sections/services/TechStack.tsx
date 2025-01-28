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
  const t = await getTranslations('Services.techStack');

  return (
    <Card className="section min-h-[calc(100svh-2rem)]">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <TechStackTabList />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          <p>{t('visitContact')}</p>
          <Button
            asChild
            className="shadow-[0_0px_10px] shadow-primary"
            size="lg"
          >
            <Link href="/contact">
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
