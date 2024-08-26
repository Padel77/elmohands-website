"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLinkItem, NavLinkProps } from "@/lib/types";
import { useTranslations } from "next-intl";

export const NavLink: React.FC = () => {
  const t = useTranslations("header");
  const { pathname } = UseSearchParamsHook();

  const language = pathname.split("/")[1];

  const links = [
    {
      id: 1,
      name: t("home"),
      href: "/",
      activeLink: "",
    },
    {
      id: 2,
      name: t("finalwork"),
      href: `#about`,
      activeLink: "about",
    },
    {
      id: 3,
      name: t("whatbuy"),
      href: "#hoverEffect",
      activeLink: "hoverEffect"
    },

    {
      id: 4,
      name: t("commonQuestion"),
      href: "#services",
      activeLink: "services",
    },
    {
      id: 5,
      name: t("contact"),
      href: "#contact",
      activeLink: "contact",
    },
  ];
  function FilterPath() {
    return pathname.split("/")[1];
  }

  function isActive(active?: string): boolean {
    return active === FilterPath();
  }

  const renderLinks = (links: NavLinkItem[]) => {
    return links.map((link) => (
      <div key={link.id} className="relative group">
        <div className="flex items-center hover:text-xl hover:ease-linear transition duration-800 delay-150 hover:delay-300">
          <Link
            href={link.href}
            className={`text-white rounded-md flex items-center relative transition duration-400 ease-linear hover:font-black hover:text-blue-200 `}
          >
            <p className="font-[400] flex items-center gap-8 ">
              {link.name}
              {link.children && <ChevronDown strokeWidth={1} size={16} />}
            </p>
            {isActive(link.activeLink) && (
              <ChevronUp
                strokeWidth={1}
                size={16}
                className="absolute right-1/3 top-1/2  text-white  mt-1"
              />
            )}
          </Link>
        </div>

        {link.children && link.children.length > 0 && (
          <div className="absolute left-0 top-full hidden group-hover:block bg-white text-[#2D2D2D]  rounded-md p-4 transition duration-300">
            <div className="link-children flex flex-col text-sm text-[#000] gap-3 text-primary ">
              {renderLinks(link.children)}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav className="hidden lg:flex space-x-4  gap-4">{renderLinks(links)}</nav>
  );
};
