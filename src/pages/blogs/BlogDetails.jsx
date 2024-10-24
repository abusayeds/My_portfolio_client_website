import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../../config";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [activeContent, setActiveContent] = useState(null);
  const blog = blogs?.data;

  const contentRefs = useRef({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/single-blog/${blogId}`);
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [blogId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveContent(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (contentRefs.current) {
      Object.values(contentRefs.current).forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    }

    return () => {
      if (contentRefs.current) {
        Object.values(contentRefs.current).forEach((el) => {
          if (el) {
            observer.unobserve(el);
          }
        });
      }
    };
  }, [blogs]);

  const scrollToContent = (id) => {
    const element = contentRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full py-10 md:px-0 px-5">
      <section className="mt-5 md:flex w-full gap-4">
        <section className="md:w-2/6 flex flex-col gap-4 md:sticky md:top-28 h-screen">
          <p className="font-bold">Contents</p>
          <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar">
            {blog?.contentDetails?.map((content) => (
              <div key={content?._id} className="flex items-center gap-2">
                <p
                  className={`cursor-pointer ${
                    activeContent === content?._id
                      ? " bg-designColor rounded-sm h-8 w-1 duration-500 "
                      : ""
                  }`}
                ></p>
                <p
                  className={`cursor-pointer ${
                    activeContent === content?._id ? " text-designColor " : ""
                  }`}
                  onClick={() => scrollToContent(content?._id)}
                  dangerouslySetInnerHTML={{ __html: content?.contentTitle }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="md:w-5/6 mx-auto flex flex-col gap-4 overflow-y-auto md:mt-0 mt-5">
          <div className="flex items-center gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src={blog?.authorImg}
              alt=""
            />
            <ul>
              <p>{blog?.authorName}</p>
              <p className="text-xs">Published on: {blog?.publishedDate}</p>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {blog?.contentDetails.map((content) => (
              <div
                className="flex flex-col gap-4 border-b pb-5"
                key={content?._id}
                id={content?._id}
                ref={(el) => (contentRefs.current[content?._id] = el)}
              >
                <p
                  className="font-bold text-4xl"
                  dangerouslySetInnerHTML={{ __html: content?.contentTitle }}
                />
                {content?.contentImg && (
                  <img
                    className="w-[600px] h-72"
                    src={content?.contentImg}
                    alt=""
                  />
                )}
                <p
                  className="font-titlefont"
                  dangerouslySetInnerHTML={{
                    __html: content?.contentDescription,
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default BlogDetails;
