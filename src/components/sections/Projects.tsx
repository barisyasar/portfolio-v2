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
import NumberTicker from "../ui/number-ticker";
import BlurFade from "../ui/blur-fade";

async function Projects() {
  const t = await getTranslations("HomePage.projects");
  return (
    <Card className="section scroll-mt-2 lg:scroll-mt-4" id="recap">
      <div className="max-w-screen-md mx-auto space-y-5">
        <CardHeader>
          <CardTitle>
            {/* <h2 className="xs:text-3xl lg:text-4xl">
                {t.rich("Projects", {
                  numberTicker: () => <NumberTicker value={10} delay={1.5} />,
                })}
              </h2> */}
            <h2 className="xs:text-3xl lg:text-4xl">{t("Projects")}</h2>
          </CardTitle>
          <CardDescription
            className="xs:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: t.raw("text") }}
          />
        </CardHeader>
        <CardContent className="grid grid-cols-2 grid-rows-2 gap-3">
          <BlurFade
            delay={0.25}
            direction="right"
            className="col-span-1 row-span-2 bg-red-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            aut iste doloremque impedit porro, veniam harum nisi eos sint
            quaerat?
          </BlurFade>
          <BlurFade
            delay={0.5}
            direction="left"
            className="col-span-1 row-span-1 bg-green-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            aut iste doloremque impedit porro, veniam harum nisi eos sint
            quaerat? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Modi quasi eveniet esse ducimus beatae. Dolores harum nam dolor
            aliquam, eveniet, cum laudantium sunt hic, sapiente molestias
            corporis quia pariatur ipsam?
          </BlurFade>
          <BlurFade
            delay={0.75}
            direction="up"
            className="col-span-1 row-span-1 bg-blue-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            aut iste doloremque impedit porro, veniam harum nisi eos sint
            quaerat?
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
