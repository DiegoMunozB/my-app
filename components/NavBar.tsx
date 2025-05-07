"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background sticky top-0 z-50 w-full">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
