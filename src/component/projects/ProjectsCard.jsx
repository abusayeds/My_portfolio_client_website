/* eslint-disable react/prop-types */
import { FaLink } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  return (
    <main>
      <section
        key={project._id}
        className="w-full md:p-4 h-[95%] rounded-lg  flex flex-col bg-gradient-to-r 
             from-bodyColor to-[#070707] group hover:bg-gradient-to-b hover:from-black hover:to-gray-800 transition-colors duration-500 relative"
      >
        <div className="w-full  overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-125 duration-300 cursor-pointer"
            src={project.images}
            alt=""
          />
        </div>

        <div className="w-full p-4 md:p-0 my-5 flex flex-col gap-2 h-48 overflow-auto no-scrollbar">
          <div className="md:flex items-center justify-between">
            <h3 className="text-designColor font-serif font-normal text-lg">
              {project.name}
            </h3>

            <a
              href={project.projectLiveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <p>Live Link</p>
              <FaLink />
            </a>
          </div>
          <p className="font-titlefont text-sm text-gray-50">
            Design: <small>{project.designTechnology}</small>
          </p>
          <p className="font-titlefont text-sm text-gray-50">
            Technology: <small>{project.frontendTechnology}</small>
          </p>
          <p className="font-titlefont text-sm text-gray-50">
            Backend: <small>{project.backendTechnology}</small>
          </p>
        </div>

        <NavLink
          className="mt-auto w-full bg-gradient-to-r from-designColor to-blue-500 text-white p-2 rounded-lg transition-opacity duration-300 text-center"
          to={`/project-details/${project._id}`}
        >
          Details
        </NavLink>
      </section>
    </main>
  );
};

export default ProjectsCard;
