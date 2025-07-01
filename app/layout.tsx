import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "TopAiglons - RDC",
  description: "Your one-stop tech platform for hosting, domains, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={``}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <main className="relative isolate overflow-hidden">{children}</main>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
