/* eslint-disable react/prop-types */

const ExprienceCart = ({ logo, title, des }) => {
  return (
    <div>
      <div className="w-full  group flex font-titlefont ">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative ">
          <span className=" absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 ">
            <span className=" w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
        <div className=" p-4 h-60  w-full bg-black bg-opacity-20 hover:bg-opacity-50 duration-300 rounded-lg px-5 flex flex-col  my-auto gap-4 ">
          <p className=" text-designColor text-6xl">{logo}</p>
          <p className=" text-2xl">{title}</p>
          <p className=" ">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ExprienceCart;
