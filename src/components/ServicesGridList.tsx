import { getTranslations } from 'next-intl/server';
import {
  AhrefsIcon,
  ExpressIcon,
  LightHouseIcon,
  NextIcon,
  NodeIcon,
  PostgreIcon,
  ReactIcon,
  ReactQueryIcon,
  SeoIcon,
  SemrushIcon,
  StripeIcon,
  TailwindIcon,
  TypeScriptIcon,
} from './Icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import HoverGrid from './ui/hover-grid';
import { Button } from './ui/button';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';

export async function ServicesGridList() {
  const t = await getTranslations('ServicesPage.servicesGrid');
  return (
    <HoverGrid
      className="grid gap-2 lg:grid-cols-2"
      childrenClassNames={[
        'col-span-2 lg:col-span-1',
        'col-span-2 lg:col-span-1',
        'col-span-2 lg:col-span-1',
        'col-span-2 lg:col-span-1',
      ]}
    >
      <Link href="/services/full-stack-development" prefetch={false}>
        <Card className="bg-card/100">
          <CardHeader>
            <CardTitle className="flex justify-between text-xl font-bold">
              <h3>{t('fullstackDevelopment')}</h3>
              <Button className="size-7 rounded-full p-0">
                <ChevronRight />
              </Button>
            </CardTitle>

            <CardDescription
              dangerouslySetInnerHTML={{
                __html: t.raw('fullstackDevelopmentDescription'),
              }}
            />
          </CardHeader>
          <CardContent className="flex gap-3 space-y-0">
            <NextIcon />
            <ReactIcon />
            <NodeIcon />
            <ExpressIcon />
            <TypeScriptIcon />
          </CardContent>
        </Card>
      </Link>
      <Link href="/services/frontend-development" prefetch={false}>
        <Card className="flex h-full flex-col justify-between bg-card/100">
          <CardHeader>
            <CardTitle className="flex justify-between text-xl font-bold">
              <h3>{t('frontendDevelopment')}</h3>
              <Button className="size-7 rounded-full p-0">
                <ChevronRight />
              </Button>
            </CardTitle>

            <CardDescription
              dangerouslySetInnerHTML={{
                __html: t.raw('frontendDevelopmentDescription'),
              }}
            />
          </CardHeader>
          <CardContent className="flex gap-3 space-y-0">
            <NextIcon />
            <ReactIcon />
            <ReactQueryIcon />
            <TailwindIcon />
            <TypeScriptIcon />
          </CardContent>
        </Card>
      </Link>
      <Link href="/services/backend-development" prefetch={false}>
        <Card className="flex h-full flex-col justify-between bg-card/100">
          <CardHeader className="flex-grow">
            <CardTitle className="flex justify-between text-xl font-bold">
              <h3>{t('backendDevelopment')}</h3>
              <Button className="size-7 rounded-full p-0">
                <ChevronRight />
              </Button>
            </CardTitle>
            <CardDescription
              dangerouslySetInnerHTML={{
                __html: t.raw('backendDevelopmentDescription'),
              }}
            />
          </CardHeader>
          <CardContent className="flex gap-3 space-y-0">
            <NodeIcon />
            <ExpressIcon />
            <PostgreIcon />
            <StripeIcon />
          </CardContent>
        </Card>
      </Link>
      <Link href="/services/search-engine-optimization" prefetch={false}>
        <Card className="flex h-full flex-col justify-between bg-card/100">
          <CardHeader className="flex-grow">
            <CardTitle className="flex justify-between text-xl font-bold">
              <h3>{t('seo')}</h3>
              <Button className="size-7 rounded-full p-0">
                <ChevronRight />
              </Button>
            </CardTitle>
            <CardDescription
              dangerouslySetInnerHTML={{ __html: t.raw('seoDescription') }}
            />
          </CardHeader>
          <CardContent className="flex gap-3 space-y-0">
            <SeoIcon />
            <AhrefsIcon />
            <LightHouseIcon />
            <SemrushIcon />
          </CardContent>
        </Card>
      </Link>
    </HoverGrid>
  );
}
