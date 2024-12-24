import { AlignJustify } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import ThemeToggle from "../ThemeToggle";
import LanguageSelect from "../LanguageSelect";
import { getTranslations } from "next-intl/server";
import MorphingText from "../ui/morphing-text";

const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];

async function HeaderLg() {
  const t = await getTranslations("Menu");

  return (
    <Card className="hidden md:block">
      <CardContent className="flex items-center justify-between">
        <div className="text-2xl lg:text-3xl">
          <span className="font-extrabold">Barış</span>&nbsp;
          <span className="font-light">Yaşar</span>
        </div>

        <nav>
          <ul className="flex gap-4">
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
        <div className="flex gap-2">
          <ThemeToggle />
          <LanguageSelect />
        </div>
      </CardContent>
    </Card>
  );
}

export default HeaderLg;
