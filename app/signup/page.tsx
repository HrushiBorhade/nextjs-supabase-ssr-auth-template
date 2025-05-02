"use client"
import { signup } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function SignUp() {
  const [state, action , pending] = useActionState(signup, undefined)
  return (
    <form action={action} className="p-3 flex flex-col gap-2 border rounded-lg">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input name="name" placeholder="Enter Name..." id="name" />
        {state?.errors?.name && <p className="text-xs text-destructive">{state.errors.name}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Enter Email..."
          id="email"
        />
         {state?.errors?.email && <p className="text-xs text-destructive">{state.errors.email}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          type="password"
          placeholder="Enter Password..."
          id="password"
        />
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li className="text-xs text-destructive" key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <Button disabled={pending} type="submit">Sign Up</Button>
    </form>
  );
}
