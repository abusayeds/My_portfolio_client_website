import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog-details/${blog._id}`}
      className=" font-titlefont shadow-shadowOne group flex flex-col justify-center items-center md:p-0 p-4"
    >
      <section className="relative rounded-md overflow-hidden ">
        <img className=" h-60 rounded-md" src={blog.blogImg} alt="" />
        <div className="absolute inset-0 flex items-center justify-center bg-designColor bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white font-bold py-2 px-4 rounded">
            Read Blog
          </button>
        </div>
      </section>
      <section className="h-[200px] overflow-auto no-scrollbar">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex items-center gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src={blog.authorImg}
              alt=""
            />
            <ul>
              <p>{blog.authorName}</p>
              <p className="text-xs">Published on: {blog.publishedDate}</p>
            </ul>
          </div>
          <p className="hover:text-designColor duration-700 font-bold text-2xl">
            {blog.title}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default BlogCard;

// <section className=" md:flex  justify-center items-center text-center   ">
// <img className="md:w-1/2 " src={blog?.blogImg} alt="" />
// <p className="md:w-1/2 md:text-4xl text-2xl font-bodyfont">
//   {blog?.title}
// </p>
// </section>
