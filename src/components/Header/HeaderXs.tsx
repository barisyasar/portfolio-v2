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

async function HeaderXs() {
  const t = await getTranslations("Menu");

  return (
    <Card className="md:hidden">
      <CardContent className="flex justify-between items-center">
        <div className="text-3xl">
          <span className="font-extrabold">Barış</span>&nbsp;
          <span className="font-light">Yaşar</span>
        </div>
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" asChild className="p-1 size-10">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col spacey-2">
            <SheetHeader>
              <SheetTitle>{t("menu")}</SheetTitle>
            </SheetHeader>
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
            <div className="flex gap-2">
              <ThemeToggle />
              <LanguageSelect />
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}

export default HeaderXs;
