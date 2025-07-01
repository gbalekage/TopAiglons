import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import MobileMenu from "./mobileMenu";
import { navMenu } from "@/constants";
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
import { Card, CardHeader } from "../ui/card";
import { ModeToggle } from "./theme";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between">
        <Logo variant="default" />

        {/* navigation menu */}
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

        {/* desk action button */}
        <div className="flex items-center gap-2 justify-end max-lg:hidden">
          <Button size={"sm"}>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>

          <ModeToggle />
        </div>

        {/* mobile menu */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="cursor-pointer lg:hidden"
              size={"icon"}
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
