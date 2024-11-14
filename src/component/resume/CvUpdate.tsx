import React, { useState } from "react";
import { toast } from "sonner";

const CvUpdate = () => {
  const [cv, setCv] = useState(""); // Example input field for email
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleUpdateCV = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/update-cv/6734a40dd4264c1eb95433a9",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cv: cv }), // Sending name and email as body data
        }
      );

      if (!response.ok) {
        toast.message("cv update done ! ");
      }

      const data = await response.json();
      setResponseMessage(data.message || "CV updated successfully!");
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
