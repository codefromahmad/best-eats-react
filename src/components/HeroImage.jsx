import React from "react";

const HeroImage = () => {
  return (
    <div className="w-full h-[250px] sm:h-[500px]">
      <div className="max-w-[990px] mx-auto h-[250px] sm:h-[500px]  relative">
        <div className="absolute text-gray-200 flex flex-col px-4 w-full bg-black/50 justify-center h-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            <span className="text-orange-500">Food</span> Delivered
          </h1>
        </div>
        <img
          className="h-[250px] sm:h-[500px] w-full"
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroImage;
