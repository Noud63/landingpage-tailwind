import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-gray-200">
          Experience top-notch quality and style with our sought after
          selections. Discover a world of comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid w-full xxl:grid-cols-4 xxl:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
