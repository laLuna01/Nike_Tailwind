import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="padding-x py-4 fixed top-0 z-20 w-full bg-[#ffffff] border-b">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <Image src="./images/header-logo.svg" alt="Logo" width={80} height={25}></Image>
            </a>
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
              <li>
                <a href="./" className="font-montserrat leading-normal text-lg text-slate-gray">Home</a>
              </li>
              <li>
                <a href="./" className="font-montserrat leading-normal text-lg text-slate-gray">About Us</a>
              </li>
              <li>
                <a href="./" className="font-montserrat leading-normal text-lg text-slate-gray">Products</a>
              </li>
              <li>
                <a href="./" className="font-montserrat leading-normal text-lg text-slate-gray">Contact Us</a>
              </li>
            </ul>
            <div className="hidden max-lg:block">
              <Image src="./icons/hamburger.svg" alt="Menu" width={30} height={30}></Image>
            </div>
        </nav>
    </header>
  )
};

export default Header;
