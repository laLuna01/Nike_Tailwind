import React from "react";
import Image from "next/image";
import { Props } from "./interface";

const ServiceCard = (props: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] min-w-[330px] w-full rounded-[20px] shadow-2xl px-10 py-16 border border-slate-300">
      <div className="flex">
        <div className="flex w-11 h-11 justify-center items-center bg-my-blue rounded-full mr-3">
          <Image src={props.icon} alt="service icon" width={24} height={24}></Image>
        </div>
        <h3 className="font-palanquin text-3xl leading-normal font-bold">{props.service}</h3>
      </div>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-800">{props.text}</p>
    </div>
  )
};

export default ServiceCard;
