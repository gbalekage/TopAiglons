// app/layout.tsx (RootLayout)
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ClientProviders } from "@/utils/ClientProviders";

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
      <body>
        <ClientProviders>
          <main className="relative isolate overflow-hidden">{children}</main>
        </ClientProviders>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
