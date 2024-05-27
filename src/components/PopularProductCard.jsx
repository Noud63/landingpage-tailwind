import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price, rating, type}) => {
  return (
    <div
      className="relative flex flex-1 flex-col w-full max-md:w-[320px] 
    border-b border-slate-950 mb-6 shadow-[_0_2px_4px_rgb(0,0,0,.3)] rounded-t-[20px]"
    >
      <div className="absolute top-2 right-6 text-md">{type}</div>
      <img
        src={imgURL}
        alt={name}
        className="w-full h-auto max-md:w-[320px] rounded-t-[20px]"
      />
      <div className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600">
        <div className="flex justify-start gap-2.5 px-4">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-gray-200">
            ({rating})
          </p>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin px-4">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal px-4 pb-4">
          {price}
        </p>
      </div>

      <div className="w-full bg-slate-900 px-4 py-3 flex justify-center text-slate-400">
        Buy
      </div>
    </div>
  );
}

export default PopularProductCard
