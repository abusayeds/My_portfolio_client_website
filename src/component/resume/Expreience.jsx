import ExprienceCart from "./ExprienceCart";
import { motion } from "framer-motion";
import { FaConnectdevelop } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUtensilSpoon } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
const Expreience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="  font-titlefont font-bold  mt-10">My service</p>
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              logo={<FaConnectdevelop />}
              title=" Web Devlopment"
              des="Proficiency wed development with updata technology"
            ></ExprienceCart>
          </div>
        </div>
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              logo={<CgIfDesign />}
              title="Web design
              "
              des=" Skilled in creating responsive applications and user frindly designs !  "
            ></ExprienceCart>
          </div>
        </div>

        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              logo={<FaProjectDiagram />}
              title="Project Management"
              des="Skills in how to manage project"
            ></ExprienceCart>
          </div>
        </div>
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              logo={<SiMarketo />}
              title="markating"
              des="Ability to manage client "
            ></ExprienceCart>
          </div>
        </div>
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              logo={<FaUtensilSpoon />}
              title="Spoken English"
              des="Ability to speak and understand English "
            ></ExprienceCart>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Expreience;
