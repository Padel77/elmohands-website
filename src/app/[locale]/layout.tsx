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
export const metadata: Metadata & {
  title: { template: string; default: string };
  verification: { google: string };
} = {
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
  // date: "2024-04-26T03:04:34+03:00", // Removed invalid property
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
        <title>{metadata.title.default ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <meta
          name="google-site-verification"
          content={metadata.verification?.google ?? ""}
        />
        {/* Removed invalid date meta tag */}
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
