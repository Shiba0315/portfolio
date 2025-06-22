"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/uses", label: "Uses" },
  ];

  return (
    <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 lg:space-x-8 bg-gray-100 dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-inner">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link href={item.href}>
              <span
                className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full cursor-pointer transition-all duration-200 text-sm sm:text-base ${
                  isActive
                    ? "bg-teal-500 text-white shadow-md font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
