import React, { useState } from "react";
import { toast } from "sonner";
import { baseApi } from "../../../config";
import axios from "axios";

const CvUpdate = () => {
  const [cv, setCv] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleUpdateCV = async () => {
    try {
      const { data: resume } = await axios.get(`${baseApi}/get-resume`);

      const response = await fetch(
        `${baseApi}/update-resume/${resume?.data[0]._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ resume: cv }),
        }
      );

      const data = await response.json();

      if (data?.success) {
        toast?.message("CV updated successfully!");
        setResponseMessage("CV updated successfully!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Update CV</h2>

      <div>
        <label>
          Email:
          <input
            className="w-full border p-2 bg-bodyColor border-gray-500 rounded-md outline-none"
            type="email"
            value={cv}
            onChange={(e) => setCv(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleUpdateCV}>Update </button>

      {responseMessage && <p>{responseMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CvUpdate;
