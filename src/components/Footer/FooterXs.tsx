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

async function FooterXs() {
  const t = await getTranslations('footer');

  return (
    <Card className="md:hidden">
      <CardHeader>
        <CardTitle>
          <h6 className="text-2xl font-medium">Barış Yaşar</h6>
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
                    <Link href="/">{t('home')}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t('about')}</Link>
                  </li>
                  <li>
                    <Link href="/services">{t('services')}</Link>
                  </li>
                  <li>
                    <Link href="/blogs">{t('blogs')}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t('contact')}</Link>
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
