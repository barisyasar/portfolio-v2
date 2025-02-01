import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PROFILE_IMG_2 from '../../../../public/profile_2.webp';
import PROFILE_IMG_3 from '../../../../public/profile_3.webp';
import { getTranslations } from 'next-intl/server';
import WordRotate from '@/components/ui/word-rotate';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import Experiences from '@/components/sections/home/Experinces';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('AboutPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/about',
      languages: {
        en: '/en/about',
        tr: '/tr/about',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/about',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

async function About() {
  const t = await getTranslations('AboutPage.recap');

  return (
    <main className="container">
      <Card className="section">
        <div className="mx-auto max-w-screen-md">
          <div className="card--5 float-right size-32 rounded p-1 2xs:size-36 xs:size-40 sm:size-48 md:ms-3 md:size-64 md:p-3">
            <Image
              src={PROFILE_IMG_3}
              alt="Barış Yaşar"
              priority
              quality={100}
              className="rounded"
              loading="eager"
              placeholder="blur"
              blurDataURL={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECERIDE//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQECEv/aAAwDAQACEQMRAD8A9QM6Ouzk0M6zoGBejopgzo6BgXo6DQzrOoNKOs6gAGIjQwA3o6T0PTQfo6n6HoD9HSemehVOj0l6HoVX0PSXoegV9DqXpvpBTrOk9N6gboL0dRDAvQBPTPSfoelop6Z6T9M9FFfTPSV0W6Kqvse0bst2VV/Y9uf2PZSOn22ac02eaKR0TTZUZo8qEV6OklN1A3QXoCObo6XrOlQ3WXRbS2pVNdEumWp60lWGuy3aetJa2VqL/oJtzXYmz0R1zamdOTO1saKR1Z0pmufNWzSpFpTROU8BoYAczD8ZYlQlLT2EsSqnpPVV1EtRndXEdVHWldxHUc96bzCXVbNFsbIlai+Kviuf5x0YjpzrOujC2UcLZbrKuTwmTwRoAUT8ssV8suWURsJYvckuRXPqJajp1lPWUVy6yjrDr1lO4Z3mtZrluGzC/hswz5WkxlfGWZwtnLeYzpsRbMJmK5jSGkPGSGkEAaFDeWXKvGWCI3JLlewlgqGsp6y6NROwHPckuXRckuSKh4bMK+WzJAkypnLZk8yAzFJGSHkRGyN4JDCM4G8AL8ZYdlUTsJYpS0VKxOxWkqiVhbFbC2ATg4bjeAyQ0jZDQBIaQRsRGxogQAaBF2UBVLSUACUlAVSVgCjGgA2GgCBoaAIjY0BEAAB//9k='
              }
            />
          </div>
          <CardHeader>
            <CardTitle>
              <h1 className="xs:text-3xl lg:text-4xl">Barış Yaşar</h1>
            </CardTitle>
            <CardDescription>
              <WordRotate
                duration={3000}
                words={[t('webEnthusiast'), t('lifelongLearner')]}
              />
            </CardDescription>
          </CardHeader>
          <CardContent
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: t.raw('summary') }}
          />
        </div>
      </Card>

      <Card className="section">
        <div className="mx-auto max-w-screen-md">
          <div className="card--5 float-left me-3 aspect-video w-32 rounded p-1 2xs:w-36 xs:w-40 sm:w-48 md:w-64 md:p-3">
            <Image
              src={PROFILE_IMG_2}
              alt="Barış Yaşar"
              priority
              quality={100}
              className="rounded"
              loading="eager"
              placeholder="blur"
              blurDataURL={
                'data:image/webp;base64,UklGRqQCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtgAAABAHAJ0BKkkASQA+7WipUDoltaKrlxx7QB2JZQOwHKFdAC2sv5UycRvdVXUaG8JIdKYGwg1JkJT8AHHRaiX83e0AAP7qG3oqoN33M3uPWyr0NcBRm22pT0pu+vAn9/gHKt2oEZ9G1QZ3Y9S7IpGAAWE5MC9cDMKO04G9gVUSFreLeI32tg2+I7D8veVTDVfaGJV+YDapUPAYIU1laEI/bVeHfc3Kbg27ct7PXbiKIyYNEgzYSIAA'
              }
            />
          </div>
          <CardHeader className="mb-3">
            <CardTitle>
              <h2 className="xs:text-3xl lg:text-4xl">{t('title2')}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent
            dangerouslySetInnerHTML={{ __html: t.raw('description2') }}
          />
          <CardFooter className="mt-3 flex-col items-start gap-2">
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: t.raw('servicesText') }}
            />
            <Button asChild>
              <Link href="/services">
                {t('services')}{' '}
                <ChevronRight className="animate-bounce-horizontal" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
      <Experiences />
    </main>
  );
}

export default About;
