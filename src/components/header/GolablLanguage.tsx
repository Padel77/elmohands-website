"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const GlobalLanguage: React.FC = () => {
  const { pathname, router } = UseSearchParamsHook();
  const route = pathname.split("/")[2];

  const t = useTranslations("header");
  const changeLanguage = () => {
    {
      /* Change this to the desired path */
    }
    router.push(pathname === `/ar/${route}` ? `/en/${route}` : `/ar/${route}`);
  };

  return (
    <div>
      <button onClick={changeLanguage} className="flex text-white">
        {pathname === "/ar" ? (
          <span className="flex items-center">
            {" "}
            <Globe size={20} strokeWidth={1} />
            En
          </span>
        ) : (
          <span className="flex items-center">
            {" "}
            Ar
            <Globe size={20} strokeWidth={1} />
          </span>
        )}
      </button>
    </div>
  );
};

export default GlobalLanguage;
