import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FaFacebook, FaLinkedin } from "react-icons/fa";

import { BsArrowBarDown, BsGithub } from "react-icons/bs";
import { resume } from "../../../config";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      " MERN Stack Developer.",
      "with Java-script, TypeScript",
      "with React js , Next js",
      "with  Mongodb , Mongoose && NoSql , ",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="md:h-screen h-auto md:pb-20 pb-10  flex font-titlefont border-b border-gray-500 mt-5"
    >
      <div className="relative bg-cover bg-center w-screen h-full md:bg-[url('https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg')]">
        <div className="md:absolute md:inset-0 md:bg-black opacity-80 md:flex justify-center items-center md:px-10 min-w-full">
          <div className="w-3/2 flex flex-col md:gap-16 gap-12">
            <div className="text-white flex flex-col gap-6">
              <h4>WELCOME TO MY WORLD</h4>
              <h1 className="md:text-6xl text-3xl font-bold font-serif">
                Hi, I am <span className="text-designColor">Abu Sayed</span>{" "}
              </h1>
              <h2 className="md:text-4xl font-bold text-white">
                <span className=" font-titlefont">{text}</span>
                <Cursor
                  cursorBlinking={false}
                  cursorStyle="|"
                  cursorColor="#ff014"
                />
              </h2>
              <h3 className=" font-titlefont">
                Welcome to my portfolio! I,m a passionate front-end developer
                with a keen eye for design and a love for creating user-friendly
                web experiences. Here, you ,ll find a showcase of my work,
                demonstrating my skills and expertise in web development.
              </h3>
            </div>

            <div className=" flex gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=100074503997052"
                target="blank"
              >
                <span className="IconClass">
                  <FaFacebook />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/abu-sayed96/"
                target="_blank"
              >
                <span className="IconClass">
                  <FaLinkedin />
                </span>
              </a>
              <a href="https://github.com/abusayeds" target="_blank">
                <span className="IconClass">
                  <BsGithub />
                </span>
              </a>
              <a
                href={resume}
                target="_blank"
                className=" text-xs  md:text-base   p-2 bg-designColor   text-white  rounded flex items-center justify-center font-titlefont gap-2"
              >
                Resume
                <BsArrowBarDown className=" animate-bounce  duration-500"></BsArrowBarDown>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
