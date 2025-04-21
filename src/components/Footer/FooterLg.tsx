import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import SocialMedia from '../SocialMedia';
import ThemeToggle from '../ThemeToggle';
import LanguageSelect from '../LanguageSelect';
import FooterLink from './FooterLink';
import { Link } from '@/i18n/routing';

function FooterLg() {
  return (
    <Card className="hidden md:block">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>
              <Link prefetch={false} href="/" className="text-xl font-medium">
                Barış YAŞAR
              </Link>
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
              <FooterLink href="/" text="home" />
            </li>
            <li>
              <FooterLink href="/about" text="about" />
            </li>
            <li>
              <FooterLink href="/services" text="services" />
            </li>
            <li>
              <FooterLink href="/blogs" text="blogs" />
            </li>
            <li>
              <FooterLink href="/contact" text="contact" />
            </li>
          </ul>
        </nav>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2">
        <SocialMedia className="[&_svg]:size-8" />
        <p className="text-sm text-muted-foreground">© 2025 Barış YAŞAR</p>
      </CardFooter>
    </Card>
  );
}

export default FooterLg;
