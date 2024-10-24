import { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { baseApi, CLIENT_API_KEY } from "../../../config";
import { toast } from "sonner";

const CreateBlog = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [title, setTitle] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentImg, setContentImg] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [contentDetails, setContentDetails] = useState([]);

  const [imgUploadLoading, setImgUploadLoading] = useState(false);

  const handleDescriptionEditorChange = (content) => {
    setContentDescription(content);
  };
  const handleContentTitleEditorChange = (content) => {
    setContentTitle(content);
  };
  const handleImageUpload = async (imageFile) => {
    setImgUploadLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`,
        formData
      );
      const imageUrl = res.data.data.url;
      setImgUploadLoading(false);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      setImgUploadLoading(false);
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

  const handleContentImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        setContentImg(imageUrl);
      }
    }
  };

  const handleAddContentDetail = () => {
    setContentDetails([
      ...contentDetails,
      { contentTitle, contentImg, contentDescription },
    ]);
    setContentTitle("");
    setContentImg("");
    setContentDescription("");
    toast.success("content add successfully !");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      authorName,
      authorImg,
      blogImg,
      publishedDate,
      title,

      contentDetails,
    };

    try {
      const { data } = await axios.post(`${baseApi}/create-blog`, blogData);
      if (data?.success) {
        toast.success("Blog created successfully");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto  ">
      <h2 className=" text-2xl font-bodyfont">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <div>
          <label className="block mb-2 text-sm font-medium ">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="border border-gray-500 outline-none bg-bodyColor p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium ">
            Author Image
          </label>
          <input
            type="file"
            onChange={handleAuthorImageChange}
            className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
          />
          {imgUploadLoading && <p>Uploading author image...</p>}
          {authorImg && (
            <img src={authorImg} alt="Author" className="mt-4 w-32 h-32" />
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium ">Blog Image</label>
          <input
            type="file"
            onChange={handleBlogImageChange}
            className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
          />
          {imgUploadLoading && <p>Blog img author image...</p>}
          {blogImg && (
            <img src={blogImg} alt="Author" className="mt-4 w-32 h-32" />
          )}
        </div>

        <div>
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

        <h3 className="text-xl font-bold mt-8">Add Content Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium ">
              Content Title
            </label>
            <Editor
              apiKey="0c045137f3yeeksdlll1a5w8y6iqxwhx1e85yyr88z0iy5yz"
              init={{
                height: 150,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | help",
              }}
              value={contentTitle}
              onEditorChange={handleContentTitleEditorChange}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium ">
              Content Image
            </label>
            <input
              type="file"
              onChange={handleContentImageChange}
              className="border border-gray-500 bg-bodyColor p-2 w-full rounded"
            />
            {imgUploadLoading && <p>Uploading content image...</p>}
            {contentImg && (
              <img src={contentImg} alt="Content" className="mt-4 w-32 h-32" />
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium ">
              Content Description
            </label>
            <Editor
              apiKey="0c045137f3yeeksdlll1a5w8y6iqxwhx1e85yyr88z0iy5yz"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | help",

                body_class: "custom-editor",
              }}
              value={contentDescription}
              onEditorChange={handleDescriptionEditorChange}
            />
          </div>

          <button
            type="button"
            onClick={handleAddContentDetail}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Content Detail ( {contentDetails.length} )
          </button>
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
