import React, { useContext, useState } from "react";
import CreateBlog from "../blogs/CreateBlog";
import CreateProject from "../createProject/CreateProject";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import AllBlog from "../blogs/AllBlog";
import AllProject from "../../component/projects/AllProject";
import CvUpdate from "../../component/resume/CvUpdate";

const Dashboard = () => {
  const [blog, setBlog] = useState(false);
  const [cv, setCv] = useState(false);
  const [allBlog, setAllBlog] = useState(false);
  const [allProject, setAllProject] = useState(false);
  const [project, setProject] = useState(true);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const hendleLogout = () => {
    setToken("");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <main className=" md:flex p-4">
      <section className="md:w-2/6 flex flex-col gap-8 p-4">
        <p className=" text-2xl font-bodyfont">Admin Dashboard </p>
        <div className=" flex flex-col gap-4 ">
          <button
            onClick={() => {
              setAllProject(true);
              setAllBlog(false);
              setProject(false);
              setBlog(false);
              setCv(false);
            }}
            className=" rounded-md shadow-shadowOne p-2"
          >
            All Project
          </button>
          <button
            onClick={() => {
              setAllBlog(true);
              setAllProject(false);
              setProject(false);
              setBlog(false);
              setCv(false);
            }}
            className=" rounded-md shadow-shadowOne p-2"
          >
            All Blog
          </button>
          <button
            onClick={() => {
              setProject(true);
              setAllBlog(false);
              setBlog(false);
              setAllProject(false);
              setCv(false);
            }}
            className=" rounded-md shadow-shadowOne p-2"
          >
            Create Project{" "}
          </button>
          <button
            onClick={() => {
              setBlog(true);
              setAllProject(false);
              setProject(false);
              setAllBlog(false);
              setCv(false);
            }}
            className=" rounded-md shadow-shadowOne p-2"
          >
            Create blog
          </button>
          <button
            onClick={() => {
              setBlog(false);
              setAllProject(false);
              setProject(false);
              setAllBlog(false);
              setCv(true);
            }}
            className=" rounded-md shadow-shadowOne p-2"
          >
            Updata CV
          </button>
          <button
            onClick={() => hendleLogout()}
            className=" rounded-md bg-designColor opacity-80 hover:opacity-100 duration-500 p-2"
          >
            Logout{" "}
          </button>
        </div>
      </section>
      <section className="md:w-5/6 p-4">
        {project && <CreateProject />}
        {blog && <CreateBlog />}
        {allBlog && <AllBlog />}
        {allProject && <AllProject />}
        {cv && <CvUpdate />}
      </section>
    </main>
  );
};

export default Dashboard;
