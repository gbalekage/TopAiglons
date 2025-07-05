import { MenuItem } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronsUpDown, LogOut, User2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./theme";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Props = {
  navMenu: MenuItem[];
};

type User = {
  name: string;
  role: string;
  image?: string;
};

const MobileMenu = ({ navMenu }: Props) => {
  const { user, setUser, setToken } = useUser() as {
    user: User | null;
    setUser: (user: User | null) => void;
    setToken: (token: string | null) => void;
  };
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    // router.push("/sign-in");
  };

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
                      {label}
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
                          <Link href={href}>{label}</Link>
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
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-9 px-3 text-sm font-semibold"
              >
                {user.name}
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
            <Button className="" variant={"outline"}>
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>

            <Button className="">
              <Link href={"/sign-up"}>Get Started</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default MobileMenu;
