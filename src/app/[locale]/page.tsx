import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="container">
      <h1>{t("title")}</h1>

      <Button asChild>
        <Link href="/contact">{t("contact")}</Link>
      </Button>
    </div>
  );
}
