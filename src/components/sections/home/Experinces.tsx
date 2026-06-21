import TailwindIcon from '@/components/icons/tailwind-icon';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import {
  FramerMotionIcon,
  NextIcon,
  NodeIcon,
  PaypalIcon,
  ReactIcon,
  SassIcon,
  StripeIcon,
} from '../../Icons';
import { Button } from '../../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';

async function Experiences() {
  const t = await getTranslations('HomePage.experiences');
  return (
    <Card className="section">
      <div className="mx-auto max-w-screen-md space-y-5">
        <CardHeader>
          <CardTitle>
            <h2 className="xs:text-3xl lg:text-4xl">{t('title')}</h2>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{ __html: t.raw('text') }}
          />
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-rows-2 place-items-stretch gap-4 space-y-0 md:grid-cols-2">
          <Card className="card--5 row-span-2 flex min-h-full flex-col">
            <CardHeader className="flex-1">
              <CardTitle>
                <h3>{t('ecommerceTitle')}</h3>
              </CardTitle>
              <CardDescription>{t('ecommerceText')}</CardDescription>
            </CardHeader>

            <CardFooter className="gap-3">
              <StripeIcon />
              <PaypalIcon />
              <NodeIcon />
            </CardFooter>
          </Card>

          <Card className="card--5 col-span-1 row-span-1 flex min-h-full flex-col">
            <CardHeader className="flex-1">
              <CardTitle>
                <h3>{t('landingWebPageTitle')}</h3>
              </CardTitle>
              <CardDescription>{t('landingWebPage')}</CardDescription>
            </CardHeader>
            <CardFooter className="gap-3">
              <NextIcon />
              <FramerMotionIcon />
              <SassIcon />
            </CardFooter>
          </Card>

          <Card className="card--5 col-span-1 row-span-1 flex min-h-full flex-col">
            <CardHeader className="flex-1">
              <CardTitle>
                <h3>{t('webpToApplicationTitle')}</h3>
              </CardTitle>
              <CardDescription>{t('webpToApplication')}</CardDescription>
            </CardHeader>
            <CardFooter className="gap-3">
              <ReactIcon />
              <TailwindIcon />
            </CardFooter>
          </Card>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          <p className="text-muted-foreground">{t('servicesText')}</p>
          <Button asChild>
            <Link href="/services" prefetch={false}>
              {t('services')}{' '}
              <ChevronRight className="animate-bounce-horizontal" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default Experiences;
