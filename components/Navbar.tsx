"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const resumeHref = "/resume.pdf";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center justify-between px-8 py-5 lg:px-12">
      {/* Left: logo */}
      <Link
        href="/"
        className="text-base font-bold tracking-tight text-neutral-900 hover:text-accent transition-colors z-10"
      >
        rishit.
      </Link>

      {/* Center: nav links — absolutely centered in full viewport width */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              pathname === link.href
                ? "text-neutral-900 font-medium"
                : "text-neutral-400 hover:text-neutral-900 hover:underline underline-offset-4"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-400 hover:text-neutral-900 hover:underline underline-offset-4 transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Right: contact email */}
      <a
        href="mailto:hello@rishit.dev"
        className="hidden md:block text-xs text-neutral-400 hover:text-neutral-900 transition-colors tracking-wide z-10"
      >
        hello@rishit.dev
      </a>

      {/* Mobile nav */}
      <MobileNav links={navLinks} />
    </nav>
  );
}
