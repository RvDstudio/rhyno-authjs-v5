import {
  CircuitBoard,
  Cpu,
  Database,
  Disc,
  Fan,
  Gamepad2,
  HardDrive,
  LayoutDashboard,
  MemoryStick,
  Monitor,
  Power,
  ShieldCheck,
  Shirt,
  User,
} from "lucide-react";

interface MenuItem {
  title: string;
  notification?: number;
  icon: JSX.Element;
  gap?: boolean;
  path: string;
  isAdmin?: boolean; // Added isAdmin property
}

export const Menus: MenuItem[] = [
  {
    title: "Dashboard",
    notification: 0,
    icon: <LayoutDashboard className="h-5 w-5" />,
    path: "/dashboard",
  },
  {
    title: "Profiel",
    notification: 0,
    icon: <User className="h-5 w-5" />,
    path: "/dashboard/profile",
  },
  {
    title: "Admin only Access",
    notification: 0,
    icon: <ShieldCheck className="h-5 w-5" />,
    path: "/dashboard/admin",
    isAdmin: true, // Only visible to admin
  },

  {
    title: "Base system",
    icon: <HardDrive className="h-5 w-5" />,
    gap: true,
    notification: 0,
    path: "/dashboard/base-system",
  },
  {
    title: "Case",
    notification: 0,
    gap: false,
    icon: <HardDrive className="h-5 w-5" />,
    path: "/dashboard/case",
  },
  {
    title: "Processor",
    notification: 0,
    gap: false,
    icon: <Cpu className="h-5 w-5" />,
    path: "/dashboard/processor",
  },
  {
    title: "CPU Cooler",
    notification: 0,
    gap: false,
    icon: <Fan className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "Motherboard",
    notification: 0,
    gap: false,
    icon: <CircuitBoard className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "RAM",
    notification: 0,
    gap: false,
    icon: <MemoryStick className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "GPU",
    notification: 0,
    gap: false,
    icon: <Gamepad2 className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "Storage",
    notification: 0,
    gap: false,
    icon: <Database className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "PSU",
    notification: 0,
    gap: false,
    icon: <Power className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "Sleeves",
    notification: 0,
    gap: false,
    icon: <Shirt className="h-5 w-5" />,
    path: "#",
  },
  {
    title: "OS",
    notification: 0,
    gap: false,
    icon: <Monitor className="h-5 w-5" />,
    path: "#",
  },
];
