import { getTranslations } from 'next-intl/server';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Link } from '@/i18n/routing';
import { Button } from '../../ui/button';
import { ChevronRight } from 'lucide-react';
import BlurFade from '../../ui/blur-fade';
import {
  BootstrapIcon,
  ExpressIcon,
  FramerMotionIcon,
  IyzicoIcon,
  NextIcon,
  NodeIcon,
  PaypalIcon,
  ReactIcon,
  ReduxIcon,
  StripeIcon,
  TailwindIcon,
} from '../../Icons';

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
            className="xs:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: t.raw('text') }}
          />
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-cols-2">
          <BlurFade
            delay={0.25}
            direction="right"
            className="col-span-1 row-span-2"
          >
            <Card className="card--5 flex h-full flex-col">
              <CardHeader>
                <CardTitle>
                  <h3>{t('ecommerceTitle')}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 xs:text-lg lg:text-xl">
                {t('ecommerceText')}
              </CardContent>
              <CardFooter className="gap-3">
                <StripeIcon />
                <PaypalIcon />
                <NodeIcon />
              </CardFooter>
            </Card>
          </BlurFade>
          <BlurFade
            delay={0.5}
            direction="left"
            className="col-span-1 row-span-1"
          >
            <Card className="card--5 flex h-full flex-col">
              <CardHeader>
                <CardTitle>
                  <h3>{t('landingWebPageTitle')}</h3>
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex-1 xs:text-lg lg:text-xl">
                {t('landingWebPage')}
              </CardDescription>
              <CardFooter className="gap-3">
                <NextIcon />
                <FramerMotionIcon />
                <BootstrapIcon />
              </CardFooter>
            </Card>
          </BlurFade>
          <BlurFade
            delay={0.75}
            direction="up"
            className="col-span-1 row-span-1"
          >
            <Card className="card--5 flex h-full flex-col">
              <CardHeader>
                <CardTitle>
                  <h3>{t('webpToApplicationTitle')}</h3>
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex-1 xs:text-lg lg:text-xl">
                {t('webpToApplication')}
              </CardDescription>
              <CardFooter className="gap-3">
                <ReactIcon />
                <TailwindIcon />
              </CardFooter>
            </Card>
          </BlurFade>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          <p>{t('servicesText')}</p>
          <Button asChild>
            <Link href="/services">
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
