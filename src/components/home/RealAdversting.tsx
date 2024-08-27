"use client";
import Image from "next/image";
import React from "react";
import residential from "@../../../public/assets/home/modern-residential.svg";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";

const RealAdversting: React.FC = () => {
  const t = useTranslations("adversting");
  const handleCallClick = () => {
    console.log("Call clicked");
    window.open("tel:+9660575645308");
  };
  const handleWhatsappClick = () => {
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=9660575645308`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open("https://wa.me/9660575645308", "_blank");
    }
  };

  return (
    <div id="hoverEffect" className="relative  max-w-6xl mx-auto my-12 ">
      <div className="flex  flex-col md:flex-row items-center justify-between bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className="">
          <h2 className="text-3xl max-w-md text-wrap font-black ">
            {t("adverstingContent")}
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleCallClick}
              className="flex items-center mt-4 px-2 py-2 gap-2 font-bold bg-[#2D2D2D] text-white rounded hover:bg-blue-600"
            >
              {t("contactNumber")}
              <span className="ml-2">
                <PhoneCall className="animate-ping" size={14} />
              </span>
            </button>
            <button
              onClick={handleWhatsappClick}
              className="flex items-center mt-4 px-2 text-center bg-[#2D2D2D] text-white rounded hover:bg-blue-600"
            >
              <FaWhatsapp size={18} />
            </button>
          </div>
        </div>
        <Image
          className="md:w-[50%] md:absolute hidden md:block   end-0 "
          width={40}
          height={40}
          src={residential}
          alt="Real Estate"
          sizes="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RealAdversting;
