import { Card, CardContent } from '../ui/card';
import ThemeToggle from '../ThemeToggle';
import LanguageSelect from '../LanguageSelect';
import HeaderLink from './HeaderLink';
import { Link } from '@/i18n/routing';
import { Button } from '../ui/button';

export default function HeaderLg() {
  return (
    <Card className="hidden md:block">
      <CardContent className="flex items-center justify-between">
        <Link href="/" className="text-2xl lg:text-3xl">
          <span className="font-extrabold">Barış</span>&nbsp;
          <span className="font-light">Yaşar</span>
        </Link>

        <nav>
          <ul className="flex gap-3 lg:gap-4">
            <li>
              <HeaderLink href="/" text="home" />
            </li>
            <li>
              <HeaderLink href="/about" text="about" />
            </li>
            <li>
              <HeaderLink href="/services" text="services" />
            </li>
            <li>
              <HeaderLink href="/blogs" text="blogs" />
            </li>
            <li>
              <HeaderLink href="/contact" text="contact" />
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
