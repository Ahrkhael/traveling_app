import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { routing } from "@/i18n/routing";
import LangUpdaterHTMLtag from "../hooks/LangUpdaterHTMLtag";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Travel App",
  description: "App made for deciding where to go the next holidays",
};

export default async function RootLayout({ children }) {
  const locale =
    (await cookies()).get("NEXT_LOCALE")?.value || routing.defaultLocale;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/airplane.jpg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {" "}
        <LangUpdaterHTMLtag />
        {children}
      </body>
    </html>
  );
}
