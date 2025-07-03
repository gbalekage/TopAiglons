"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthErrorPage() {
  const params = useSearchParams();
  const router = useRouter();
  const error = params.get("error");

  useEffect(() => {
    if (error?.includes("verify")) {
      router.replace("/verify-email");
    }
  }, [error]);

  return (
    <div className="text-center mt-20">
      <p className="text-red-500 font-semibold">Redirecting...</p>
    </div>
  );
}
