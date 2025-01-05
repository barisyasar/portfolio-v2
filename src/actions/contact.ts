"use server";

import { getContactFormSchema } from "@/lib/schemas/contact";
import { sendEmail } from "@/lib/email";
import { getTranslations } from "next-intl/server";

export async function submitContact(formData: FormData) {
  const t = await getTranslations("ContactPage.form");

  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      recaptchaToken: formData.get("recaptchaToken"),
    };

    const validatedData = getContactFormSchema(t).parse(data);

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.recaptchaToken}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return {
        error: t("validation.recaptcha"),
      };
    }

    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: validatedData.subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      error: t("error"),
    };
  }
}
