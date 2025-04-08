"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps extends React.PropsWithChildren {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function NavItem(props: NavItemProps) {
  const { href, label, children } = props;

  const pathname = usePathname();
  const isActiveTab = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 w-48 rounded-lg transition-colors
                ${isActiveTab ? "bg-gray-200 text-black" : "text-gray-500 hover:text-black hover:bg-gray-100"}`}
    >
      {children}
      <span className={`font-medium`}>{label}</span>
    </Link>
  );
}
