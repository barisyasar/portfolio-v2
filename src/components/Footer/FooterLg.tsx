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
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm">
            <li>
              <ul className="space-y-2">
                <li>
                  <FooterLink href="/" text="home" />
                </li>
                <li>
                  <FooterLink href="/about" text="about" />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <FooterLink href="/services" text="services" />
                  <ul className="mt-2 space-y-2">
                    <li>
                      <FooterLink
                        href="/services/full-stack-development"
                        text="fullStackDevelopment"
                      />
                    </li>
                    <li>
                      <FooterLink
                        href="/services/frontend-development"
                        text="frontendDevelopment"
                      />
                    </li>
                    <li>
                      <FooterLink
                        href="/services/backend-development"
                        text="backendDevelopment"
                      />
                    </li>
                    <li>
                      <FooterLink
                        href="/services/search-engine-optimization"
                        text="seo"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
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
        <SocialMedia className="mt-2 [&_svg]:size-8" />
        <p className="text-sm text-muted-foreground">© 2025 Barış YAŞAR</p>
      </CardFooter>
    </Card>
  );
}

export default FooterLg;
