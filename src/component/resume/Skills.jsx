import { motion } from "framer-motion";
import { SiReaddotcv } from "react-icons/si";
import { resume } from "../../../config";
const Skills = () => {
  return (
    <motion.div
      className="mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="my-6  font-bold">My Resume </p>
      <div className="mt-6 ">
        <a
          href={resume}
          target="_blank"
          className=" flex flex-col gap-4 shadow-shadowOne md:w-80  p-6 "
        >
          <div className=" flex gap-6 ">
            <SiReaddotcv className=" text-designColor text-3xl" />
            <ul className=" flex flex-col gap-1">
              <p className=" font-bodyfont">Download CV </p>
              <p className=" text-sm">Last Update : 15/10/2024</p>
            </ul>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Skills;
