import { auth } from "../auth"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, Settings, User, Shield } from "lucide-react";

import Link from "next/link";
import SignOutBtn from "./SignOutBtn";


export default async function UserAvatar() {
  const session = await auth()
  const isAdmin = session?.user?.role === "admin"; // Assuming you have role in the session object
  
 
  if (!session?.user) return null

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage
              src={session?.user?.image ?? ""}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/dashboard/profile" className="flex">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>

            {isAdmin && (
               <DropdownMenuItem className="cursor-pointer">
               <Link href="/dashboard/admin-panel" className="flex">
                 <Shield className="mr-2 h-4 w-4" />
                 <span>Admin</span>
               </Link>
               <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
             </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <SignOutBtn />
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
