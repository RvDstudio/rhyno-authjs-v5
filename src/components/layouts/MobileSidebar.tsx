import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Component, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menus } from "@/constants/constants";

interface MenuItem {
  title: string;
  notification?: number;
  icon: JSX.Element;
  gap?: boolean;
  path: string;
}

export function MobileSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <Menu className="h-6 w-6 pr-1" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[350px] border-r border-[#374c69] bg-white"
      >
        <div className="flex items-center gap-x-2 border-b border-dashed border-[#6d9ecf] pb-[11px]">
          <Component
            strokeWidth={1.5}
            className={`h-8 w-8 cursor-pointer pl-1 text-gray-700 duration-500`}
          />
          <h1
            className={`origin-left text-3xl font-medium text-black duration-200 dark:text-white ${
              !open && "scale-0"
            }`}
          >
            Pc<span className="text-purple-500"> Builder</span>
          </h1>
        </div>
        <ul className="space-y-3 pt-6">
          {Menus.map((menu, index) => (
            <div key={index}>
              {menu.gap && (
                <div className="my-4 border-t border-dashed border-[#6d9ecf] dark:border-gray-600" />
              )}
              <li className="group">
                <Link
                  className={`flex w-full items-center space-x-2 rounded-lg px-2 py-3 text-gray-400 hover:bg-gray-700 active:bg-gray-300 group-hover:text-white dark:hover:bg-gray-700 ${
                    isActive(menu.path)
                      ? "bg-gray-700 text-white dark:bg-[#292929]"
                      : ""
                  }`}
                  href={menu.path}
                >
                  {menu.icon && (
                    <span
                      className={`mr-0.5 text-gray-600 group-hover:text-yellow-500 dark:text-[#888888] ${
                        isActive(menu.path) ? "text-yellow-500" : ""
                      }`}
                    >
                      {menu.icon}
                    </span>
                  )}
                  <span
                    className={`${
                      !open && ""
                    } flex w-full origin-left items-center duration-200`}
                  >
                    <div className="relative flex w-full items-center">
                      <div className="">{menu.title}</div>
                      <div className="absolute right-2 top-1">
                        {!!menu.notification && (
                          <div className="flex h-4 w-7 items-center justify-center rounded-[4px] text-xs text-white">
                            <div
                              className={`${
                                isActive(menu.path)
                                  ? "flex h-4 w-7 items-center justify-center rounded-[4px] bg-white text-xs text-[#374c69]"
                                  : "flex h-4 w-7 items-center justify-center rounded-[4px] bg-[#ffffff] text-xs text-white"
                              }`}
                            >
                              {menu.notification}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </span>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
