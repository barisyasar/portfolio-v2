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
          <Link href="/" className="text-2xl font-medium">
            Barış Yaşar
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
                    <FooterLink
                      href="/"
                      text={'home'}
                      layoutId="footer-link-active-xs"
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/about"
                      text={'about'}
                      layoutId="footer-link-active-xs"
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/services"
                      text={'services'}
                      layoutId="footer-link-active-xs"
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/blogs"
                      text={'blogs'}
                      layoutId="footer-link-active-xs"
                    />
                  </li>
                  <li>
                    <FooterLink
                      href="/contact"
                      text={'contact'}
                      layoutId="footer-link-active-xs"
                    />
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
        <div className="text-sm text-muted-foreground">© 2025 Barış Yaşar</div>
      </CardFooter>
    </Card>
  );
}

export default FooterXs;
