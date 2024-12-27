import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import PROFILE_IMG from "@/assets/profile.webp";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="container">
      <Card className="min-h-[calc(100dvh-66px-2rem)] lg:min-h-[calc(100dvh-66px-3.5rem)] justify-center items-center flex flex-col">
        <div className="max-w-screen-md space-y-3">
          <div className="rounded-full overflow-hidden size-48 md:size-72 xl:size-96 mx-auto bg-card/[0.5] border p-4">
            <Image
              src={PROFILE_IMG}
              alt="hey"
              priority
              quality={100}
              className="rounded-full"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-3xl">Barış Yaşar</CardTitle>
            <CardDescription className="text-base">
              Full-Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent>
            With 4 years of software experience, including 2+ years
            professionally, I am a full-stack developer proficient in JavaScript
            and TypeScript, currently working with Next.js and Node.js.
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
