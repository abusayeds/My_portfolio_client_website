/* eslint-disable react/prop-types */

import { FaRegUser } from "react-icons/fa";
import { images } from "../../assets/images";
import Title from "../layout/Title";
import Slider from "react-slick";
import { MdDeveloperMode, MdOutlineEmail } from "react-icons/md";
import { FiPhoneMissed } from "react-icons/fi";
import { CgCalendarDates, CgWebsite } from "react-icons/cg";
import { RiComputerLine } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" w-10 h-8 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute md:top-6  top-64 md:right-5 right-0  cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight className=" text-designColor"></HiArrowRight>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" w-10 h-8 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute md:top-6 top-64 md:right-20  right-16  cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft className=" text-designColor"></HiArrowLeft>
    </div>
  );
}

const About = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <button
        className={`${
          dotActive === i ? "bg-red-500" : "bg-gray-200"
        } w-3 h-3 rounded-full`}
      />
    ),
  };

  return (
    <section
      id="about"
      className="w-full md:py-20 pt-10 border-b border-gray-500"
    >
      <div>
        <Title title="VISIT MY ABOUT" des="About me" />
      </div>

      <div className="max-w-6xl mx-auto border-none">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full md:h-[450px] flex justify-between md:gap-5 gap-2">
              <div className="w-[35%] h bg-gradient-to-r from-[#232b2b] to-[#17191a] hidden md:flex flex-col md:justify-center md:gap-8 rounded-lg ">
                <img
                  className="md:h-72 md:object-none rounded"
                  src="https://i.ibb.co/26cDYTW/108521995.jpg"
                  alt=""
                  style={{
                    backgroundImage:
                      'url("https://static.vecteezy.com/system/resources/previews/000/535/164/non_2x/3d-empty-studio-room-show-booth-for-designers-with-spotlight-on-gray-gradient-background-vector.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-5 flex flex-col gap-2">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Love to learn
                  </p>
                  <p className="font-titlefont md:text-2xl text-xs font-bold">
                    Abu Sayed
                  </p>
                  <p className="font-titlefont md:text-base md:tracking-wide text-gray-500">
                    A Professional Coder
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] h-full flex flex-col md:px-5 md:pt-16 md:pb-2 justify-between md:bg-gradient-to-l from-[#232b2b] to-[#17191a]">
                {/* Small devices */}
                <div className="md:hidden">
                  <img
                    className="h-56 rounded w-full object-cover"
                    src="https://i.ibb.co/26cDYTW/108521995.jpg"
                    alt=""
                    style={{
                      backgroundImage:
                        'url("https://static.vecteezy.com/system/resources/previews/000/535/164/non_2x/3d-empty-studio-room-show-booth-for-designers-with-spotlight-on-gray-gradient-background-vector.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className=" flex justify-between py-6 w-full">
                    <div>
                      <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                        Love to learn
                      </p>
                      <p className="font-titlefont md:text-2xl text-xs font-bold">
                        Abu Sayed
                      </p>
                      <p className="md:text-base md:tracking-wide text-gray-500">
                        A Professional Coder
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
                {/* Small devices */}
                <div className="w-full flex flex-col gap-4">
                  <p className="font-semibold font-titlefont tracking-wide md:text-2xl text-xs">
                    I am a highly analytical MERN Stack with expertise in
                    JavaScript , TypeScript, and Mongobd, Mongoose abd NOsql
                    datebase .
                  </p>
                  <p className="text-xs font-titlefont">
                    I develop dynamic and responsive interfaces that meet client
                    needs. With a deep understanding of front-end development
                    best practices, I am an innovative developer experienced in
                    React JS and Next JS.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 md:mt-0 gap-2">
                  <ul className="flex items-center gap-4">
                    <FaRegUser className="text-designColor opacity-80" />
                    <p className="font-titlefont">Abu Sayed</p>
                  </ul>
                  <ul className="flex items-center gap-4">
                    <FiPhoneMissed className="text-designColor opacity-80" />
                    <p className="font-titlefont">(+880) 1843425697</p>
                  </ul>
                  <ul className=" hidden md:flex items-center gap-4 w-full">
                    <MdOutlineEmail className="text-designColor opacity-80" />
                    <p className="font-titlefont">
                      abusayedstudent855@gmail.com
                    </p>
                  </ul>
                  <ul className="flex items-center gap-4">
                    <CgCalendarDates className="text-designColor opacity-80" />
                    <p className="font-titlefont">Born on 28 Dec 2002</p>
                  </ul>
                  <ul className="flex items-center gap-4">
                    <RiComputerLine className="text-designColor opacity-80" />
                    <p className="font-titlefont">Learn to Computer Science</p>
                  </ul>
                  <ul className="flex items-center gap-4">
                    <CiHome className="text-designColor opacity-80" />
                    <p className="font-titlefont">Dhaka, Uttara/C10</p>
                  </ul>
                </div>
                <div className="flex flex-col gap-1 mt-3 md:mt-0">
                  <p className="font-titlefont ">Language skills</p>
                  <p className="font-titlefont ">English, Bangla, Hindi</p>
                </div>
              </div>
            </div>
          </div>

          {/* number2slider */}
          <div className="w-full">
            <div className="w-full md:h-[450px] flex justify-between md:gap-5 gap-2">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#232b2b] to-[#17191a] hidden md:flex flex-col md:justify-center gap-8 rounded-lg ">
                <img className="md:h-72  rounded" src={images.about2} />
                <div className="p-5 flex flex-col gap-2">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Love to learn
                  </p>
                  <p className="font-titlefont md:text-2xl text-xs font-bold">
                    My Awesome Servise
                  </p>
                  <p className="font-titlefont md:text-base md:tracking-wide text-gray-500">
                    A Professional Coder
                  </p>
                </div>
              </div>
              <div className="md:w-[60%] h-full flex flex-col md:px-5 md:pt-16 md:pb-2 justify-between md:bg-gradient-to-l from-[#232b2b] to-[#17191a]">
                {/* Small devices */}
                <div className="md:hidden">
                  <img
                    className="h-56 rounded w-full object-cover"
                    src={images.about2}
                    alt=""
                  />
                  <div className=" flex justify-between py-6 w-full">
                    <div>
                      <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                        Love to learn
                      </p>
                      <p className="font-titlefont md:text-2xl text-xs font-bold">
                        My Awesome Servise
                      </p>
                      <p className="md:text-base md:tracking-wide text-gray-500">
                        A Professional Coder
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
                {/* Small devices */}

                <div className="w-full flex flex-col gap-4">
                  <p className="font-semibold font-titlefont tracking-wide md:text-2xl text-xs">
                    A platform engineering practice that allows developers to
                    independently access, manage and deploy the resources and
                    tools they need
                  </p>
                  <p className="text-xs font-titlefont">
                    The services detailed by the Developer during its onboarding
                    process, which the Developer intends to provide to Players
                    using the services accessed by the Developer through the
                    APIs
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 md:mt-0 gap-2 ">
                  <div className=" flex flex-col gap-3 h-36">
                    <CgWebsite className="text-5xl text-designColor opacity-55"></CgWebsite>
                    <p>Web design</p>
                    <p className="text-xs font-titlefont">
                      Web design involves creating the visual layout and
                      aesthetics of a website, focusing on user experience,
                      graphics, and overall look
                    </p>
                  </div>
                  <div className=" flex flex-col gap-3 h-36">
                    <MdDeveloperMode className="text-5xl text-designColor opacity-55"></MdDeveloperMode>
                    <p>Web devlopment</p>
                    <p className="text-xs font-titlefont">
                      A web developer is a technical professional responsible
                      for building applications and websites hosted on the
                      internet,
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-3 md:mt-0">
                  <p className="font-titlefont text-designColor font ">
                    Language skills
                  </p>
                  <p className="font-titlefont ">English, Bangla, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
