import React from "react";
import { Props } from "./interface"
import Image from "next/image";

const Button = (props: Props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-6 py-4 border font-montserrat text-lg leading-none bg-my-blue rounded-full text-white border-my-blue">
        {props.label}
        <Image className="ml-2 rounded-full w-5 h-5" src={props.icon} alt="arrow right icon" width={20} height={20} />
    </button>
  )
};

export default Button;
