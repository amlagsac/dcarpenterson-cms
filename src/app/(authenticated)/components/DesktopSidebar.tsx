import Divider from "@/components/common/Divider";
import NavItem from "@/components/nav/NavItem";
import { dashboardUrl, usersUrl } from "@/lib/route";
import {
  House,
  Landmark,
  Mail,
  Package,
  Settings,
  User2,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function DesktopSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-auto bg-white border-r border-r-gray-200 sm:flex flex-col">
      <nav className="flex flex-col justify-center items-center gap-2.5 py-4">
        <Image
          src={"/DCS_Logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="border"
        />
        <Divider className="w-full border-t border-gray-200" />
      </nav>
      <nav className="flex flex-col items-center justify-center gap-2 px-2">
        <NavItem href={dashboardUrl} label="Dashboard">
          <House />
        </NavItem>
        <NavItem href={usersUrl} label="Users">
          <User2 />
        </NavItem>
        <NavItem href={"#"} label="Brands">
          <Landmark />
        </NavItem>
        <NavItem href={"#"} label="Products">
          <Package />
        </NavItem>
        <NavItem href={"#"} label="Services">
          <Wrench />
        </NavItem>
        <NavItem href={"#"} label="Inquiries">
          <Mail />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavItem href={"#"} label="Settings">
          <Settings />
        </NavItem>
      </nav>
    </aside>
  );
}
