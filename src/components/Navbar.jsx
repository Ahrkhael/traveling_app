import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image />
        <Link href="/">Home</Link>
        <Link href="/cities">Cities</Link>
        <Link href="/about-us">About us</Link>
      </nav>
    </header>
  );
}
