import React, { useEffect, useRef } from "react";

const SkillCard = ({ skill, index, getLevelColor }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${skill.level}%`;
      }
    }, index * 100);

    return () => {
      clearTimeout(timer);
    };
  }, [skill.level, index]);

  return (
    <div>
      {/* Icon and Basic Info */}
      <div>
        <div>{skill.icon}</div>
        <h3>{skill.name}</h3>
        <span>{skill.levelText}</span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Proficiency</span>
          <span className="text-sm font-semibold text-gray-700">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            ref={progressBarRef}
            className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-in-out`}
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

      {/* Category Badge */}
      <div>
        <span>{skill.category}</span>
      </div>
    </div>
  );
};

export default SkillCard;
