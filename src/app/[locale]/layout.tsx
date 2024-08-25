import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const inter = Tajawal({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "200",
});

export const metadata: Metadata = {
  title: "المهندس لشراء الأثاث المستعمل - أفضل الأسعار والخدمات في المملكة",
  description:
    "نحن في المهندس نقدم خدمات شراء الأثاث المستعمل بأفضل الأسعار في المملكة. احصل على تقييم مجاني وسريع لأثاثك المستعمل الآن. اتصل بنا لتحقيق أفضل قيمة لأثاثك القديم.",
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
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
