import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link } from "@/i18n/routing";
import SocialMedia from "../SocialMedia";

async function FooterXs() {
  const t = await getTranslations("footer");
  return (
    <Card className="lg:hidden">
      <CardHeader>
        <CardTitle>
          <h6 className="text-2xl font-medium">Barış Yaşar</h6>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("pages")}</AccordionTrigger>
            <AccordionContent>
              <nav className="flex-1">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/">{t("home")}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t("about")}</Link>
                  </li>
                  <li>
                    <Link href="/projects">{t("projects")}</Link>
                  </li>
                  <li>
                    <Link href="/blogs">{t("blogs")}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t("contact")}</Link>
                  </li>
                </ul>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("socialMedia")}</AccordionTrigger>
            <AccordionContent>
              <SocialMedia />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default FooterXs;
