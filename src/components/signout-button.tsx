"use client";

import { signoutUserAction } from "@/actions/signout-user-action";
import { Button } from "@/components/ui/button";

export const SignoutButton = () => {
  const clickHandler = async () => {
    await signoutUserAction();
    window.location.href = "/";
  };

  return (
    <Button  size="sm" onClick={clickHandler} className="mt-6 bg-[#00cbfe]">
      Sign Out
    </Button>
  );
};
