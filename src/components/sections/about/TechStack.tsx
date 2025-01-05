import TechStackTabList from "@/components/TechStackTabList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

import { getTranslations } from "next-intl/server";

async function TechStack() {
  const t = await getTranslations("AboutPage.techStack");

  return (
    <Card className="section min-h-[calc(100svh-2rem)]" id="tech-stack">
      <div className="max-w-screen-lg mx-auto space-y-5">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <TechStackTabList />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          {t("visitProjects")}
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

export default TechStack;
