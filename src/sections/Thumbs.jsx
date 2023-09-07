import React from 'react'
import ShoeCard from "../components/ShoeCard";
import {shoes } from "../constants";

const Thumbs = ({bigShoeImg, setBigShoeImg, setNameAndPrice}) => {
  return (
    <div className="flex flex-row w-full max-xl:flex-col items-center max-container mb-20 mt-12">
      <div
        className="w-full h-[162px] mr-6 border-2 border-coral-red text-coral-red font-bold 
        rounded-xl text-4xl flex justify-center items-center max-xl:hidden"
      >
        JUST DO IT!
      </div>
      <div className="flex justify-end flex-row sm:gap-6 gap-6 max-sm:px-8 max-xl:justify-center max-xxl:p-0 max-md:grid grid-cols-2">
        {shoes.map((shoe, index) => (
          <div key={shoe.bigShoe}>
            <ShoeCard
              imgUrl={shoe}
              addName={(name) => setNameAndPrice(name)}
              changeBigShoeImage={(shoe) => {
                setBigShoeImg(shoe);
              }}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
      <div
        className="w-full max-xl:h-[162px] mr-4 border-2 border-coral-red text-coral-red font-bold 
        rounded-xl text-4xl flex justify-center items-center max-xl:w-[725px] max-xl:ml-4 max-xl:mt-4 xl:hidden 
        max-md:p-6 max-md:w-full max-md:text-[30px] max-md:mt-8"
      >
        JUST DO IT!
      </div>
    </div>
  );
}

export default Thumbs
