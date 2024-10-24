/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SkillaInline = ({ skill, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);
  return (
    <div className="my-8 w-full">
      <div>
        <p className="text-sm uppercase font-medium">{skill}</p>
        <span className="w-full h-3  bg-white bg-opacity-80  inline-flex rounded-md mt-2">
          <span
            className=" w-11/12  h-full bg-gradient-to-r from-blue-600 via-pink-500  to-purple-500 rounded-md relative"
            style={{
              width: `${progress}%`,
              transition: "width 0.2s ease-in-out",
            }}
          >
            <span className=" absolute -top-7 right-0">{progress}%</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SkillaInline;
