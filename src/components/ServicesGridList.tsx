import { Card, CardDescription, CardTitle } from './ui/card';
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
        <CardTitle className="text-xl font-bold">
          Frontend Development
        </CardTitle>
        <CardDescription className="mt-2">
          We build modern, responsive, and scalable web applications using the
          latest technologies and best practices.
        </CardDescription>
      </Card>
      <Card className="bg-card/100">
        <CardTitle className="text-xl font-bold">Backend Development</CardTitle>
        <CardDescription className="mt-2">
          We build robust, scalable, and secure backend systems using the latest
          technologies and best practices.
        </CardDescription>
      </Card>
      <Card className="bg-card/100">
        <CardTitle className="text-xl font-bold">SEO</CardTitle>
        <CardDescription className="mt-2">
          We optimize your website for search engines to improve your online
          presence and drive more traffic to your site.
        </CardDescription>
      </Card>
    </HoverGrid>
  );
}
