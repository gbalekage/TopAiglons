import * as React from "react";

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  href: string;
  icon: React.ReactElement;
  label: string;
  desc: string;
};

export type { MenuItem };
