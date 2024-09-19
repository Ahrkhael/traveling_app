import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
