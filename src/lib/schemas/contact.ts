import { z } from "zod";

export const getContactFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t("validation.name")),
    email: z.string().email(t("validation.email")),
    subject: z.string().min(3, t("validation.subject")),
    message: z.string().min(10, t("validation.message")),
    recaptchaToken: z.string().optional(),
  });

export type ContactFormType = z.infer<ReturnType<typeof getContactFormSchema>>;
