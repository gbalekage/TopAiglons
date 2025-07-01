import { MenuItem } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./theme";

type Props = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: Props) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="w-full justify-between cursor-pointer"
                  >
                    <p>
                      {" "}
                      {label}{" "}
                      <ChevronsUpDown className="size-3 text-muted-foreground" />
                    </p>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ps-2">
                  <ul className="border-l border-l-muted-foreground/10">
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button
                          asChild
                          variant={"ghost"}
                          className="w-full justify-start text-muted-foreground hover:bg-transparent text-xs"
                        >
                          <Link href={href} className="">
                            {label}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant={"ghost"}
                className="w-full justify-start"
              >
                <Link href={href}>{label}</Link>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className="bg-muted-foreground/20" />

      <div className="flex items-center justify-center gap-2 mt-4">
        <Button className="" variant={"outline"}>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>

        <Button className="">
          <Link href={"/sign-up"}>Get Started</Link>
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};

export default MobileMenu;
