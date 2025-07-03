import React from "react";
import { AuthProvider } from "../providers";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {" "}
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
};

export default AuthLayout;
