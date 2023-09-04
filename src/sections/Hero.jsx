import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [nameAndPrice, setNameAndPrice] = useState({name: "Nike Air Max 720 ISPA Metallic Silver", price:"320"});


  const addName= (name) => {
    setName(name)
  }

  return (
    <section
      id="home"
      className="w-full flex flex-col 
      justify-center min-h-screen gap-0
      max-container"
    >
      <div
        className="w-full flex xl:flex-row flex-col 
      justify-center"
      >
        <div
          className="relative xl:w-3/6 flex flex-col 
        justify-center items-start w-full  
        max-xl:padding-x pt-28 xl:pt-8"
        >
          <p className="text-xl font-montserrat text-coral-red">
            Our weird collection
          </p>

          <h1 className="mt-10 z-999 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-10">
            <span className="xl:whitespace-nowrap relative pr-10">
              The alternative
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>

          <p className="font-montserrat text-gray-200 text-lg mt-6 mb-14 sm:max-w-sm">
            Discover these Nike arrivals, quality, comfort, and craziness for a
            new identity.
          </p>

          <Button label="Shop now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* shoes */}

        <div
          className="relative flex-1 flex flex-col justify-center items-center
      xl:min-h-screen max-xl:py-20"
        >
          <img
            src={bigShoeImg}
            alt="shoeImage"
            width={610}
            height={500}
            className="object-contain relative mb-8 mt-8"
          />
          <div className="w-full flex justify-end text-sm text-coral-red mr-8 max-xl:justify-center max-xl: pl-6">
            <div>
              Model: {nameAndPrice.name} <br /> Price: <span className="font-bold text-xl">${nameAndPrice.price},-</span>
            </div>
            
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-[162px] max-xl:h-[324px] max-xl:flex-col items-center mt-4">
        <div
          className="w-full h-[162px] mr-6 border-2 border-coral-red text-coral-red font-bold 
        rounded-xl text-4xl flex justify-center items-center max-xl:hidden"
        >
          JUST DO IT!
        </div>
        <div className="flex justify-end flex-row sm:gap-6 gap-6 max-sm:px-8 max-xl:justify-center max-xxl:p-0">
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
          className="w-full max-xl:h-[162px] mr-6 border-2 border-coral-red text-coral-red font-bold 
        rounded-xl text-4xl flex justify-center items-center max-xl:w-[725px] max-xl:ml-4 max-xl:mt-4xl max-xl:mt-4 xl:hidden"
        >
          JUST DO IT!
        </div>
      </div>
    </section>
  );
};

export default Hero;
