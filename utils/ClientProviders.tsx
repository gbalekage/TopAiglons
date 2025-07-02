// components/global/client-providers.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/global/theme-provider";
import { ReactLenis } from "lenis/react";
import { UserProvider } from "@/contexts/user";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root>
        <UserProvider>{children}</UserProvider>
      </ReactLenis>
    </ThemeProvider>
  );
}
