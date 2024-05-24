import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
        <nav>
            <a href="/">
                <Image src="./images/header-logo.svg" alt="Logo" width={100} height={30}></Image>
            </a>
        </nav>
    </header>
  )
};

export default Header;
