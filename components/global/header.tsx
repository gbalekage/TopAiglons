"use client";

import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Menu, LogOut, User2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

import Link from "next/link";
import MobileMenu from "./mobileMenu";
import { navMenu } from "@/constants";
import { ModeToggle } from "./theme";
import { useUser } from "@/contexts/user";
import { useRouter } from "next/navigation";
import Image from "next/image";

type User = {
  name: string;
  role: string;
  image?: string;
};

const Header = () => {
  const { user, setUser, setToken } = useUser() as {
    user: User | null;
    setUser: (user: User | null) => void;
    setToken: (token: string | null) => void;
  };
  const router = useRouter();
  const userImage = user?.image || "";
  console.log("User image:", userImage);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    // router.push("/sign-in");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between items-center">
        <Logo />

        {/* Navigation menu */}
        <NavigationMenu className="max-lg:hidden mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent text-xs">
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">
                        {submenu.map(({ href, icon, label, desc }, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={href}
                                className="flex gap-2 flex-row select-none rounded-sm transition-colors hover:bg-muted-foreground/5"
                              >
                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center text-foreground">
                                  {icon}
                                </div>

                                <div className="">
                                  <div className="text-[13px] leading-normal mb-1 font-semibold">
                                    {label}
                                  </div>
                                  <p className="text-[13px] leading-normal text-xs text-muted-foreground">
                                    {desc}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-xs`}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center gap-3 max-lg:hidden">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full w-9 h-9 p-0 overflow-hidden"
                >
                  {user.image ? (
                    <Image
                      width={24}
                      height={24}
                      src={userImage}
                      alt={user.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-sm font-bold">
                      {getInitials(user.name)}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() =>
                    router.push(user.role === "admin" ? "/admin" : "/client")
                  }
                >
                  <User2 className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button size="sm">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </>
          )}

          <ModeToggle />
        </div>

        {/* Mobile menu */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="cursor-pointer lg:hidden"
              size="icon"
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
