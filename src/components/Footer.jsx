import React from "react";
import appstore from "../images/appstore.svg";
import googleplay from "../images/googleplay.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footer = [
    {
      id: 1,
      links: [
        {
          id: 1,
          name: "Get Help",
          link: "https://google.com",
        },
        {
          id: 2,
          name: "Buy gift cards",
          link: "https://google.com",
        },
        {
          id: 3,
          name: "Add your restaurant",
          link: "https://google.com",
        },
        {
          id: 4,
          name: "Sign up to deliver",
          link: "https://google.com",
        },
        {
          id: 5,
          name: "Create a business account",
          link: "https://google.com",
        },
        {
          id: 6,
          name: "Promotions",
          link: "https://google.com",
        },
      ],
    },
    {
      id: 2,
      links: [
        {
          id: 1,
          name: "Restaurant Near me",
          link: "https://google.com",
        },
        {
          id: 2,
          name: "View all cities",
          link: "https://google.com",
        },
        {
          id: 3,
          name: "View all countries",
          link: "https://google.com",
        },
        {
          id: 4,
          name: "Pickup near me",
          link: "https://google.com",
        },
        {
          id: 5,
          name: "About Best Eats",
          link: "https://google.com",
        },
        {
          id: 6,
          name: "Language",
          link: "https://google.com",
        },
      ],
    },
  ];
  const footerb = [
    {
      id: 1,
      text: "Privacy Policy",
      link: "https://google.com",
    },
    {
      id: 2,
      text: "Terms",
      link: "https://google.com",
    },
    {
      id: 3,
      text: "Pricing",
      link: "https://google.com",
    },
    {
      id: 4,
      text: "Do not sell my info (California)",
      link: "https://google.com",
    },
  ];
  return (
    <div className="w-full h-[300px]">
      <hr className="pt-5" />
      <div className="max-w-[990px] mx-5 sm:mx-10 lg:mx-auto">
        <h1 className="text-3xl text-center pb-3 sm:hidden">
          Best <span className="font-bold">Easts</span>
        </h1>
        <div className="flex justify-between">
          <div className="sm:w-1/2 sm:block hidden relative">
            <h1 className="text-3xl">
              Best <span className="font-bold">Easts</span>
            </h1>
            <div className="flex absolute bottom-0">
              <img src={appstore} alt="app store" className="w-28 h-10 mr-2" />
              <img src={googleplay} alt="google play" className="w-28 h-10" />
            </div>
          </div>
          <div className="flex text-sm sm:text-md md:text-base jsutify-between sm:justify-start w-full sm:w-1/2">
            {footer.map(({ id, links }) => (
              <ul key={id}>
                {links.map(({ id, name, link }) => (
                  <a href={link} className="hover:underline duration-200">
                    <li key={id} className="py-2 px-5">
                      {name}
                    </li>
                  </a>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex pb-5 justify-center">
            <FaFacebook
              size={25}
              className="mx-4 cursor-pointer hover:text-gray-800 duration-200"
            />
            <FaTwitter
              size={25}
              className="mx-4 cursor-pointer hover:text-gray-800 duration-200"
            />
            <FaInstagram
              size={25}
              className="mx-4 cursor-pointer hover:text-gray-800 duration-200"
            />
          </div>
          <ul className="flex justify-between">
            {footerb.map(({ id, text, link }) => (
              <a href={link}>
                <li
                  key={id}
                  className="px-4 hover:underline duration-300 text-xs sm:text-sm"
                >
                  {text}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <p className="lg:text-right px-4 py-3 text-xs sm:text-sm text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
          <span className="pl-2">© 2022 Uber Technologies Inc.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
