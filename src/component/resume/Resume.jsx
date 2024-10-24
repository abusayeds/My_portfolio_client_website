import { useState } from "react";
import Title from "../layout/Title";
import Education from "./Education";
import Skills from "./Skills";
import Expreience from "./Expreience";
import Achievment from "./Achievment";

const Resume = () => {
  const [exp, setExp] = useState(false);
  const [edu, setEdu] = useState(false);
  const [resume, setResume] = useState(true);
  const [achievment, setAchievment] = useState(false);

  return (
    <section
      id="resume"
      className="w-full h-auto md:py-20 pt-10  border-b border-gray-500 "
    >
      <div className=" flex justify-center items-center text-center ">
        <Title title="5+ YEAES OF WEB DEVLOPMENT " des="My Resume"></Title>
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <li
            onClick={() =>
              setResume(true) &
              setEdu(false) &
              setExp(false) &
              setAchievment(false)
            }
            className={`${
              resume
                ? " border animate-pulse border-designColor rounded-lg "
                : "border-transparent"
            } resumeLi `}
          >
            Resume
          </li>
          <li
            onClick={() =>
              setExp(true) &
              setEdu(false) &
              setResume(false) &
              setAchievment(false)
            }
            className={`${
              exp
                ? " border animate-pulse border-designColor rounded-lg "
                : "border-transparent"
            } resumeLi `}
          >
            Services
          </li>
          <li
            onClick={() =>
              setEdu(true) &
              setResume(false) &
              setExp(false) &
              setAchievment(false)
            }
            className={`${
              edu
                ? " border animate-pulse border-designColor rounded-lg "
                : "border-transparent"
            } resumeLi `}
          >
            Education
          </li>

          <li
            onClick={() =>
              setAchievment(true) &
              setEdu(false) &
              setResume(false) &
              setExp(false)
            }
            className={`${
              achievment
                ? " animate-pulse border border-designColor rounded-lg "
                : "border-transparent"
            } resumeLi `}
          >
            Achievment
          </li>
        </ul>
      </div>
      {edu && <Education></Education>}
      {resume && <Skills></Skills>}
      {exp && <Expreience></Expreience>}
      {achievment && <Achievment></Achievment>}
    </section>
  );
};

export default Resume;
