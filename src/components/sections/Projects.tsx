import { getTranslations } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BlurFade from "../ui/blur-fade";
import Icons from "../Icons";

async function Projects() {
  const t = await getTranslations("HomePage.projects");
  return (
    <Card className="section scroll-mt-2 lg:scroll-mt-4" id="recap">
      <div className="max-w-screen-md mx-auto space-y-5">
        <CardHeader>
          <CardTitle>
            <h2 className="xs:text-3xl lg:text-4xl">{t("Projects")}</h2>
          </CardTitle>
          <CardDescription
            className="xs:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: t.raw("text") }}
          />
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-cols-2">
          <BlurFade
            delay={0.25}
            direction="right"
            className="col-span-1 row-span-2"
          >
            <Card className="card--5 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <CardTitle>
                  <h3>Nanografi</h3>
                </CardTitle>

                <Link
                  href={{
                    pathname: "/projects/[id]",
                    params: {
                      id: 1,
                    },
                  }}
                  className="animate-bounce-horizontal"
                >
                  <ChevronRight />
                </Link>
              </div>
              <CardDescription className="xs:text-lg lg:text-xl flex-1">
                {t("nanografiText")}
              </CardDescription>
              <CardFooter className="gap-3">
                <Icons.react />
                <Icons.redux />
                <Icons.express />
              </CardFooter>
            </Card>
          </BlurFade>
          <BlurFade
            delay={0.5}
            direction="left"
            className="col-span-1 row-span-1"
          >
            <Card className="card--5 flex-flex-col h-full">
              <div className="flex items-center justify-between">
                <CardTitle>
                  <h3>Enerjey</h3>
                </CardTitle>

                <Link
                  href={{
                    pathname: "/projects/[id]",
                    params: {
                      id: 1,
                    },
                  }}
                  className="animate-bounce-horizontal"
                >
                  <ChevronRight />
                </Link>
              </div>
              <CardDescription className="xs:text-lg lg:text-xl flex-1">
                {t("enerjeyText")}
              </CardDescription>
              <CardFooter className="gap-3">
                <Icons.react />
                <Icons.bootstrap />
                <Icons.node />
              </CardFooter>
            </Card>
          </BlurFade>
          <BlurFade
            delay={0.75}
            direction="up"
            className="col-span-1 row-span-1"
          >
            <Card className="card--5 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <CardTitle>
                  <h3>Tripy</h3>
                </CardTitle>

                <Link
                  href={{
                    pathname: "/projects/[id]",
                    params: {
                      id: 1,
                    },
                  }}
                  className="animate-bounce-horizontal"
                >
                  <ChevronRight />
                </Link>
              </div>
              <CardDescription className="xs:text-lg lg:text-xl flex-1">
                {t("tripyText")}
              </CardDescription>
              <CardFooter className="gap-3">
                <Icons.react />
                <Icons.framerMotion />
              </CardFooter>
            </Card>
          </BlurFade>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/projects">
              {t("allProjects")}{" "}
              <ChevronRight className="animate-bounce-horizontal" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default Projects;
