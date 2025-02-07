import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PROFILE_IMG from '../../../../public/profile_1.webp';
import SocialMedia from '@/components/SocialMedia';
import RecapButton from '@/components/RecapButton';

function Hero() {
  return (
    <Card className="section flex min-h-[calc(100svh-66px-2.5rem)] flex-col md:min-h-[calc(100svh-66px-3.5rem)]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="max-w-screen-sm space-y-3">
          <div className="card--5 mx-auto size-60 rounded-full p-3 xs:size-72 xl:size-96">
            <Image
              src={PROFILE_IMG}
              alt="Barış Yaşar"
              priority
              quality={100}
              className="rounded-full"
              loading="eager"
              placeholder="blur"
              blurDataURL={
                'data:image/webp;base64,UklGRjwDAABXRUJQVlA4WAoAAAAgAAAAmgAAmgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgEAALANAJ0BKpsAmwA+7XCxVSmmJCMh8ro5MB2JZ27gR02/yUcPl/7AJlCUXsWk85e9Uf/pWd4eqL3/a3SOMtIQ/hdGAvWKfS9TGB5a+Q9A3u9EPH+3k8cpDetlkdD/5+CjBHhmqwvOiS+YU/LhyYiG9eToKkwP3AAA/uqhTuk/U/0Xe5aKv5pVs1SFmfqZkavUfuZJabPF64x0c8h4HkQDJaoc2SzcCzd7VCARPlz4qPws/XXLGguv7r3lx8zFHsVT42gF5n9RinEcfKQUCl+G5qw9swaB/G4N1X55lSJTg3WoN8uoEDpgB71wbiESCjOHfJUxy+B8uEfffUWGoubBCA7ovKUUAkVDtCTNI66y2jJWmt+ym1LLMk1MPxChIkcuXF5cxQeIrYEL01j2qWles4n4qg63mssjktcxPIHytUWjQlL0G5YlHuZR/60RQAA='
              }
            />
          </div>
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-4xl xs:text-5xl">Barış Yaşar</h1>
            </CardTitle>
            <CardDescription className="text-center text-lg xs:text-2xl">
              Full-Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SocialMedia />
          </CardContent>
        </div>
      </div>
      <div className="flex justify-center">
        <RecapButton />
      </div>
    </Card>
  );
}

export default Hero;
