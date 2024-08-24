import Link from "next/link";

import MobileMenu from "./MobileMenu";
import ProfileDropDown from "./ProfileDropDown";
import GlobalLanguage from "./GolablLanguage";
import NavLogo from "./NavLogo";
import { NavLink } from "./NavLink";

export default async function Navbar() {
  return (
    <div className="top-0  left w-full relative">
      <nav className=" h-20 py-4 text-lg lg:container absolute top-0 left-0 right-0 z-10">
        <div className="flex justify-around items-center transition">
          <Link href="/">
            <NavLogo />
          </Link>
          <NavLink />
          <div>
            {/* Mobile Menu */}
            {/* <MobileMenu /> */}
            {/* Mobile Menu */}
          </div>
          <GlobalLanguage />
        </div>
      </nav>
    </div>
  );
}
