import { getTranslations } from "next-intl/server";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SocialMedia from "../SocialMedia";
import { Link } from "@/i18n/routing";
import ThemeToggle from "../ThemeToggle";
import LanguageSelect from "../LanguageSelect";

async function FooterLg() {
  const t = await getTranslations("footer");
  return (
    <Card className="hidden md:block">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>
              <h6 className="text-xl font-medium">Barış Yaşar</h6>
            </CardTitle>
            <CardDescription className="text-sm">
              Full-Stack Developer
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <LanguageSelect />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <nav>
          <ul className="flex justify-center gap-12 text-sm">
            <li>
              <Link className="link" href="/">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link className="link" href="/about">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link className="link" href="/projects">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link className="link" href="/blogs">
                {t("blogs")}
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </CardContent>
      <CardFooter className="justify-center">
        <SocialMedia className="[&_svg]:size-8" />
      </CardFooter>
    </Card>
  );
}

export default FooterLg;
