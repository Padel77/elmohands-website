import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { Tajawal } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { getMessages } from "next-intl/server";
import "./globals.css";

const inter = Tajawal({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "200",
});

export const metadata: Metadata = {
  title: {
    template:
      "%s |  المهندس لشراء الاثاث المستعمل |المهندس لشرا الأثاث المستعمل ",
    default:
      " المهندس لشراء الأثاث المستعمل | المهندس أفضل الأسعار والخدمات في  شراء الاثاث فى الرياض",
  },
  description:
    "نحن في المهندس نقدم خدمات شراء الأثاث المستعمل بأفضل الأسعار في الرياض. احصل على تقييم مجاني وسريع لأثاثك المستعمل الآن. اتصل بنا لتحقيق أفضل قيمة لأثاثك القديم.",
  verification: {
    google: "zClMKi9biXYt2s7E6hRCHA9qzlG9ijHtoXB-C3cGoVM",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <title>المهندس</title>
        <meta
          name="المهندس لشراء الاثاث المستعمل |المهندس لشرا الأثاث المستعمل"
          content="نحن في المهندس نقدم خدمات شراء الأثاث المستعمل بأفضل الأسعار في الرياض. احصل على تقييم مجاني وسريع لأثاثك المستعمل الآن. اتصل بنا لتحقيق أفضل قيمة لأثاثك القديم"
        />
        <link rel="icon" href="/src/app/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
