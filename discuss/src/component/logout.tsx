"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function Logout() {
  const logoutHandler = () => {
    signOut();
  };
  return <Button onClick={logoutHandler}>Click</Button>;
}
