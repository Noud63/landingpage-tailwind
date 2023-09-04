import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col pb-8 w-full max-sm:w-full max-lg:items-center">
      <img src={imgURL} alt={name} className="w-full h-auto max-md:w-[320px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-gray-200">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard
