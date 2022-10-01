import React from "react";

const Food = () => {
  const allFilters = [
    {
      id: 1,
      properties: "Filter Type",
      filters: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "Burgers",
        },
        {
          id: 3,
          name: "Pizza",
        },
        {
          id: 4,
          name: "Salad",
        },
        {
          id: 5,
          name: "Chicken",
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
        },
        {
          id: 2,
          name: "$$",
        },
        {
          id: 3,
          name: "$$$",
        },
      ],
    },
  ];
  return (
    <div className="max-w-[990px] px-10 sm:px-20 md:mx-auto">
      <div className="flex md:justify-between flex-col md:flex-row">
        {allFilters.map(({ id, properties, filters }) => (
          <div key={id} className="md:w-1-2">
            <p className="font-bold text-left">{properties}</p>
            <ul className="flex justify-evenly py-2">
              {filters.map(({ id, name }) => (
                <li
                  key={id}
                  className="px-2 sm:px-4 mr-[2px] py-[1px] sm:py-1 cursor-pointer border-orange-500 border-[1px] rounded-full text-orange-500"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
