import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PROFILE_IMG from "@/assets/profile.webp";
import { getTranslations } from "next-intl/server";
import TechStack from "@/components/sections/about/TechStack";

async function About() {
  const t = await getTranslations("AboutPage.recap");

  return (
    <main className="container">
      <Card className="section min-h-[calc(100svh-66px-2rem)] md:min-h-[calc(100svh-66px-3.5rem)] max-w-screen-md">
        <div className="rounded-lg size-32 p-2 card--5">
          <Image
            src={PROFILE_IMG}
            alt="Barış Yaşar"
            priority
            quality={100}
            className="rounded"
            loading="eager"
            placeholder="blur"
            blurDataURL={
              "data:image/webp;base64,UklGRjwDAABXRUJQVlA4WAoAAAAgAAAAmgAAmgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgEAALANAJ0BKpsAmwA+7XCxVSmmJCMh8ro5MB2JZ27gR02/yUcPl/7AJlCUXsWk85e9Uf/pWd4eqL3/a3SOMtIQ/hdGAvWKfS9TGB5a+Q9A3u9EPH+3k8cpDetlkdD/5+CjBHhmqwvOiS+YU/LhyYiG9eToKkwP3AAA/uqhTuk/U/0Xe5aKv5pVs1SFmfqZkavUfuZJabPF64x0c8h4HkQDJaoc2SzcCzd7VCARPlz4qPws/XXLGguv7r3lx8zFHsVT42gF5n9RinEcfKQUCl+G5qw9swaB/G4N1X55lSJTg3WoN8uoEDpgB71wbiESCjOHfJUxy+B8uEfffUWGoubBCA7ovKUUAkVDtCTNI66y2jJWmt+ym1LLMk1MPxChIkcuXF5cxQeIrYEL01j2qWles4n4qg63mssjktcxPIHytUWjQlL0G5YlHuZR/60RQAA="
            }
          />
        </div>
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Barış Yaşar</h1>
          </CardTitle>
          <CardDescription>Full-Stack Developer</CardDescription>
        </CardHeader>
        <CardContent dangerouslySetInnerHTML={{ __html: t.raw("summary") }} />
      </Card>
      <TechStack />
    </main>
  );
}

export default About;
