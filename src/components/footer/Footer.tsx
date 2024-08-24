import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@../../../public/assets/elmohands__1.png";
import Logo2 from "@../../../public/assets/elmohands__2.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import NavLogo from "../header/NavLogo";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className=" bg-[#F3F3F1] inset-0 bg-gradient-to-b from-black to-transparent text-light"
    >
      <div className="container px-4">
        {/* Main Content */}
        <div className=" flex w-full justify-center ">
          <div className="flex flex-col md:flex-row  md:justify-between py-12 border-b border-[#3E453E] w-[90%] md:w-[80%]">
            {/* Logo and Description */}
            <div className="mb-4 md:mb-0 flex flex-col gap-4">
              <Link href="/">
                <NavLogo />
              </Link>
              <p className="text-wrap break-words max-w-xl">
                Donec liberorum nibh euis rutrum sit luctus, at aliquet quam
                bibendum. Fusce at dui tincidunt nulla tempor.
              </p>
              <div className="flex text-sm space-x-4">
                <p className="text-[#8D999D]">Follow us on</p>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Main Links */}
            <div className="flex flex-col md:space-x-16 text-sm">
              <div className="flex flex-col gap-6 mb-4 md:mb-0">
                <h4>Main Links</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:space-x-16 text-sm">
              <div className="flex flex-col gap-6 mb-4 md:mb-0">
                <h4>Quick Links</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-2 text-center text-gray-600">
          <p>All Copyrights are reserved by SIÁNCHES &copy;2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
