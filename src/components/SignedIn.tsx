import Link from "next/link";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";
import { useSession } from "next-auth/react"; // No need to import Session here as a value
import { SignoutButton } from "./signout-button";

export const SignedIn = ({ session }: { session: Session }) => {
  // Accept session as prop
  return (
    <>
      <li>
        <Button size="sm" asChild>
          <Link href="/profile">Profile</Link>
        </Button>
      </li>
      <UserAvatar session={session} /> {/* Use session here */}
      <li>
        <SignoutButton />
      </li>
    </>
  );
};
