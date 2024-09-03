import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <img />
          <a href="../"> Home</a>
          <a href="./events"> Events</a>
          <a href="./about-us"> About us</a>
        </nav>
          {children}
        </body>
    </html>
  );
}