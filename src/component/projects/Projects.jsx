import { useEffect, useState } from "react";
import "./project.css";
import axios from "axios";

import { baseApi } from "../../../config";
import ProjectsCard from "./ProjectsCard";
import Title from "../layout/Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const data = projects?.data;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/all-project`);
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);
  return (
    <section
      id="project"
      className="w-full h-auto md:py-20 py-10  border-b border-gray-500 "
    >
      <div className=" flex justify-center items-center text-center ">
        <Title
          title="  VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des=" My projects"
        ></Title>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((project) => (
          <ProjectsCard key={project._id} project={project}></ProjectsCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
