/* eslint-disable react/prop-types */

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-auto group flex ">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative ">
        <span className=" absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 ">
          <span className=" w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="md:p-8 p-4  w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg  flex flex-col  md:gap-10 gap-5 ">
        <div className=" w-full flex justify-between items-center ">
          <div className="w-full">
            <h3 className="md:text-2xl  font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className=" text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
            <p className=" md:hidden mt-3 w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium">
              {result}
            </p>
          </div>
          <div className="md:flex hidden">
            <p className=" w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className=" md:text-base text-sm md:font-medium  text-gray-400 group-hover:to-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
