/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useState } from "react";
import { baseApi, CLIENT_API_KEY } from "../../../config";
import { toast } from "sonner";

const ContentUpdate = ({ content, blogId }) => {
  const [contentTitle, setContentTitle] = useState(content?.contentTitle);
  const [contentImg, setContentImg] = useState(content?.contentImg);
  const [contentDescription, setContentDescription] = useState(
    content?.contentDescription
  );
  const [imgUploadLoading, setImgUploadLoading] = useState(false);

  const handleImageUpload = async (imageFile) => {
    setImgUploadLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`,
        formData
      );
      setImgUploadLoading(false);
      return res.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      setImgUploadLoading(false);
      toast.error("Failed to upload image.");
      return null;
    }
  };

  const handleDescriptionEditorChange = (content) => {
    setContentDescription(content);
  };

  const handleContentTitleEditorChange = (content) => {
    setContentTitle(content);
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

  const handleUpdateContentDetail = async (contentId) => {
    const blogData = {
      contentTitle,
      contentImg,
      contentDescription,
    };

    try {
      const { data } = await axios.put(
        `${baseApi}/update-blog/${blogId}/${contentId}`,
        blogData
      );
      if (data?.success) {
        toast.success("Blog updated successfully");
      } else {
        toast.error("Failed to update blog content.");
      }
    } catch (error) {
      console.error("Error updating blog content:", error);
      toast.error("An error occurred while updating.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 ">
      <h3 className="text-xl font-bold mt-8">Update Content Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">
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
          <label className="block mb-2 text-sm font-medium">
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
          <label className="block mb-2 text-sm font-medium">
            Content Description
          </label>
          <Editor
            apiKey="0c045137f3yeeksdlll1a5w8y6iqxwhx1e85yyr88z0iy5yz"
            init={{
              height: 400,
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
          onClick={() => handleUpdateContentDetail(content._id)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Update Content Detail
        </button>
      </div>
    </div>
  );
};

export default ContentUpdate;
