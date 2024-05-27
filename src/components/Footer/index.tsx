import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="padding-x bg-black padding-y pb-8 max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start">
                <a href="/">
                    <Image src="/images/footer-logo.svg" alt="nike logo" width={150} height={46}></Image>
                </a>
                <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
                <div className="flex items-center gap-5 mt-8">
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                        <Image src="/icons/facebook.svg" alt="facebook icon" width={24} height={24}></Image>
                    </div>
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                        <Image src="/icons/twitter.svg" alt="twitter icon" width={24} height={24}></Image>
                    </div>
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                        <Image src="/icons/instagram.svg" alt="instagram icon" width={24} height={24}></Image>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                <div>
                    <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Products</h4>
                    <ul>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Air Force</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Air Max</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Air Jordan</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Nike Waffle Racer</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Nike Cortez</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Help</h4>
                    <ul>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">About us</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">FAQs</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">How it works</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Privacy policy</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">Payment policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Get in touch</h4>
                    <ul>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">customer@nike.com</a>
                        </li>
                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                            <a href="">+92554862354</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-3">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
                    <Image className="rounded-full m-0" src="/icons/copyright-sign.svg" alt="copyright icon" width={20} height={20}></Image>
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat">Terms & Conditions</p>
            </div>
    </footer>
  )
};

export default Footer;
