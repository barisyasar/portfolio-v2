"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReCaptcha } from "next-recaptcha-v3";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { ContactFormType } from "@/lib/schemas/contact";
import { getContactFormSchema } from "@/lib/schemas/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
};

export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useReCaptcha();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(getContactFormSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormType) {
    try {
      if (!executeRecaptcha) {
        throw new Error(t("validation.recaptcha"));
      }

      setIsSubmitting(true);
      const token = await executeRecaptcha("contact_form");

      if (!token) {
        throw new Error(t("validation.recaptcha"));
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("recaptchaToken", token);

      const result = await submitContact(formData);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: t("success"),
        description: t("email.label") + ": " + data.email,
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        variant: "destructive",
        title: t("error"),
        description: error instanceof Error ? error.message : t("error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-4"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={formAnimation}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name.label")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("name.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={formAnimation}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("email.placeholder")}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={formAnimation}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("subject.label")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("subject.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={formAnimation}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message.label")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("message.placeholder")}
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={formAnimation}
        >
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? t("submit.sending") : t("submit.send")}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
