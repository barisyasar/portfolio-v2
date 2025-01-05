import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PROFILE_IMG_2 from "@/assets/profile_2.webp";
import { getTranslations } from "next-intl/server";
import TechStack from "@/components/sections/about/TechStack";
import WordRotate from "@/components/ui/word-rotate";
import { Link } from "@/i18n/routing";
import { ChevronsDown } from "lucide-react";

async function About() {
  const t = await getTranslations("AboutPage.recap");

  return (
    <main className="container">
      <Card className="section flex flex-col gap-4">
        <div className="flex-1 max-w-screen-lg mx-auto">
          <div className="rounded size-32 2xs:size-36 xs:size-40 sm:size-48 md:size-64 p-1 card--5 float-right md:ms-3 md:p-3">
            <Image
              src={PROFILE_IMG_2}
              alt="Barış Yaşar"
              priority
              quality={100}
              className="rounded"
              loading="eager"
              placeholder="blur"
              blurDataURL={
                "data:image/webp;base64,UklGRqQCAABXRUJQVlA4WAoAAAAgAAAASAAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtgAAABAHAJ0BKkkASQA+7WipUDoltaKrlxx7QB2JZQOwHKFdAC2sv5UycRvdVXUaG8JIdKYGwg1JkJT8AHHRaiX83e0AAP7qG3oqoN33M3uPWyr0NcBRm22pT0pu+vAn9/gHKt2oEZ9G1QZ3Y9S7IpGAAWE5MC9cDMKO04G9gVUSFreLeI32tg2+I7D8veVTDVfaGJV+YDapUPAYIU1laEI/bVeHfc3Kbg27ct7PXbiKIyYNEgzYSIAA"
              }
            />
          </div>
          <CardHeader className="space-y-0 mb-3">
            <CardTitle>
              <h1 className="text-2xl">Barış Yaşar</h1>
            </CardTitle>
            <CardDescription>
              <WordRotate
                duration={3000}
                words={[t("webEnthusiast"), t("lifelongLearner")]}
              />
            </CardDescription>
          </CardHeader>
          <CardContent dangerouslySetInnerHTML={{ __html: t.raw("summary") }} />
        </div>

        <div className="flex justify-center">
          <Link href={"#tech-stack"}>
            <ChevronsDown className="animate-bounce size-8 xs:size-12" />
          </Link>
        </div>
      </Card>

      <TechStack />
    </main>
  );
}

export default About;
