import { getTranslations } from 'next-intl/server';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Link } from '@/i18n/routing';
import { Button } from '../../ui/button';
import { ChevronRight } from 'lucide-react';

async function Contact() {
  const t = await getTranslations('HomePage.contact');
  return (
    <Card className="section">
      <div className="mx-auto max-w-screen-md space-y-5">
        <CardHeader>
          <CardTitle>
            <h2 className="xs:text-3xl lg:text-4xl">{t('title')}</h2>
          </CardTitle>
          <CardDescription className="xs:text-lg lg:text-xl">
            {t('text')}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            asChild
            className="shadow-[0_0px_10px] shadow-primary"
            size="lg"
          >
            <Link href="/contact">
              {t('getInTouchNow')}{' '}
              <ChevronRight className="animate-bounce-horizontal" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default Contact;
