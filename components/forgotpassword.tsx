// app/(auth)/components/forgot-form.tsx
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "./global/logo";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import * as Variants from "@/lib/motion";
import { forgetPassword } from "@/app/(auth)/actions/forgotPassword";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function ForgotForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await forgetPassword({ email });
      toast.success(data.message || "Password reset email sent");
      setEmailSent(true);
      // Optionally redirect: router.push("/verify-email");
    } catch (err: any) {
      setError(err.message || "Failed to send reset email");
      toast.error(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {!emailSent ? (
        <>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" />
            <h1 className="text-xl font-semibold">Forgot Password</h1>
            <p className="text-muted-foreground text-balance">
              Enter your email address to reset your password.
            </p>
          </div>

          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                "Send Code"
              )}
            </Button>

            <a
              href="/sign-in"
              className="text-xs text-center underline-offset-2 hover:underline"
            >
              Sign In
            </a>
          </form>
        </>
      ) : (
        <motion.div
          variants={Variants.fadeInUp}
          initial="start"
          animate="end"
          className="flex flex-col items-center gap-4 text-center"
        >
          <CheckCircle2 className="text-green-500 w-10 h-10" />
          <p className="text-sm text-muted-foreground">
            A password reset link has been sent to <strong>{email}</strong>.
            <br />
            Please check your inbox and follow the instructions.
          </p>
        </motion.div>
      )}
    </div>
  );
}
