import React, { useEffect, useState } from "react";
import { skills } from "../components/asstes";
import SkillCard from "../components/SkillCard";
const Skills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    setAnimatedSkills(skills);
  }, [skills]);

  const getLevelColor = (levelText) => {
    switch (levelText) {
      case "Expert":
        return "text-green-700 bg-green-100 border-green-200";
      case "Expert":
        return "text-green-700 bg-green-100 border-green-200";
      case "Advanced":
        return "text-blue-700 bg-blue-100 border-blue-200";
      case "Intermediate":
        return "text-yellow-700 bg-yellow-100 border-yellow-200";
      case "Beginner":
        return "text-gray-700 bg-gray-100 border-gray-200";
      default:
        return "text-gray-700 bg-gray-100 border-gray-200";
    }
  };

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-gray-50 to white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technologies I work with and my proficiency level
          </p>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {animatedSkills.map((skill, index) => {
            return (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                getLevelColor={getLevelColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
