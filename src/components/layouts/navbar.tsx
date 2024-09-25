"use client";
import { useState } from "react";
import { NavbarLinks } from "@/components/layouts/navbar-links";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <nav className="sticky inset-x-0 right-0 top-0 w-full bg-[#374C69] py-4">
      <div className="flex h-full items-center justify-between px-6">
        <h1 className=""></h1>

        <ul className="flex items-center gap-x-4">
          <NavbarLinks />
        </ul>
      </div>
    </nav>
  );
};
