import { useForm } from "react-hook-form";

import axios from "axios";
import { baseApi } from "../../../config";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateProject = () => {
  const { ProjectId } = useParams();
  const [project, setProject] = useState({});
  const ProjectData = project?.data;

  const { register, handleSubmit, reset } = useForm(); // Destructure reset

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          `${baseApi}/single-project/${ProjectId}`
        );
        setProject(data);
        if (data?.data) {
          // Reset form with fetched data
          reset(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [ProjectId, reset]);

  const onSubmit = async (data) => {
    try {
      const { data: projectData } = await axios.put(
        `${baseApi}/update-project/${ProjectId}`,
        data
      );

      if (projectData?.success) {
        toast.success("Project updated successfully");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
    }
  };

  return (
    <div className="max-w-4xl mx-auto md:p-10 p-4  w-full">
      <h1 className=" text-2xl font-bodyfont "> Update a Project</h1>
      <form className="mt-8 " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Project Name</label>
          <input
            type="text"
            defaultValue={ProjectData?.name}
            {...register("name")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Frontend Technology
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.frontendTechnology}
            {...register("frontendTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Frontend Technology"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            defaultValue={ProjectData?.images}
            {...register("images")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Backend Technology
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.backendTechnology}
            {...register("backendTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Backend Technology"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Design Technology
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.designTechnology}
            {...register("designTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Design Technology"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Project Live Link
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.projectLiveLink}
            {...register("projectLiveLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Live Link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Server Live Link
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.serverLiveLink}
            {...register("serverLiveLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Server Live Link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            GitHub Client Code Link
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.githubClientCodeLink}
            {...register("githubClientCodeLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="GitHub Client Code Link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            GitHub Server Code Link
          </label>
          <input
            type="text"
            defaultValue={ProjectData?.githubServerCodeLink}
            {...register("githubServerCodeLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="GitHub Server Code Link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register("description")}
            defaultValue={ProjectData?.projectLiveLink}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">commit</label>
          <input
            {...register("commit")}
            defaultValue={ProjectData?.commit}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">title</label>
          <input
            {...register("title")}
            defaultValue={ProjectData?.title}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">pages</label>
          <input
            {...register("pages")}
            defaultValue={ProjectData?.pages}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
        </div>
        {ProjectData?.projectOverViewVideoLink && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              {" "}
              projectOverViewVideoLink
            </label>
            <input
              {...register("projectOverViewVideoLink")}
              defaultValue={ProjectData?.projectOverViewVideoLink}
              className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
              placeholder="Project Description"
              rows={4}
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
