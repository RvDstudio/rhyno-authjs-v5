import { auth } from "@/auth";
import { USER_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { findAllUsers } from "@/resources/user-queries";
import { redirect } from "next/navigation";
import { ToggleEmailVerifiedInput } from "./_components/toggle-email-verified-input";
import { ChangeUserRoleInput } from "./_components/change-user-role-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
  const session = await auth();

  if (session?.user?.role !== USER_ROLES.ADMIN) redirect("/dashboard/profile");

  const users = await findAllUsers();

  return (
    <div className="mt-4 bg-[#f7f7f7] pb-10 pl-10 pr-8 pt-2 dark:bg-[#171717]">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/profile">Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Admin Panel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-[#2e2e2e] dark:bg-[#252525]">
        <h2 className="text-xl text-[#888888] tracking-tight">All Users</h2>

        <div className="mt-0 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <Card key={user.id} className="overflow-hidden">
            <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
              </div>
              <div className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-sm font-medium mb-1">{user.name}</CardTitle>
              <p className="text-xs text-muted-foreground mb-2">{user.email}</p>
              <p className="text-xs text-muted-foreground uppercase">{user.role}</p>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
