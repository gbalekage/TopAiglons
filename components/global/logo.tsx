"use client";

import { icon, logo, iconDark, logoDark } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Props = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: Props) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    return currentTheme === "dark";
  };

  const getImage = () => {
    if (!mounted) {
      return variant === "icon" ? iconDark : logoDark;
    }

    return variant === "icon"
      ? isDarkTheme()
        ? icon
        : iconDark
      : isDarkTheme()
      ? logo
      : logoDark;
  };

  const imageProps =
    variant === "icon" ? { width: 30, height: 30 } : { width: 120, height: 31 };

  return (
    <Link href="/" className="">
      <Image src={getImage()} alt="logo" {...imageProps} />
    </Link>
  );
};

export default Logo;
