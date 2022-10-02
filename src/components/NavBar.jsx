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
      <div className="w-full h-16 sm:h-20">
        <div className="max-w-screen-lg h-full mx-auto bg-white">
          <div className="flex justify-between w-full h-full items-center">
            <div className="flex items-center mx-1">
              <span className="cursor-pointer hover:bg-slate-300 hover:rounded-full md:p-2">
                <HiMenu size={30} onClick={() => setNav(!nav)} />
              </span>
              <p className="text-lg sl:text-xl sm:text-2xl md:text-3xl sm:mx-1 ">
                Best<span className="font-bold"> Eats</span>
              </p>
              <div className="hidden md:flex items-center bg-slate-300 p-1 rounded-full">
                <p className="rounded-full bg-black p-1 cursor-pointer duration-200 mr-1 text-white">
                  Delivery
                </p>
                <p className="cursor-pointer duration-200 p-1 rounded-full hover:bg-slate-200">
                  Pickup
                </p>
              </div>
            </div>
            <div className="flex items-center sm:w-[250px] sd:w-[200px] sl:w-[240px] w-[160px] bg-slate-300 rounded-full">
              <HiOutlineSearch size={20} className="w-8" />
              <input
                type="text"
                className="text-xs sm:text-lg bg-transparent px-2 py-1.5 focus:outline-none"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center rounded-full bg-black hover:bg-gray-700 px-1 sm:px-2 py-1 md:py-1.5 cursor-pointer duration-200 mx-1 mr-4">
              <HiShoppingCart className="text-white" />
              <p className="text-white px-2 hidden sm:block">Cart</p>
            </div>
          </div>
        </div>
      </div>
      <>
        <div
          className={`w-full ${
            nav ? "block" : "hidden"
          } bg-black/80 fixed top-0 z-10 left-0  h-screen`}
        ></div>
        <div
          className={`h-screen absolute ${
            nav ? "left-0" : "-left-[100%]"
          } ease-in-out duration-500 py-5 z-10 top-0 w-[300px] bg-white`}
        >
          <div className="flex justify-between items-center p-4 ">
            <p className="text-2xl">
              Best <span className="font-bold">Eats</span>
            </p>
            <div className="cursor-pointer z-200 left-64 top-0 mt-8 absolute hover:bg-slate-300 hover:rounded-full p-2">
              <GrClose size={20} onClick={() => setNav(!nav)} />
            </div>
            <span></span>
          </div>
          <ul>
            {links.map(({ id, icon, title }) => (
              <li key={id}>
                <a
                  href="https://google.com"
                  className="flex items-center p-2 mx-2 hover:bg-slate-200 duration-200 hover:rounded-md"
                >
                  {icon}
                  <p className="pl-2">{title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    </>
  );
};

export default NavBar;
