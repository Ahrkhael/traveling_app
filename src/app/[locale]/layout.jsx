import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export async function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: {
      template: `%s | ${t("Title")}`,
      default: t("Title"),
    },
    description: t("Description"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
      },
    },
    openGraph: {
      title: t("Title"),
      description: t("Description"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      siteName: t("Title"),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/preview-image.png`,
          width: 995,
          height: 413,
          alt: t("Title"),
        },
      ],
      locale: "en",
      alternateLocale: "es",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
