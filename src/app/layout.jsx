import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../hooks/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Travel App",
  description: "App made for deciding where to go the next Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/airplane.jpg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
