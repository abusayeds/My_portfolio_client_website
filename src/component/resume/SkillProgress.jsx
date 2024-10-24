/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillProgress = ({ skill, percentage }) => {
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
        {/* <p className="text-sm uppercase font-medium">{skill}</p> */}
        <div className="flex items-center gap-4 mt-2 relative">
          <div className="md:w-36 w-28 relative">
            <svg style={{ height: 0 }}>
              <defs>
                <linearGradient id="gradientColors" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#3b82f6" /> 
                  <stop offset="50%" stopColor="#ec4899" /> 
                  <stop offset="100%" stopColor="#8b5cf6" /> 
                </linearGradient>
              </defs>
            </svg>
            <CircularProgressbarWithChildren
              value={progress}
              styles={buildStyles({
                pathColor: 'url(#gradientColors)',
              
              })}
            >
              <div className="flex flex-col items-center justify-center h-full">
               
                <div style={{ fontSize: 16, marginTop: 5, }}>
                  <strong>{progress}%</strong>
                </div>
                <div style={{ fontSize: 12, marginTop: -3,  }}>
                  <strong>{skill}</strong>
                </div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
