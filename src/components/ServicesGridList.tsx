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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import HoverGrid from './ui/hover-grid';

export async function ServicesGridList() {
  const t = await getTranslations('Services.servicesGrid');
  return (
    <HoverGrid
      className="grid gap-2 lg:grid-cols-2"
      childrenClassNames={[
        'col-span-2',
        'col-span-2 lg:col-span-1',
        'col-span-2 lg:col-span-1',
      ]}
    >
      <Card className="bg-card/100">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            <h3>{t('frontendDevelopment')}</h3>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{
              __html: t.raw('frontendDevelopmentDescription'),
            }}
          />
        </CardHeader>
        <CardFooter className="flex-wrap gap-3">
          <NextIcon />
          <ReactIcon />
          <ReactQueryIcon />
          <TailwindIcon />
          <TypeScriptIcon />
        </CardFooter>
      </Card>
      <Card className="flex h-full flex-col justify-between bg-card/100">
        <CardHeader className="flex-grow">
          <CardTitle className="text-xl font-bold">
            <h3>{t('backendDevelopment')}</h3>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{
              __html: t.raw('backendDevelopmentDescription'),
            }}
          />
        </CardHeader>
        <CardFooter className="flex-wrap gap-3">
          <ExpressIcon />
          <NodeIcon />
          <PostgreIcon />
          <StripeIcon />
        </CardFooter>
      </Card>
      <Card className="flex h-full flex-col justify-between bg-card/100">
        <CardHeader className="flex-grow">
          <CardTitle className="text-xl font-bold">
            <h3>{t('seo')}</h3>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{ __html: t.raw('seoDescription') }}
          />
        </CardHeader>
        <CardFooter className="flex-wrap gap-3">
          <SeoIcon />
          <AhrefsIcon />
          <LightHouseIcon />
          <SemrushIcon />
        </CardFooter>
      </Card>
    </HoverGrid>
  );
}
