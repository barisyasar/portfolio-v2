import { Card, CardContent } from '../ui/card';
import ThemeToggle from '../ThemeToggle';
import LanguageSelect from '../LanguageSelect';
import HeaderLink from './HeaderLink';

export default function HeaderLg() {
  return (
    <Card className="hidden md:block">
      <CardContent className="flex items-center justify-between">
        <HeaderLink
          href="/"
          text="barisyasar"
          className="text-2xl lg:text-3xl"
        />

        <nav>
          <ul className="flex gap-3 lg:gap-4">
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
