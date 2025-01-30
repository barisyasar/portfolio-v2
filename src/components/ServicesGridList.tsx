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

export function ServicesGridList() {
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
            Frontend Development
          </CardTitle>
          <CardDescription>
            We build modern, responsive, and scalable web applications using the
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex-wrap gap-3">
          <NextIcon />
          <ReactIcon />
          <ReactQueryIcon />
          <TailwindIcon />
          <TypeScriptIcon />
        </CardFooter>
      </Card>
      <Card className="h-full bg-card/100">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Backend Development
          </CardTitle>
          <CardDescription>
            We build robust, scalable, and secure backend systems using the
            latest technologies and best practices.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex-wrap gap-3">
          <ExpressIcon />
          <NodeIcon />
          <PostgreIcon />
          <StripeIcon />
        </CardFooter>
      </Card>
      <Card className="h-full bg-card/100">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Search Engine Optimization
          </CardTitle>
          <CardDescription>
            We optimize your website for search engines to improve your online
            presence and drive more traffic to your site.
          </CardDescription>
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
