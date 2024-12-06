"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    pathname === href
      ? "text-foreground font-bold"
      : "transition-colors hover:text-foreground text-gray-400";

  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4">
          <nav className="flex items-center gap-6 text-sm">
            <Link className={getLinkClass("/dashboard")} href="/dashboard">
              Home
            </Link>
            <Link className={getLinkClass("/about")} href="/about">
              About
            </Link>
            <Link className={getLinkClass("/contact")} href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
