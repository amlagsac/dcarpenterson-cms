import { handleLogout } from "@/lib/actions/logout";
import { Hand, LogOut, Settings2 } from "lucide-react";
import BasicButton from "../button/BasicButton";
import Container from "../layout/Container";

export default function DropdownPanel() {
  const menuItems = [
    {
      label: "Settings",
      icon: Settings2,
      onClick: () => console.log("Go to settings"),
    },
    {
      label: "Support",
      icon: Hand,
      onClick: () => console.log("Open support"),
    },
    {
      label: "Sign Out",
      icon: LogOut,
      onClick: handleLogout,
      withDivider: true,
    },
  ];

  return (
    <Container className="absolute right-0 mt-2 w-36 rounded-md bg-white shadow-2xl ring-1 ring-gray-300 z-50">
      <div className="px-4 py-2 text-sm font-bold text-gray-700 border-b border-gray-300">
        My Account
      </div>

      {menuItems.map(({ label, icon: Icon, onClick, withDivider }) => (
        <div
          key={label}
          className={`px-2 py-1 ${withDivider ? "border-t border-gray-300" : ""}`}
        >
          <BasicButton
            onClick={onClick}
            className="inline-flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-200"
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </BasicButton>
        </div>
      ))}
    </Container>
  );
}
