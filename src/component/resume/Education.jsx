import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" md:flex gap-10"
    >
      <div className="md:w-1/2">
        <div className=" flex flex-col gap-2 mt-16 font-titlefont">
          <p className=" text-sm text-designColor tracking-[4px]">2024 + </p>
          <h2 className=" font-semibold">Education Quality</h2>
        </div>

        <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="BAC in Computer Science "
            subTitle=" Dhaka International University DIU (2024 to Running)"
            result="runnig"
            des="BSC Education draws upon psychology, sociology, and critical policy analysis to help explain and understand teaching and learning processes, the mechanisms of and solutions to global inequalities both within and beyond education, and how such issues are affected by government policies on education"
          ></ResumeCard>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className=" flex flex-col gap-2 mt-16 font-titlefont">
          <p className=" text-sm text-designColor tracking-[4px]">2019-2023 </p>
          <h2 className=" font-semibold">Education Quality</h2>
        </div>

        <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Diploma in Computer Science (End) "
            subTitle="Thakurgaon Polytechnic institute (2019 to 2023)"
            result="3.50/4"
            des="A diploma in Computer Science is a diploma level certificate and professional course that teach learners about designing and developing methods and tools required in computer and software fields and the programming languages to work in that environment"
          ></ResumeCard>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
