import axios from "axios";
import { useEffect, useState } from "react";
import { baseApi } from "../../../config";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/all-blog`);
        setblog(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchblog();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {blogs?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
