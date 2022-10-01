import React, { useState } from "react";
import { HiMenu, HiOutlineSearch, HiShoppingCart } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      title: "Orders",
    },
    {
      id: 2,
      icon: <MdFavorite />,
      title: "Favorite",
    },
    {
      id: 3,
      icon: <FaWallet />,
      title: "Wallet",
    },
    {
      id: 4,
      icon: <MdHelp />,
      title: "Help",
    },
    {
      id: 5,
      icon: <AiFillTag />,
      title: "Promotions",
    },
    {
      id: 6,
      icon: <BsFillSaveFill />,
      title: "Best Ones",
    },
    {
      id: 7,
      icon: <FaUserFriends />,
      title: "Invite Friends",
    },
  ];
  return (
    <>
      <div className="w-full h-20">
        <div className="max-w-screen-lg h-full mx-auto bg-white">
          <div className="flex justify-between w-full h-full items-center">
            <div className="flex items-center mx-1">
              <HiMenu
                size={30}
                className=" w-12 cursor-pointer hover:bg-slate-300 hover:rounded-full"
                onClick={() => setNav(!nav)}
              />
              <p className="text-xl sm:text-2xl md:3xl mx-1">
                Best<span className="font-bold"> Eats</span>
              </p>
              <div className="hidden md:flex items-center bg-slate-300 py-1 px-2 rounded-full">
                <p className="rounded-full bg-black py-1 px-2 cursor-pointer duration-200 mr-1 text-white">
                  Delivery
                </p>
                <p className="cursor-pointer duration-200 p-1 rounded-full hover:bg-slate-200">
                  Pickup
                </p>
              </div>
            </div>
            <div className="flex items-center sm:w-[370px] w-[120px] bg-slate-300 rounded-full">
              <HiOutlineSearch size={20} className="px-1 w-8" />
              <input
                type="text"
                className="text-xs sm:text-lg bg-transparent p-2 focus:outline-none"
                placeholder="Search foods..."
              />
            </div>
            <div className="flex items-center rounded-full bg-black hover:bg-gray-700 p-2 cursor-pointer duration-200 mx-1">
              <HiShoppingCart className="text-white" />
              <p className="text-white px-2 hidden sm:block">Cart</p>
            </div>
          </div>
        </div>
      </div>
      {nav && (
        <div>
          <div className="w-full bg-black/80 fixed top-0 left-0 z-10 h-screen"></div>
          <div className="h-screen absolute left-0 py-5 top-0 w-[300px] bg-white z-10">
            <div className="flex justify-between items-center px-4 ">
              <p className="text-2xl">
                Best <span className="font-bold">Eats</span>
              </p>
              <GrClose
                size={22}
                className="cursor-pointer w-12 hover:bg-slate-300 hover:rounded-full"
                onClick={() => setNav(!nav)}
              />
            </div>
            <ul>
              {links.map(({ id, icon, title }) => (
                <li key={id}>
                  <a
                    href=""
                    className="flex items-center p-2 mx-2 hover:bg-slate-200 hover:rounded-md"
                  >
                    {icon}
                    <p className="pl-2">{title}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
