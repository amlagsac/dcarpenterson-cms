"use client";

import { useEffect, useRef, useState } from "react";
import { LogOut, User } from "lucide-react";
import { handleLogout } from "@/lib/actions/logout";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    handleLogout();
  };

  // if (!user) return null

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <User className="w-5 h-5 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 z-50">
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            My Account
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
