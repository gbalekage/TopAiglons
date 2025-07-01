"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: Props) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const isDark = currentTheme === "dark";

  return (
    <Link href={"/"} className="">
      {variant === "default" && (
        <Image
          src={isDark ? "/logo.png" : "/logo-light.png"}
          alt="logo"
          width={120}
          height={31}
        />
      )}

      {variant === "icon" && (
        <Image
          src={isDark ? "/icon.png" : "/icon-light.png"}
          alt="logo icon"
          width={30}
          height={30}
        />
      )}
    </Link>
  );
};

export default Logo;
