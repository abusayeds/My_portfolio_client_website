import React, { useEffect, useState } from "react";
import { baseApi } from "../../../config";
import { SiReaddotcv } from "react-icons/si";
import { motion } from "framer-motion";

export const fetchCV = async () => {
  try {
    const response = await fetch(`${baseApi}/get-cv`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.success && data.data.length > 0) {
      return {
        cv: data.data[0].cv,
        updatedAt: data.data[0].updatedAt,
      };
    } else {
      throw new Error(data.message || "Failed to fetch CV");
    }
  } catch (error) {
    console.error("Error fetching CV:", error);
    return null;
  }
};
const data = await fetchCV();
export const cv = data ? data?.cv : null;
const Cv = () => {
  const [cvLink, setCvLink] = useState<string | undefined>(undefined);
  const [lastUpdated, setLastUpdated] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getCvData = async () => {
      const data = await fetchCV();
      if (data) {
        setCvLink(data.cv);
        setLastUpdated(
          new Date(data.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
      }
    };
    getCvData();
  }, []);

  return (
    <motion.div
      className="mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="my-6 font-bold">My Resume</p>
      <div className="mt-6">
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 shadow-shadowOne md:w-80 p-6"
        >
          <div className="flex gap-6">
            <SiReaddotcv className="text-designColor text-3xl" />
            <ul className="flex flex-col gap-1">
              <p className="font-bodyfont">Download CV</p>
              <p className="text-sm">Last Update: {lastUpdated}</p>
            </ul>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Cv;
