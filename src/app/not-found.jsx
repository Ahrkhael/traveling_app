import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { routing } from "@/i18n/routing";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default async function NotFound() {
  const locale =
    (await cookies()).get("NEXT_LOCALE")?.value || routing.defaultLocale;

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <PageNotFound />
      <Footer />
    </NextIntlClientProvider>
  );
}
