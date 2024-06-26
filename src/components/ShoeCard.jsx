import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg, addName }) => {
  
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
      addName({name: imgUrl.name, price: imgUrl.price})
    }
  };


  return (
    <div
      className={`rounded-xl shadow-[_0_2px_2px_rgb(0,0,0,.3)]
    ${
      bigShoeImg === imgUrl.bigShoe
        ? "border-2 rounded-xl border-coral-red shadow-xl"
        : "border-transparent "
    }
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center 
        bg-gradient-to-t from-slate-800 via-slate-600 to-slate-500 sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <img
          src={imgUrl.thumbnail}
          alt="thumb"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
