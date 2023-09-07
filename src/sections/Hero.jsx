import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import Thumbs from "./Thumbs";

const Hero = () => {
  
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [nameAndPrice, setNameAndPrice] = useState({name: "Nike Air Max 720 ISPA Metallic Silver", price:"320"});


  return (
    <>
      <section
        id="home"
        className="w-full flex flex-col
      justify-center 
      max-container mb-12"
      >
        <div className="w-full py-16"></div>
        <div
          className="w-full flex xl:flex-row flex-col 
         justify-center"
        >
          <div
            className="xl:w-3/6 flex flex-col 
        justify-start items-start w-full"
          >
            <p className="text-xl font-montserrat text-coral-red max-xsm:mt-4">
              Our weird collection
            </p>

            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] 
            max-sm:leading-[82px] font-bold z-10 max-xsm:text-[60px] max-xsm:mt-4">
              <span className="xl:whitespace-nowrap relative pr-10">
                The alternative
              </span>
              <br />
              <span className="text-coral-red inline-block mt-3">
                Nike
              </span>{" "}
              Shoes
            </h1>

            <p className="font-montserrat text-gray-200 text-lg mt-6 mb-14 sm:max-w-sm">
              Discover these Nike weirdos, quality, comfort, and craziness for a
              new identity.
            </p>

            <a href={"#products"}>
              <Button label="Shop now" iconUrl={arrowRight} />
            </a>

            <div className="flex justify-start items-start flex-wrap w-full 
            mt-20 gap-16 max-xsm:mt-12 max-xsm:gap-10 max-xsm:justify-between">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-palanquin font-bold max-xsm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="leading-7 font-montserrat text-gray-200 max-xsm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* shoes */}

          <div
            className="flex-1 flex flex-col justify-start items-center
                 max-xl:py-20 max-xsm:py-10"
          >
            <img
              src={bigShoeImg}
              alt="shoeImage"
              width={610}
              height={500}
              className="object-contain mb-10 mt-10 max-xl:mt-6 max-xl:mb-8"
            />
            <div className="w-full flex justify-end text-sm text-coral-red mr-12 max-xl:justify-center max-xl:pl-6 ">
              <div>
                Model: {nameAndPrice.name} <br /> Price:{" "}
                <span className="font-bold text-xl">${nameAndPrice.price}</span>
              </div>
            </div>
          </div>
        </div>

        <Thumbs
          bigShoeImg={bigShoeImg}
          setBigShoeImg={setBigShoeImg}
          setNameAndPrice={setNameAndPrice}
          nameAndPrice={nameAndPrice}
        />
      </section>
    </>
  );
};

export default Hero;
