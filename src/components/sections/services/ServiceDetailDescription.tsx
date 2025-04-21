import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

interface ServiceDetailDescriptionProps {
  translationKey: string;
  children?: ReactNode;
}

async function ServiceDetailDescription({
  translationKey,
  children,
}: ServiceDetailDescriptionProps) {
  const t = await getTranslations(translationKey);

  return (
    <Card className="section">
      <div className="mx-auto grid max-w-screen-lg gap-4 lg:grid-cols-2">
        <CardHeader className="order-2 lg:order-1">
          <CardTitle>
            <h1 className="text-2xl">{t('title')}</h1>
          </CardTitle>
          <CardContent
            dangerouslySetInnerHTML={{ __html: t.raw('description') }}
          />
        </CardHeader>
        <CardContent className="order-1 lg:order-2">{children}</CardContent>
      </div>
    </Card>
  );
}

export default ServiceDetailDescription;
