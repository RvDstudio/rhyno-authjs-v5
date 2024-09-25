export enum USER_ROLES {
  USER = "user",
  ADMIN = "admin",
}

export const VERIFICATION_TOKEN_EXP_MIN = 15 as const;

import { types } from "@/lib/constants/constants";
import {
  BaggageClaim,
  BlocksIcon,
  Caravan,
  ShoppingBag,
  User,
} from "lucide-react";

export const Menus: MenuItem[] = [
  {
    title: "Profiel",
    notification: 0,
    icon: <User className="h-5 w-5" />,
    path: "/dashboard/profile",
  },
  {
    title: "Producten",
    notification: 0,
    icon: <ShoppingBag className="h-5 w-5" />,
    path: "/dashboard/products",
  },
  {
    title: "Producten toevoegen",
    notification: 0,
    icon: <ShoppingBag className="h-5 w-5" />,
    path: "/dashboard/product-upload",
    isAdmin: true, // Only visible to admin
  },
  {
    title: "Orders",
    notification: 0,
    icon: <BaggageClaim className="h-5 w-5" />,
    path: "/subscriptions",
  },
  {
    title: "Camperplekken",
    icon: <Caravan className="h-5 w-5" />,
    gap: false,
    notification: 0,
    path: "/loyalty-cards",
  },
  {
    title: "Agro Diëtetiek",
    notification: 0,
    gap: false,
    icon: <BlocksIcon className="h-5 w-5" />,
    path: "/debts",
  },
];
