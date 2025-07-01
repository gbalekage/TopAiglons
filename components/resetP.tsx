"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./global/logo";
import { Eye, EyeOff } from "lucide-react";

export function ResetForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" />
            <h1 className="text-xl font-semibold">Reset Your Password</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 relative">
              <Input
                id="old-password"
                type={showPassword ? "text" : "password"}
                placeholder="Old Password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 mt-2 text-muted-foreground cursor-pointer"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="grid gap-2 relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 mt-2 text-muted-foreground cursor-pointer"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="grid gap-2 relative">
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new Password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-muted-foreground cursor-pointer"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
