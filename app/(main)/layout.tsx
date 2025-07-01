import React from "react";

import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>;
      <Footer />
    </>
  );
};

export default MainLayout;
