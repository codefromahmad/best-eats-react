import React, { useCallback, useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const filterType = useCallback((cat) => {
    const price = ["$", "$$", "$$$", "$$$$"];

    if (!cat) {
      setFoods(data);
    } else if (price.includes(cat)) {
      setFoods(data.filter((item) => item.price === cat));
    } else {
      setFoods(data.filter((item) => item.category === cat));
    }
  }, []);
  const allFilters = [
    {
      id: 1,
      properties: "Filter Type",
      filters: [
        {
          id: 1,
          name: "All",
          cat: "",
        },
        {
          id: 2,
          name: "Burgers",
          cat: "burger",
        },
        {
          id: 3,
          name: "Pizza",
          cat: "pizza",
        },
        {
          id: 4,
          name: "Salad",
          cat: "salad",
        },
        {
          id: 5,
          name: "Chicken",
          cat: "chicken",
        },
      ],
    },
    {
      id: 2,
      properties: "Filter Price",
      filters: [
        {
          id: 1,
          name: "$",
          cat: "$",
        },
        {
          id: 2,
          name: "$$",
          cat: "$$",
        },
        {
          id: 3,
          name: "$$$",
          cat: "$$$",
        },
        {
          id: 4,
          name: "$$$$",
          cat: "$$$$",
        },
      ],
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="max-w-[990px] mx-4 lg:mx-auto sm:mx-6">
        <h1 className="text-orange-500 font-bold text-3xl text-center py-3">
          Top Rated Menu Items
        </h1>
        <div className="flex md:justify-between flex-col md:flex-row">
          {allFilters.map(({ id, properties, filters }) => (
            <div key={id} className="md:w-1-2">
              <p className="font-bold text-left">{properties}</p>
              <ul className="flex justify-evenly py-2">
                {filters.map(({ id, name, cat }) => (
                  <li
                    onClick={() => filterType(cat)}
                    key={id}
                    className="px-2 sm:px-4 mr-[2px] py-[1px] sm:py-1 cursor-pointer border-orange-500 hover:bg-orange-500 hover:text-white  duration-200 border-[1px] rounded-full text-orange-500"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid gap-2 sm:gap-4 py-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
          {foods.map(({ id, dname, category, image, price }) => (
            <div
              key={id}
              className="bg-white rounded-md hover:scale-105 duration-300 drop-shadow-2xl cursor-pointer"
            >
              <img
                src={image}
                alt="Bargar"
                className="rounded-t-md max-h-28 sm:max-h-42 md:max-h-52 w-full object-cover"
              />
              <div className="flex justify-between items-center p-2">
                <p className="font-bold text-xs sm:text-sm">{dname}</p>
                <p className="text-white text-xs sm:text-sm bg-orange-500 rounded-full py-[1px] px-1">
                  {price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
