import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: Props) => {
  return (
    <Link href={"/"} className="">
      {variant === "default" && (
        <Image src={"/logo.png"} alt="logo" width={120} height={31} />
      )}

      {variant === "icon" && (
        <Image src={"/icon.png"} alt="logo" width={30} height={30} />
      )}
    </Link>
  );
};

export default Logo;
