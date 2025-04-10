import { ServicesGridList } from '@/components/ServicesGridList';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

async function ServicesGrid() {
  const t = await getTranslations('ServicesPage.servicesGrid');
  return (
    <Card className="section scroll-m-4" id="what-can-i-do">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <CardHeader>
          <CardTitle>
            <h2>{t('title')}</h2>
          </CardTitle>
        </CardHeader>
        <ServicesGridList />
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

export default ServicesGrid;
