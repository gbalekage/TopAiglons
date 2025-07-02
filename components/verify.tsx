"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { signUpImage } from "@/assets";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { verifyEmail } from "@/app/(auth)/actions/verifyEmail";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function VerifyCode({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [form, setForm] = useState({ code: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (loading || form.code.length !== 6) return;

    setLoading(true);
    try {
      const data = await verifyEmail(form);
      toast.success(data.message);
      router.push("/sign-in");
    } catch (err: any) {
      toast.error(err.message || "Failed to verify email");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (form.code.length === 6) {
      handleSubmit();
    }
  }, [form.code]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-semibold mb-2">Verify your email</h1>
              <p className="text-muted-foreground text-balance">
                Enter the verification code sent to your email address to
                continue.
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <InputOTP
                maxLength={6}
                value={form.code}
                onChange={(val) => setForm({ code: val })}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button
              type="submit"
              className="w-full mt-6"
              disabled={loading || form.code.length !== 6}
            >
              {loading ? "Verifying..." : "Verify"}
            </Button>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src={signUpImage}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
