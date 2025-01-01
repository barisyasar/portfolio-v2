import { getTranslations } from "next-intl/server";
import OrbitingCircleSkills from "../OrbitingCircleSkills";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

async function Recap() {
  const t = await getTranslations("HomePage.recap");
  return (
    <Card className="section scroll-mt-2 md:scroll-mt-4" id="recap">
      <div className="max-w-screen-md mx-auto grid md:grid-cols-2">
        <OrbitingCircleSkills />
        <div className="md:-order-1 space-y-5">
          <CardHeader>
            <CardTitle>
              <h2 className="xs:text-3xl lg:text-4xl">{t("A Quick Recap")}</h2>
            </CardTitle>
            <CardDescription
              className="xs:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{ __html: t.raw("summaryText") }}
            />
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/about">
                {t("learnMore")}{" "}
                <ChevronRight className="animate-bounce-horizontal" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default Recap;
