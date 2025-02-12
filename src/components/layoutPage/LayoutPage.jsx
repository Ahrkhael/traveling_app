import { NextIntlClientProvider } from "next-intl";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function LayoutPage({ children, messages }) {
  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
