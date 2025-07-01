import React from "react";
import Logo from "./logo";
import { footerData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section !pb-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">
          <div>
            <Logo variant="default" />
            <p className="text-muted-foreground max-w-[240px] mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              laborum voluptatem rem, pariatur eveniet nam. Pariatur vitae
              magnam dolores soluta.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3">
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className="mb-4">{title}</p>

                {items.map(({ href, label }, index) => (
                  <li key={index} className="text-muted-foreground">
                    <Link
                      className="inline-block py-1 transition-colors hover:text-foreground"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-12 border-t border-gray-600/10 py-6">
          <Link className="" href={"#"} target="_blank">
            {footerData.copyright}
          </Link>

          <div className="">
            <ul className="flex gap-6 items-center">
              {footerData.socialLinks.map(({ href, icon }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
