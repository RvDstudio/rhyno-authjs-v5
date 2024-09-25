"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Heart, SearchIcon, ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import { MobileSidebar } from "@/components/layouts/MobileSidebar";
import UserAvatar from "@/components/UserAvatar";
import { ThemeToggle } from "@/components/ThemeToggle/theme-toggle";
import { Loading } from "./Loading";

export default function Header() {
  const { data: session, status } = useSession();

  switch (status) {
    case "loading":
      return <Loading />;
  }

  return (
    <header className="fixed left-0 top-0 z-20 flex w-full items-center border-b bg-white px-4 py-2 dark:bg-[#171717] md:px-6">
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <form className="max-w-[150px] flex-1">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8"
            />
          </div>
        </form>

        <ThemeToggle />

        <UserAvatar session={session} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Heart className="h-6 w-6 cursor-pointer text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cart</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ShoppingBag className="h-6 w-6 cursor-pointer text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cart</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
