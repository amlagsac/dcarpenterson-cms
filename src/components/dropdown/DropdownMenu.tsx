"use client";

import { User } from "next-auth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BasicButton from "../button/BasicButton";
import DropdownPanel from "./DropdownPanel";

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export default function DropdownMenu(props: DropdownMenuProps) {
  const { user, className, ...rest } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  }, [setIsOpen]);

  return (
    <div {...rest} className={`relative ${className || ""}`} ref={dropdownRef}>
      <BasicButton
        onClick={() => setIsOpen(!isOpen)}
        className="overflow-hidden rounded-full w-10 h-10 border border-gray-300 flex items-center justify-center cursor-pointer"
      >
        <Image
          src={user?.image || "/placeholder-user.jpg"}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </BasicButton>
      {isOpen && <DropdownPanel />}
    </div>
  );
}
