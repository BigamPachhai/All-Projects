const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project2.jpg",
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project2",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "/images/project3.jpg",
    technologies: ["React", "API Integration", "Chart.js", "Leaflet"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project3",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
    image: "/images/project4.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project4",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A social media platform with real-time messaging, post sharing, and user interaction features.",
    image: "/images/project5.jpg",
    technologies: ["React", "Socket.io", "PostgreSQL", "Redis"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project5",
    featured: false,
  },
  {
    id: 6,
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool with multiple templates and customization options.",
    image: "/images/project6.jpg",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project6",
    featured: false,
  },
];

const skills = [
    { 
      name: 'React', 
      icon: '⚛️', 
      level: 85, 
      levelText: 'Advanced',
      category: 'Frontend',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      name: 'JavaScript', 
      icon: '🟨', 
      level: 90, 
      levelText: 'Expert',
      category: 'Frontend',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    { 
      name: 'TypeScript', 
      icon: '🔷', 
      level: 80, 
      levelText: 'Advanced',
      category: 'Frontend',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      name: 'Tailwind CSS', 
      icon: '🎨', 
      level: 95, 
      levelText: 'Expert',
      category: 'Frontend',
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    { 
      name: 'Node.js', 
      icon: '🟢', 
      level: 75, 
      levelText: 'Intermediate',
      category: 'Backend',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    { 
      name: 'Python', 
      icon: '🐍', 
      level: 70, 
      levelText: 'Intermediate',
      category: 'Backend',
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      level: 65, 
      levelText: 'Intermediate',
      category: 'Database',
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    { 
      name: 'Git', 
      icon: '📚', 
      level: 85, 
      levelText: 'Advanced',
      category: 'Tools',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    { 
      name: 'AWS', 
      icon: '☁️', 
      level: 60, 
      levelText: 'Intermediate',
      category: 'DevOps',
      color: 'from-orange-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    { 
      name: 'Docker', 
      icon: '🐳', 
      level: 55, 
      levelText: 'Beginner',
      category: 'DevOps',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    { 
      name: 'Next.js', 
      icon: '▲', 
      level: 80, 
      levelText: 'Advanced',
      category: 'Frontend',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    { 
      name: 'GraphQL', 
      icon: '📊', 
      level: 70, 
      levelText: 'Intermediate',
      category: 'Backend',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

export { projects, skills };
