import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        project.featured ? "ring-2 ring-blue-500" : " "
      } `}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img src={project.image} alt={project.title} />
        <div>
          <div>
            <a href={project.liveLink}>
              <svg>
                <path></path>
              </svg>
            </a>
            <a href={project.githubLink}>
              <svg>
                <path></path>
              </svg>
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="ab">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
