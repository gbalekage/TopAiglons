"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "./global/logo";

export function ForgotForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" />
            <h1 className="text-xl font-semibold">Forgot Password</h1>
            <p className="text-muted-foreground text-balance">
              Enter your email address to reset your password.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <Button type="submit" className="w-full">
              Send Code
            </Button>
          </div>
          <a
            href="/sign-in"
            className="text-xs text-center underline-offset-2 hover:underline"
          >
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}
