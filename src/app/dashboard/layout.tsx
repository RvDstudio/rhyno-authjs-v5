// dashboard/layout.tsx
import DashboardHeader from "@/components/layouts/dashboard_header";
import Sidebar from "@/components/layouts/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex" suppressHydrationWarning={true}>
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden pt-14">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
}
