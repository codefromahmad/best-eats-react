import React from "react";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

const HeadlineCards = () => {
  const cards = [
    {
      id: 1,
      name: `Sun's Out BOGO's Out`,
      text: "Through 8/26",
      img: card1,
    },
    {
      id: 2,
      name: `New Restaurant`,
      text: "Added Daily",
      img: card2,
    },
    {
      id: 3,
      name: `We Deliver Deserts Too`,
      text: "Tasty Treats",
      img: card3,
    },
  ];
  return (
    <div className="max-w-[990px] py-10 mx-10 sm:mx-20 lg:mx-auto relative grid gap-8 grid-cols-1 md:grid-cols-3">
      {cards.map(({ id, name, text, img }) => (
        <div key={id} className="rounded-xl relative">
          <div className="absolute px-3 py-3 w-full h-full text-white bg-black/50 rounded-xl">
            <p className="text-2xl sm:text-xl md:text-2xl font-bold">{name}</p>
            <p>{text}</p>
            <button className="rounded-xl bg-white absolute bottom-6 text-black py-1 px-2 font-bold">
              Order Now
            </button>
          </div>
          <img
            src={img}
            alt="burger"
            className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
