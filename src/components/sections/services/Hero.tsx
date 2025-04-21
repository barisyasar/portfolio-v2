import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import ServicesButton from '@/components/ServicesButton';
import { ServicesBeam } from '@/components/ServicesBeam';

async function Hero() {
  const t = await getTranslations('ServicesPage');

  return (
    <Card className="section space-y-8">
      <div className="mx-auto max-w-screen-lg xl:flex xl:flex-row-reverse xl:gap-4">
        <div className="xl:w-1/2">
          <ServicesBeam />
        </div>

        <div className="xl:w-1/2">
          <CardHeader className="my-3 xl:mt-0">
            <CardTitle>
              <h1 className="text-2xl">{t('title')}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent
            dangerouslySetInnerHTML={{ __html: t.raw('description') }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ServicesButton />
      </div>
    </Card>
  );
}

export default Hero;
