import { useEffect, useState } from "react";
import { baseApi } from "../../../config";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AllBlog = () => {
  const [blogs, setBlog] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteBlogId, setDeleteBlogId] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/all-blog`);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, []);

  const handleDelete = async () => {
    if (!deleteBlogId) return;
    try {
      const { data } = await axios.delete(
        `${baseApi}/delete-blog/${deleteBlogId}`
      );
      if (data?.success) {
        toast.success("Blog deleted successfully");
        const updatedBlogs = blogs.data.filter(
          (blog) => blog._id !== deleteBlogId
        );
        setBlog({ data: updatedBlogs });
      }
    } catch (err) {
      console.log(err);
      toast.error("Error deleting blog");
    } finally {
      setShowModal(false);
      setDeleteBlogId(null);
    }
  };

  const openDeleteModal = (blogId) => {
    setDeleteBlogId(blogId);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className=" text-3xl font-serif">All blogs</p>
      {blogs?.data?.map((blog) => (
        <div
          key={blog._id}
          className="flex flex-col sm:flex-row items-center sm:gap-8 gap-4 w-full shadow-shadowOne border border-gray-600 p-3"
        >
          <img
            className="h-24 w-full sm:w-1/6 rounded-md object-cover"
            src={blog.blogImg}
            alt=""
          />
          <p className="w-full md:w-5/6 text-center sm:text-left">
            {blog?.title}
          </p>
          <p className="w-full sm:w-5/6 text-center">
            Total content {blog?.contentDetails.length}
          </p>
          <div className="flex justify-between sm:justify-start w-full md:w-5/6 gap-4">
            <Link
              to={`/blog-update/${blog._id}`}
              className="text-blue-600 underline"
            >
              Edit
            </Link>
            <button
              className="text-2xl text-designColor hover:opacity-80"
              onClick={() => openDeleteModal(blog._id)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" bg-bodyColor p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this blog?</p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlog;
