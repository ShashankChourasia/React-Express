'use client'

import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from '@/actions';

export default function RegisterPage() {
    const [formState, action] = useFormState(actions.createUser, {
        errors: {},
      });
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="text-lg">Create a Post</h3>

        <Input
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors.email?.join(", ")}
          name="email"
          label="email"
          labelPlacement="outside"
          placeholder="email"
        />
        <Input
          isInvalid={!!formState.errors.password}
          errorMessage={formState.errors.password?.join(", ")}
          name="password"
          label="password"
          labelPlacement="outside"
          placeholder="password"
        />

        {formState.errors._form ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">
            {formState.errors._form.join(", ")}
          </div>
        ) : null}

        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
