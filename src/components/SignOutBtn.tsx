'use client';

import React from 'react'
import { Button } from './ui/button'
import { signoutUserAction } from "@/actions/signout-user-action";

const SignOutBtn = () => {
    const clickHandler = async () => {
        await signoutUserAction();
        window.location.href = "/dashboard/admin-panel";
      };
  return (
    <div>
      <Button onClick={clickHandler}>Sign Out</Button>
    </div>
  )
}

export default SignOutBtn
