import React from "react";
import { Props } from "./interface";
import Image from "next/image";

const ShoeCard = (props: Props) => {
  
  const handleClick = () => {
    if (props.shoe !== props.img) {
      props.change()
    }
  }
  
  return (
    <div className={`border-2 rounded-xl ${props.shoe === props.img ? 'border-my-blue' : 'border-white'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-32 sm:h-32 w-24 h-24 rounded-xl max-sm:p-4 ">
        <Image className="object-contain" src={props.img} alt="Shoe" width={100} height={100}></Image>
      </div>
    </div>
  )
};

export default ShoeCard;
