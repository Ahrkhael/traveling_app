import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../hooks/ScrollToTop";
import Footer from "../components/footer/Footer";
import en from "../../public/locales/en/common.json";
import es from "../../public/locales/es/common.json";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Travel App",
  description: "App made for deciding where to go the next holidays",
};

export default function RootLayout({ children, params }) {
  const { locale } = params;
  const translations = locale === "es" ? es : en;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/airplane.jpg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ScrollToTop />
        <Navbar translations={translations} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}
