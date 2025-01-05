import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import { ReCaptchaProvider } from "next-recaptcha-v3";

// Server Component
async function Contact() {
  const t = await getTranslations("ContactPage");

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      lang="eng"
    >
      <main className="container">
        <Card className="section">
          <div className="space-y-5 max-w-screen-md mx-auto">
            <CardHeader>
              <CardTitle>
                <h1>{t("title")}</h1>
              </CardTitle>
              <CardDescription>{t("description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </div>
        </Card>
      </main>
    </ReCaptchaProvider>
  );
}

export default Contact;
