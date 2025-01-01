import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PROFILE_IMG from "@/assets/profile.webp";
import { Linkedin, Github, ChevronsDown } from "lucide-react";
import { Link } from "@/i18n/routing";

function Hero() {
  return (
    <Card className="section min-h-[calc(100svh-66px-2rem)] lg:min-h-[calc(100svh-66px-3.5rem)] flex flex-col">
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="max-w-screen-md space-y-3">
          <div className="rounded-full overflow-hidden size-60 xs:size-72 xl:size-96 mx-auto p-3 card--5">
            <Image
              src={PROFILE_IMG}
              alt="Barış Yaşar"
              priority
              quality={100}
              className="rounded-full"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <CardHeader>
            <CardTitle>
              <h1 className="text-4xl text-center xs:text-5xl">Barış Yaşar</h1>
            </CardTitle>
            <CardDescription className="text-lg text-center xs:text-2xl">
              Full-Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-5">
            <a target="_blank" href="https://www.linkedin.com/in/barisyasar5/">
              <Linkedin
                fill="hsl(var(--primary))"
                className="size-8 xs:size-10"
              />
            </a>
            <a target="_blank" href="https://github.com/barisyasar">
              <Github
                fill="hsl(var(--primary))"
                className="size-8 xs:size-10"
              />
            </a>
          </CardContent>
          <CardFooter className="justify-center gap-3"></CardFooter>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={"#recap"}>
          <ChevronsDown className="animate-bounce size-8 xs:size-12" />
        </Link>
      </div>
    </Card>
  );
}

export default Hero;
