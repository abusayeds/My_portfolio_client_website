/* eslint-disable react/prop-types */

import { HiArrowRight } from "react-icons/hi";

const Cart = ({ title, des, logo }) => {
  return (
    <div
      className="px-6 md:px-12 h-64 md:h-80 rounded-lg 
     flex items-center bg-gradient-to-r from-bodyColor to-[#070707] group hover:bg-gradient-to-b
      hover:from-black hover:to-gray-800 transition-colors duration-100 group"
    >
      <div className="h-60 md:h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 md:gap-10 translate-y-14 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-12 md:w-16 h-10 md:h-12 flex flex-col justify-between">
            <span className="text-4xl md:text-5xl text-designColor">
              {logo}
            </span>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-2xl md:text-3xl font-titlefont font-semibold text-gray-300">
              {title}
            </h2>
            <h4 className="text-sm md:text-base text-gray-400">{des}</h4>
            <span className="text-xl md:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
