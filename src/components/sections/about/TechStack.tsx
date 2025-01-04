import TechStackTabList from "@/components/TechStackTabList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getTranslations } from "next-intl/server";

async function TechStack() {
  const t = await getTranslations("AboutPage.techStack");

  return (
    <Card className="section">
      <div className="max-w-screen-lg mx-auto space-y-5">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <TechStackTabList />
        </CardContent>
      </div>
    </Card>
  );
}

export default TechStack;
