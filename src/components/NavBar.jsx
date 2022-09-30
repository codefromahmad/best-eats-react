import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-slate-300">
      <div className="max-w-screen-lg h-full mx-auto">
        <div className="flex justify-between w-full h-full items-center">
          <div className="">Left</div>
          <div className="">Center</div>
          <div className="">Right</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
