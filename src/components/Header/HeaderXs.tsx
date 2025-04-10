import { AlignJustify } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import ThemeToggle from '../ThemeToggle';
import LanguageSelect from '../LanguageSelect';
import { getTranslations } from 'next-intl/server';
import HeaderLink from './HeaderLink';
import { Link } from '@/i18n/routing';

async function HeaderXs() {
  const t = await getTranslations('Menu');

  return (
    <Card className="md:hidden">
      <CardContent className="flex items-center justify-between">
        <Link href="/" prefetch={false} className="text-3xl font-extrabold">
          <span className="font-extrabold">Barış</span>&nbsp;
          <span className="font-light">Yaşar</span>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Button
              name="menu-button"
              variant="outline"
              asChild
              className="size-10 p-1"
            >
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="spacey-2 flex flex-col">
            <SheetHeader>
              <SheetTitle>{t('menu')}</SheetTitle>
            </SheetHeader>
            <nav className="flex-1">
              <ul className="flex flex-col gap-2">
                <li>
                  <HeaderLink
                    href="/"
                    text="home"
                    layoutId="header-link-active-xs"
                  />
                </li>
                <li>
                  <HeaderLink
                    href="/about"
                    text="about"
                    layoutId="header-link-active-xs"
                  />
                </li>
                <li>
                  <HeaderLink
                    href="/services"
                    text="services"
                    layoutId="header-link-active-xs"
                  />
                </li>
                <li>
                  <HeaderLink
                    href="/blogs"
                    text="blogs"
                    layoutId="header-link-active-xs"
                  />
                </li>
                <li>
                  <HeaderLink
                    href="/contact"
                    text="contact"
                    layoutId="header-link-active-xs"
                  />
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
