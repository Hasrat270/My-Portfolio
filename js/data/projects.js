const PROJECTS = [
  {
    id: "project1",
    title: "React Movie Discovery App",
    description:
      "A modern React-based movie discovery web application that allows users to explore, search, and discover millions of movies effortlessly...",
    image: "assets/img/works/react_1.png",
    client: "Portfolio Project",
    date: "August 17, 2018",
    website: "https://hasrat-portfolio.netlify.app",
    category: "Web Development, React",
    technologies: [
      "React.js",
      "TMDB API",
      "CSS3",
      "Styled Components",
      "React Hooks",
    ],
    features: [
      "Smart Movie Search from millions of titles",
      "Debounced Search Input for performance",
      "Trending Movies Section",
      "Movie Rankings and ratings",
      "Responsive Design",
      "Fast and Dynamic UI",
    ],
    rating: 5,
    github: "https://github.com/Hasrat270",
    detailedDescription: `... your full long HTML description ...`,
  },

  {
    id: "project2",
    title: "2D Vinyl Design - Project 1",
    description:
      "This is a detailed description for Project 1. It showcases innovative 2D vinyl design techniques and client collaboration.",
    image: "assets/img/works/work1.jpg",
    client: "Client A",
    date: "January 1, 2023",
    website: "http://project1.com",
    category: "Branding, Web Design",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Custom Design", "Print Ready"],
  },

  {
    id: "project3",
    title: "2D Vinyl Design - Project 2",
    description:
      "This is a detailed description for Project 2. Focusing on creative work and brand identity.",
    image: "assets/img/works/work2.jpg",
    client: "Client B",
    date: "February 15, 2023",
    website: "http://project2.com",
    category: "Branding, Creative Work",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Brand Identity", "Creative Work"],
  },

  {
    id: "project4",
    title: "2D Vinyl Design - Project 3",
    description:
      "This is a detailed description for Project 3. An example of a unique creative work.",
    image: "assets/img/works/work3.jpg",
    client: "Client C",
    date: "March 10, 2023",
    website: "http://project3.com",
    category: "Creative Work",
    technologies: ["Illustrator"],
    features: ["Unique Design"],
  },

  {
    id: "project5",
    title: "2D Vinyl Design - Project 4",
    description:
      "This is a detailed description for Project 4. A branding and creative work project.",
    image: "assets/img/works/work5.jpg",
    client: "Client D",
    date: "April 5, 2023",
    website: "http://project4.com",
    category: "Branding, Creative Work",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Branding", "Creative Work"],
  },

  {
    id: "project6",
    title: "2D Vinyl Design - Project 5",
    description:
      "This is a detailed description for Project 5. A web design and branding project.",
    image: "assets/img/works/work4.jpg",
    client: "Client E",
    date: "May 20, 2023",
    website: "http://project5.com",
    category: "Branding, Web Design",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Web Design", "Branding"],
  },

  {
    id: "project7",
    title: "2D Vinyl Design - Project 6",
    description:
      "This is a detailed description for Project 6. A comprehensive branding, creative work, and web design project.",
    image: "assets/img/works/work8.jpg",
    client: "Client F",
    date: "June 1, 2023",
    website: "http://project6.com",
    category: "Branding, Creative Work, Web Design",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Branding", "Creative Work", "Web Design"],
  },

  {
    id: "project8",
    title: "2D Vinyl Design - Project 7",
    description:
      "This is a detailed description for Project 7. Another branding, creative work, and web design project.",
    image: "assets/img/works/work6.jpg",
    client: "Client G",
    date: "July 12, 2023",
    website: "http://project7.com",
    category: "Branding, Creative Work, Web Design",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Branding", "Creative Work", "Web Design"],
  },

  {
    id: "project9",
    title: "2D Vinyl Design - Project 8",
    description:
      "This is a detailed description for Project 8. A final branding, creative work, and web design project.",
    image: "assets/img/works/work7.jpg",
    client: "Client H",
    date: "August 3, 2023",
    website: "http://project8.com",
    category: "Branding, Creative Work, Web Design",
    technologies: ["Photoshop", "Illustrator"],
    features: ["Branding", "Creative Work", "Web Design"],
  },
];

/**
 * Get a project by its ID
 * @param {string} id - Project ID
 * @returns {object|null} Project object or null if not found
 */
export function getProjectById(id) {
  return PROJECTS.find(project => project.id === id) || null;
}

/**
 * Get all projects
 * @returns {array} Array of all projects
 */
export function getAllProjects() {
  return PROJECTS;
}
