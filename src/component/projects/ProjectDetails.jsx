import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { baseApi } from "../../../config";
import axios from "axios";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projects, setProjects] = useState([]);
  const project = projects?.data;
  console.log(project?.commit);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          `${baseApi}/single-project/${projectId}`
        );
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [projectId]);
  return (
    <main className=" md:flex justify-around gap-8 mx-auto p-5 font-titlefont">
      <section className=" flex flex-col p-5 gap-8 md:w-4/5 overflow-auto h-screen no-scrollbar  shadow-shadowOne">
        <div className=" flex flex-col gap-4">
          <p className=" text-4xl font-bodyfont"> {project?.name}</p>
          <p>{project?.title}</p>
        </div>
        <div className=" w-full flex items-center ">
          <div className="w-full flex justify-center items-center">
            <img
              className="max-w-full h-auto"
              src={project?.images}
              alt="Travel Image"
            />
          </div>
        </div>
        <div>
          <p className="text-sm">
            {project?.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
            adipisicing elit. Beatae mollitia veritatis, velit quia sequi alias
            accusantium temporibus voluptas necessitatibus commodi eveniet
            ducimus cupiditate dicta facilis, a minima, quam voluptate aliquid?
          </p>
        </div>
      </section>
      <section className=" flex flex-col p-5 gap-8 md:w-3/6 shadow-shadowOne ">
        <div className=" flex gap-8 ">
          <ul className=" bg-bodyColor  p-4 rounded-md  shadow-shadowOne ">
            {project?.commit} + <br />
            commits in github
          </ul>
          <ul className=" bg-bodyColor  p-4 rounded-md  shadow-shadowOne ">
            {project?.pages} + <br /> pages
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-center ">
          <a
            href={project?.projectLiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 relative rounded border text-[9px] border-gray-400 bg-transparent px-2 py-1 uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-designColor before:transition-transform before:duration-300 hover:text-white before:hover:scale-x-100 overflow-hidden"
          >
            Live link
          </a>

          {project?.serverLiveLink && (
            <a
              href={project?.serverLiveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 relative rounded border text-[9px] border-gray-400 bg-transparent px-2 py-1 uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-designColor before:transition-transform before:duration-300 hover:text-white before:hover:scale-x-100 overflow-hidden"
            >
              Server Link
            </a>
          )}

          <a
            href={project?.githubClientCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 relative rounded border text-[9px] border-gray-400 bg-transparent px-2 py-1 uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-designColor before:transition-transform before:duration-300 hover:text-white before:hover:scale-x-100 overflow-hidden"
          >
            Client Code
          </a>

          {project?.githubServerCodeLink && (
            <a
              href={project?.githubServerCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 relative rounded border text-[9px] border-gray-400 bg-transparent px-2 py-1 uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-designColor before:transition-transform before:duration-300 hover:text-white before:hover:scale-x-100 overflow-hidden"
            >
              Server Code
            </a>
          )}
        </div>

        <div className=" flex flex-col gap-4 ">
          <p className="  font-bodyfont"> Tecnology</p>
          <ul className=" flex flex-col gap-3">
            <p className=" mt-1 flex  gap-3">
              <BiSend className="text-lg text-designColor" />
              <span className=" text-sm">{project?.designTechnology}</span>
            </p>

            <p className=" mt-1 flex  gap-3">
              <BiSend className="text-lg text-designColor" />
              <span className=" text-sm">{project?.frontendTechnology}</span>
            </p>
          </ul>
          <p className="  font-bodyfont"> Backend </p>
          <ul className=" flex flex-col gap-3">
            <p className=" mt-1 flex  gap-3">
              <BiSend className="text-lg text-designColor" />
              <span className=" text-sm">{project?.backendTechnology}</span>
            </p>
          </ul>
        </div>
        <div>
          {project?.projectOverViewVideoLink && <p>Project Overview Video:</p>}

          {project?.projectOverViewVideoLink && (
            <iframe
              src={project?.projectOverViewVideoLink.replace("share", "embed")}
              width="100%"
              height="200"
              frameBorder="0"
              webkitAllowFullScreen
              mozAllowFullScreen
              allowFullScreen
              title="Project Overview Video"
            ></iframe>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
