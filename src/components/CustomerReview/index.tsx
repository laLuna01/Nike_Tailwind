import React from "react";
import Image from "next/image";
import { Props } from "./interface";

const CustomerReview = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col rounded-[20px] shadow-2xl border border-slate-300 p-5">
      <Image className="rounded-full object-cover" src={props.img} alt="customer image" width={120} height={120}></Image>
      <p className="mt-6 max-w-sm text-center text-slate-800 font-montserrat text-lg leading-7">{props.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <Image className="object-contain m-0" src="/icons/star.svg" alt="star icon" width={24} height={24}></Image>
        <p className="text-xl font-montserrat text-slate-800">{props.rating}</p>
      </div>
      <p className="mt-2 font-palanquin text-2xl text-center font-bold">{props.name}</p>
    </div>
  )
};

export default CustomerReview;
