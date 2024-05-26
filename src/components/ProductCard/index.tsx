import React from "react";
import Image from "next/image";
import { Props } from "./interface";

const ProductCard = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col sm:w-[220px] m-auto w-[300px]">
        <Image className="sm:w-[220px] sm:h-[220px] w-[300px] h-[300px]" src={props.img} alt="shoe" width={250} height={250}></Image>
        <div className="mt-6 flex justify-start gap-2.5">
            <Image src="/icons/star.svg" alt="rating icon" width={22} height={22}></Image>
            <p className="font-montserrat text-xl leading-normal text-slate-800">{props.rating}</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{props.name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-my-blue text-2lx leading-normal">${props.price}</p>
    </div>
  )
};

export default ProductCard;
