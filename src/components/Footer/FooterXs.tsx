import { getTranslations } from 'next-intl/server';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Link } from '@/i18n/routing';
import SocialMedia from '../SocialMedia';
import ThemeToggle from '../ThemeToggle';
import LanguageSelect from '../LanguageSelect';
import FooterLink from './FooterLink';

async function FooterXs() {
  const t = await getTranslations('footer');

  return (
    <Card className="md:hidden">
      <CardHeader>
        <CardTitle>
          <Link prefetch={false} href="/" className="text-2xl font-medium">
            Barış YAŞAR
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('pages')}</AccordionTrigger>
            <AccordionContent>
              <nav className="flex-1">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FooterLink href="/" text={'home'} />
                  </li>
                  <li>
                    <FooterLink href="/about" text={'about'} />
                  </li>
                  <li>
                    <FooterLink href="/services" text={'services'} />
                  </li>
                  <li>
                    <FooterLink
                      href="/services/full-stack-development"
                      text={'fullStackDevelopment'}
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/services/frontend-development"
                      text={'frontendDevelopment'}
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/services/backend-development"
                      text={'backendDevelopment'}
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/services/search-engine-optimization"
                      text={'seo'}
                    />
                  </li>
                  <li>
                    <FooterLink href="/blogs" text={'blogs'} />
                  </li>
                  <li>
                    <FooterLink href="/contact" text={'contact'} />
                  </li>
                </ul>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t('socialMedia')}</AccordionTrigger>
            <AccordionContent>
              <SocialMedia />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelect />
        </div>
        <div className="text-sm text-muted-foreground">© 2025 Barış YAŞAR</div>
      </CardFooter>
    </Card>
  );
}

export default FooterXs;
