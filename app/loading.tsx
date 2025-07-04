"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react"; // from lucide-react (used by shadcn)

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSpinner(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!showSpinner) return null;

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="animate-pulse">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    </div>
  );
}
