import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseApi } from "../../../config";
import { toast } from "sonner";

// Zod Schema for validation
const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  frontendTechnology: z.string().min(1, "Frontend Technology is required"),
  images: z.string().url("Please enter a valid image URL"),
  backendTechnology: z.string().min(1, "Backend Technology is required"),
  designTechnology: z.string().min(1, "Design Technology is required"),
  projectLiveLink: z.string().url("Please enter a valid Project Live Link"),
  serverLiveLink: z.string().url("Please enter a valid Server Live Link"),
  githubClientCodeLink: z
    .string()
    .url("Please enter a valid GitHub Client Code Link"),
  githubServerCodeLink: z
    .string()
    .url("Please enter a valid GitHub Server Code Link"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  commit: z.string().min(1, "commit is required"),
  title: z.string().min(1, "title is required"),
  pages: z.string().min(1, "pages is required"),
});

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: projectData } = await axios.post(
        `${baseApi}/create-project`,
        data
      );
      console.log(projectData?.success);

      if (projectData?.success) {
        toast.success("Project created successfully");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project");
    }
  };

  return (
    <div className="max-w-4xl mx-auto  w-full">
      <h1 className=" text-2xl font-bodyfont ">Create a Project</h1>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Project Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Frontend Technology
          </label>
          <input
            type="text"
            {...register("frontendTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Frontend Technology"
          />
          {errors.frontendTechnology && (
            <p className="text-red-500 text-sm">
              {errors.frontendTechnology.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            {...register("images")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Image URL"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Backend Technology
          </label>
          <input
            type="text"
            {...register("backendTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Backend Technology"
          />
          {errors.backendTechnology && (
            <p className="text-red-500 text-sm">
              {errors.backendTechnology.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Design Technology
          </label>
          <input
            type="text"
            {...register("designTechnology")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Design Technology"
          />
          {errors.designTechnology && (
            <p className="text-red-500 text-sm">
              {errors.designTechnology.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Project Live Link
          </label>
          <input
            type="text"
            {...register("projectLiveLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Live Link"
          />
          {errors.projectLiveLink && (
            <p className="text-red-500 text-sm">
              {errors.projectLiveLink.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Server Live Link
          </label>
          <input
            type="text"
            {...register("serverLiveLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Server Live Link"
          />
          {errors.serverLiveLink && (
            <p className="text-red-500 text-sm">
              {errors.serverLiveLink.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            GitHub Client Code Link
          </label>
          <input
            type="text"
            {...register("githubClientCodeLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="GitHub Client Code Link"
          />
          {errors.githubClientCodeLink && (
            <p className="text-red-500 text-sm">
              {errors.githubClientCodeLink.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            GitHub Server Code Link
          </label>
          <input
            type="text"
            {...register("githubServerCodeLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="GitHub Server Code Link"
          />
          {errors.githubServerCodeLink && (
            <p className="text-red-500 text-sm">
              {errors.githubServerCodeLink.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">commit</label>
          <input
            {...register("commit")}
            className="w-full border   p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
          {errors.commit && (
            <p className="text-red-500 text-sm">{errors.commit.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">title</label>
          <input
            {...register("title")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">pages</label>
          <input
            {...register("pages")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
          {errors.pages && (
            <p className="text-red-500 text-sm">{errors.pages.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {" "}
            projectOverViewVideoLink
          </label>
          <input
            {...register("projectOverViewVideoLink")}
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            placeholder="Project Description"
            rows={4}
          />
        </div>

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

export default CreateProject;
