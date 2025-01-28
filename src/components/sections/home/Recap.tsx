import { getTranslations } from 'next-intl/server';
import OrbitingCircleSkills from '../../OrbitingCircleSkills';
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

async function Recap() {
  const t = await getTranslations('HomePage.recap');
  return (
    <Card className="section" id="recap">
      <div className="mx-auto grid max-w-screen-md md:grid-cols-2">
        <OrbitingCircleSkills />
        <div className="space-y-5 md:-order-1">
          <CardHeader>
            <CardTitle>
              <h2 className="xs:text-3xl lg:text-4xl">{t('A Quick Recap')}</h2>
            </CardTitle>
            <CardDescription
              dangerouslySetInnerHTML={{ __html: t.raw('summaryText') }}
            />
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/about">
                {t('learnMore')}{' '}
                <ChevronRight className="animate-bounce-horizontal" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default Recap;
