import React from "react";
import { categories } from "../data/data.js";

const Categories = () => {
  return (
    <div className="w-full">
      <div className="max-w-[990px] py-10 mx-10 sm:mx-20 lg:mx-auto">
        <h1 className="text-orange-500 font-bold text-3xl text-center py-3">
          Top Rated Menu Items
        </h1>
        <div className="grid gap-2 sm:gap-4 py-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {categories.map(({ id, name, image }) => (
            <div
              key={id}
              className="flex p-4 flex-col hover:scale-105 duration-300 lg:flex-row justify-between relative items-center rounded-lg bg-slate-200"
            >
              <span className="bg-slate-100 rounded-full">
                <img
                  src={image}
                  className="object-cover w-20 h-20"
                  alt="category"
                />
              </span>
              <p className="text-xl text-center sm:tex-left">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
