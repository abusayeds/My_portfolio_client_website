import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi, CLIENT_API_KEY } from "../../../config";
import { toast } from "sonner";
import {} from "postcss";
import ContentUpdate from "./ContentUpdate";

const Updateblog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState({});
  const [contentOpen, setcontentOpen] = useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/single-blog/${blogId}`);

        setAuthorName(data?.data?.authorName || "");
        setAuthorImg(data?.data?.authorImg || "");
        setBlogImg(data?.data?.blogImg || "");
        setPublishedDate(data?.data?.publishedDate || "");
        setTitle(data?.data?.title || "");
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [blogId]);

  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`,
        formData
      );
      const imageUrl = res.data.data.url;

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);

      return null;
    }
  };

  const handleAuthorImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        setAuthorImg(imageUrl);
      }
    }
  };
  const handleBlogImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        setBlogImg(imageUrl);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      authorName,
      authorImg,
      blogImg,
      publishedDate,
      title,
    };

    try {
      const { data } = await axios.put(
        `${baseApi}/update-blog/${blogId}`,
        blogData
      );
      if (data?.success) {
        toast.success("Blog update successfully");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };
  const updateContent = (constent) => {
    setcontent(constent);
    setcontentOpen(true);
  };
  return (
    <main>
      {contentOpen ? (
        <ContentUpdate content={content} blogId={blogId} />
      ) : (
        <div className="max-w-4xl mx-auto p-4  ">
          <h2 className=" text-2xl font-bodyfont"> Edit Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className=" md:flex w-full gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium ">
                  Author Name
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="border border-gray-500 outline-none bg-bodyColor p-2 w-full rounded"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium ">
                  Published Date
                </label>
                <input
                  type="date"
                  value={publishedDate}
                  onChange={(e) => setPublishedDate(e.target.value)}
                  className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
                  required
                />
              </div>
            </div>

            <div className="md:w-full md:flex gap-4 ">
              <div className="md:w-full">
                <label className="block mb-2 text-sm font-medium ">
                  Author Image
                </label>
                <input
                  type="file"
                  onChange={handleAuthorImageChange}
                  className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
                />
                {/* {imgUploadLoading && <p>Uploading author image...</p>} */}
                {authorImg ? (
                  <img
                    src={authorImg}
                    alt="Author"
                    className="mt-4 w-32 h-32"
                  />
                ) : (
                  <img
                    src={authorImg}
                    alt="Author"
                    className="mt-4 w-32 h-32"
                  />
                )}
              </div>
              <div className="md:w-full">
                <label className="block mb-2 text-sm font-medium ">
                  Blog Image
                </label>
                <input
                  type="file"
                  onChange={handleBlogImageChange}
                  className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
                />
                {/* {imgUploadLoading && <p>Blog img author image...</p>} */}
                {blogImg ? (
                  <img src={blogImg} alt="Author" className="mt-4 w-32 h-32" />
                ) : (
                  <img src={blogImg} alt="Author" className="mt-4 w-32 h-32" />
                )}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium ">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Update Blog
            </button>
            <div className=" flex flex-wrap justify-between">
              {blog?.data?.contentDetails.map((content, index) => (
                <button
                  className=" mt-4 shadow-shadowOne px-3 py-2 border rounded border-gray-500 "
                  key={index}
                  onClick={() => updateContent(content)}
                >
                  EditConstent {index + 1}
                </button>
              ))}
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default Updateblog;
