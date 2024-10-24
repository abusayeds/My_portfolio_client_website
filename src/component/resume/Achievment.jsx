import { GiAchievement } from "react-icons/gi";
import { ImHappy2 } from "react-icons/im";
import { motion } from "framer-motion";
const Achievment = () => {
  return (
    <motion.main 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="pb-10">
      <div className="md:flex md:gap-10">
        <div className="flex flex-col gap-2 mt-16 font-titlefont">
          <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
          <h2 className="font-semibold">Achievment</h2>
        </div>
      </div>

      <section className="w-full   mt-10 md:flex h-auto font-titlefont     ">
        <div className="md:w-1/3 sm:w-full flex-col gap-14 rounded bg-black bg-opacity-25 p-5  text-white flex   ">
          <div className="flex flex-col gap-4">
            <div className=" flex gap-0">
              <GiAchievement className="text-6xl"></GiAchievement>
              <p className=" text-2xl mt-6">0 / 23</p>
            </div>
            <p> Total Achievements Completed in 4 years !</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              <ImHappy2 className="text-5xl text-yellow-300"></ImHappy2>
              <p>Get Started</p>
            </div>
            <p> Total Achievements Completed in years !</p>
          </div>
        </div>
        <div className="md:w-2/3  md:flex  gap-5 items-center justify-center   ">
          <div className=" h-full md:w-52 rounded bg-black bg-opacity-15 p-3 md:mt-0 mt-5 text-white flex flex-col justify-center items-center gap-4   ">
            <div className="h-28 bg-black bg-opacity-15  text-white    w-28 rounded-full flex justify-center items-center">
                <p className="">100%</p>
            </div>
            <p>Good Work by Intern </p>
            <div className=" flex flex-col gap-2">
            
                <p className="text-xs">As a web development intern, you will actively participate in designing, developing, and maintaining websites and web applications</p>
            </div>
          </div>
          <div className=" h-full md:w-52 rounded bg-black bg-opacity-15 p-3 md:mt-0 mt-5  text-white flex flex-col justify-center items-center gap-4   ">
            <div className="h-28  bg-black bg-opacity-15  text-white    w-28 rounded-full flex justify-center items-center">
                <p className="">100%</p>
            </div>
            <p> In Programing club !  </p>
            <div className=" flex flex-col gap-2">
              
                <p className="text-xs">The primary goal of a programming club is to provide a supportive environment for members to learn</p>
            </div>
          </div>
          <div className=" h-full md:w-52 rounded bg-black bg-opacity-15 p-3 md:mt-0 mt-5  text-white flex flex-col justify-center items-center gap-4   ">
            <div className="h-28 bg-black bg-opacity-15  text-white    w-28 rounded-full flex justify-center items-center">
                <p className="">100%</p>
            </div>
            <p>Computer science </p>
            <div className=" flex flex-col gap-2">
             
                <p className="text-xs"> The study of computers and algorithmic processes, including their principles,  software designs, and their impact on society.</p>
            </div>
          </div>
          
         
         
        </div>
      </section>
    </motion.main>
  );
};

export default Achievment;
