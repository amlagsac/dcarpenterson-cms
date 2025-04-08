"use client";

import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function UserDropdown() {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(session);
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
    signOut();
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="overflow-hidden rounded-full w-10 h-10 border border-gray-300"
      >
        <Image
          src={user.image || "/placeholder-user.jpg"}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
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
