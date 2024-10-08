"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignoutButton } from "@/components/signout-button";
import { useSession } from "next-auth/react"; // No need to import Session here as a value
import { Loader2Icon } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";
import { Session } from "next-auth"; // Import Session only as a type

export const NavbarLinks = () => {
  const { data: session, status } = useSession(); // Destructure session and status

  switch (status) {
    case "loading":
      return <Loading />;
    case "unauthenticated":
      return <SignedOut />;
    case "authenticated":
      return <SignedIn session={session as Session} />; // Typecast session as Session
    default:
      return null;
  }
};

const Loading = () => {
  return (
    <li>
      <Button size="sm" variant="ghost">
        <Loader2Icon className="min-w-[8ch] animate-spin" />
      </Button>
    </li>
  );
};

const SignedIn = ({ session }: { session: Session }) => {
  // Accept session as prop
  return (
    <>
      <li>
        <Button size="sm" asChild>
          <Link href="/dashboard/profile">Profile</Link>
        </Button>
      </li>
      <UserAvatar session={session} /> {/* Use session here */}
      <li>
        <SignoutButton />
      </li>
    </>
  );
};

const SignedOut = () => {
  return (
    <>
      <li>
        <Button variant="outline" size="sm" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      </li>

      <li>
        <Button variant="outline" size="sm" asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </li>
    </>
  );
};
