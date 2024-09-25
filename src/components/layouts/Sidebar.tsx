"use client";
import {
  Component,
  AudioWaveform,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menus } from "@/constants/constants";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [open, setOpen] = useState<boolean>(true);

  const filteredMenus = Menus.filter(
    (menu) => !menu.isAdmin || session?.user?.isAdmin === 1,
  );

  return (
    <div
      className={`transition-all duration-300 ${
        open ? "hidden md:block md:w-64 lg:w-72" : "w-18 hidden md:block"
      } sticky left-0 top-0 z-30 hidden h-screen flex-none border-r bg-card p-4 pt-[10px] md:block`}
    >
      <div className="flex items-center gap-x-2 border-b pb-[10px]">
        <Component
          strokeWidth={1.5}
          className={`h-8 w-8 cursor-pointer pl-1 text-purple-500 duration-500`}
        />
        <h1
          className={`origin-left text-3xl font-medium text-black duration-200 dark:text-white ${
            !open && "hidden scale-0"
          }`}
        >
          Pc<span className="text-purple-500"> Builder</span>
        </h1>
      </div>

      <ul className="space-y-3 pt-6">
        {filteredMenus.map((menu, index) => (
          <div key={index}>
            {menu.gap && (
              <div className="my-4 border-t border-dashed border-[#dddddd]" />
            )}
            <li className="group">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className={`flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-400 hover:bg-gray-100 active:bg-black group-hover:text-purple-500 dark:hover:bg-gray-700 ${
                        isActive(menu.path)
                          ? "bg-black text-white dark:bg-[#292929]"
                          : "text-gray-600 dark:text-[#888888]"
                      }`}
                      href={menu.path}
                    >
                      {menu.icon && (
                        <span
                          className={`mr-0.5 group-hover:text-[#white] dark:text-[#888888] ${
                            isActive(menu.path) ? "text-white" : ""
                          }`}
                        >
                          {menu.icon}
                        </span>
                      )}
                      <span
                        className={`${
                          !open && "hidden"
                        } flex w-full origin-left items-center duration-200`}
                      >
                        <div className="relative flex w-full items-center">
                          <div className="">{menu.title}</div>
                          <div className="absolute right-2 top-1">
                            {!!menu.notification && (
                              <div className="flex h-4 w-7 items-center justify-center rounded-[4px] bg-[#f6ca09] text-xs text-white">
                                {menu.notification}
                              </div>
                            )}
                          </div>
                        </div>
                      </span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent asChild side="right">
                    {menu.title}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </div>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
        <Link
          href="/my-account"
          className={`w-full justify-start ${
            open ? "" : "p-2"
          } flex items-center`}
        >
          <User className="h-5 w-5" />
          {open && <span className="ml-2">My Account</span>}
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-black dark:bg-[#292929]">
        <div
          className={`${
            !open && "justify-center"
          } flex items-center gap-x-4 border-b border-t border-dashed border-[#393939] p-4 dark:border-[#2e2e2e]`}
        >
          <AudioWaveform className="h-8 w-8 text-purple-500" />
          <div className={`${!open && "hidden"} text-sm`}>
            <h2 className="font-bold text-muted-foreground">
              Reinier Varkevisser
            </h2>
            <p className="text-[12px] font-bold text-purple-500">
              developer / Admin
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-5 top-1/2 z-10 hidden rounded-full bg-gray-100 p-1 hover:bg-gray-100 dark:bg-[#292929] dark:hover:bg-gray-700 sm:flex"
      >
        {open ? (
          <ChevronLeft className="relative h-7 w-7" />
        ) : (
          <ChevronRight className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
