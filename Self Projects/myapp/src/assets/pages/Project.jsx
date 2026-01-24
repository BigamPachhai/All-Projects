import React from "react";
import {projects} from "../components/asstes";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects:
          </p>
        </div>
      
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      {/* View More Projects Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:scale-105">View More Projects</button>
      </div></div>
    </section>
  );
};

export default Project;
