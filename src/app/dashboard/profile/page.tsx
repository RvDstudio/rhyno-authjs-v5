import { auth } from "@/auth";
import { type User } from "next-auth";
import { UpdateUserInfoForm } from "./_components/update-user-info-form";
import { cn } from "@/lib/utils";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <main className="mt-4">
        {!!session?.user ? <SignedIn user={session.user} /> : ''}
    </main>
  );
}

const SignedIn = ({ user }: { user: User }) => {
  return (
    <div className="bg-[#f7f7f7] pb-10 pl-10 pr-8 pt-10 dark:bg-[#171717]">
      <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-[#2e2e2e] dark:bg-[#252525]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-normal tracking-tight">User Information</h2>
        <UpdateUserInfoForm user={user} />
      </div>

      <table className="mt-4 table-auto divide-y border-b border-purple-800">
        <thead>
          <tr className="divide-x divide-[#e2e8ff1a]">
            <th className="bg-[#050520] border-[#e2e8ff1a] border-b text-[#e2e8ff] px-6 py-3 text-start">id</th>
            <th className="bg-[#050520] px-6 py-3 border-[#e2e8ff1a] border-b text-[#e2e8ff] text-start">name</th>
            <th className="bg-[#050520] px-6 py-3 border-[#e2e8ff1a] border-b text-[#e2e8ff] text-start">email</th>
            <th className="bg-[#050520] px-6 py-3 border-[#e2e8ff1a] border-b text-[#e2e8ff] text-start">role</th>
          </tr>
        </thead>

        <tbody className="text-[#e2e8ff8c]">
          <tr className="divide-x divide-y divide-[#e2e8ff1a]">
            <td className="px-6 py-3">{user.id}</td>
            <td
              className={cn("px-6 py-3", {
                "opacity-50": user.name === null,
              })}
            >
              {user.name ?? "NULL"}
            </td>
            <td className="px-6 py-3">{user.email}</td>
            <td className="px-6 py-3 uppercase">{user.role}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};