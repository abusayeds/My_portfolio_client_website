import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-scroll";
import { BsGithub } from "react-icons/bs";
import { scrollRoute } from "../../constants";

const Footer = () => {
  return (
    <main className=" bg-black   font-titlefont md:px-16 p-6 text-gray-400 tracking-wide py-10">
      <div className="max-w-7xl mx-auto">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="mb-5 flex flex-col gap-4  ">
            <p className="  font-semibold text-white">My Self</p>
            <div className="flex flex-col gap-2 ">
              <p className="tracking-wide">Abu Sayed</p>
              <p className=" tracking-wide uppercase">Dhaka ,uttora / C10</p>
            </div>
            <div className="flex flex-col gap-2 tracking-wide">
              <p>Phone : (+088) 1843425697</p>
              <p>Email : abusayedstudent@gmail.com</p>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-4 ">
            <p className="  font-semibold text-white">Useful Links</p>
            <div className=" flex flex-col gap-2">
              {scrollRoute.map((item) => (
                <li
                  className=" flex items-center text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  key={item._id}
                >
                  <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                  <Link
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-4 ">
            <p className="  font-semibold text-white">My Services</p>
            <div className=" flex flex-col gap-2">
              <li className="flex items-center">
                <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                <p className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  Web Devlopment
                </p>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                <p className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  Web Design
                </p>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                <p className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  Projects Management
                </p>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                <p className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  Marketing
                </p>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward className=" text-yellow-600 font-semibold "></IoIosArrowForward>
                <p className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  Spoken English
                </p>
              </li>
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-4 ">
            <p className="font-semibold text-white">Get in Touch</p>

            <div>
              <p>
                Briefly state your reasons for writing and then include an open
                invitation to continue communicating in the future
              </p>
              <div className="flex gap-8 mt-5">
                <a
                  className=" hover:text-red-600 text-2xl duration-500"
                  href="https://www.facebook.com/profile.php?id=100074503997052"
                  target="_blank "
                >
                  <FaFacebook />
                </a>
                <a
                  className=" hover:text-red-600 text-2xl duration-500"
                  href=""
                  target="_blank "
                >
                  <BsGithub />
                </a>
                <a
                  className=" hover:text-red-600 text-2xl duration-500"
                  href=""
                  target="_blank "
                >
                  <FaWhatsapp />
                </a>
                <a
                  className=" hover:text-red-600 text-2xl duration-500"
                  href="https://www.linkedin.com/in/abu-sayed96/"
                  target="_blank "
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
