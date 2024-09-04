import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img />
        <Link href="/">Home</Link>
        <a href="/cities">Cities</a>
        <a href="/about-us">About us</a>
      </nav>
    </header>
  );
}
