"use client";

import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SigninPage() {
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result= await signIn("credentials", {
      redirect: false,
      email:formData.get("email"),
      password: formData.get("password")
    });
    router.push("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="text-lg">Create a Post</h3>

        <Input
          name="email"
          label="email"
          labelPlacement="outside"
          placeholder="email"
        />
        <Input
          name="password"
          label="password"
          labelPlacement="outside"
          placeholder="password"
        />

        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
