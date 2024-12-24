"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/about", label: "About" },
  { href: "/admin/skills", label: "Skills" },
  { href: "/admin/education", label: "Education" },
  { href: "/admin/contact", label: "Contact" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 bg-red-400 shadow-md">
      <div className="p-4 border-b border-black">
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block px-4 py-2 hover:bg-black",
                pathname === item.href && "bg-black font-semibold"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
