const PROJECTS = [
  // --- 1. React Movie Discovery App (Remains React) ---
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
    detailedDescription: `
      <p>This is a robust movie discovery tool built with React 18. It interacts with the TMDB API to fetch real-time data about movies, TV shows, and actors.</p>
      <p><strong>Key Technical Features:</strong></p>
      <ul>
        <li>State management using React Hooks (useState, useEffect).</li>
        <li>Custom hooks for fetching data to ensure clean code architecture.</li>
        <li>Dynamic routing using React Router for individual movie detail pages.</li>
      </ul>
    `,
  },

  // --- 2. Sruthi (UI/UX Portfolio) - Vanilla JS ---
  {
    id: "project2",
    title: "Sruthi - UI/UX Design Portfolio",
    description:
      "A clean, user-centric portfolio designed for Sruthi. Built with semantic HTML and Vanilla JavaScript to ensure maximum accessibility and fast load times without heavy frameworks.",
    image: "assets/img/works/uiux.png",
    client: "Sruthi",
    date: "January 10, 2024",
    website: "https://uiux-portfolio-hasrat.netlify.app/",
    category: "UI/UX Design, Web Design",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Flexbox"],
    features: [
      "Clean Minimalist Interface",
      "Native DOM Manipulation",
      "Mobile-First Responsiveness",
      "Interactive Case Studies",
    ],
    rating: 5,
    detailedDescription: `
      <p>This portfolio is a testament to "less is more." Built for Sruthi, a UI/UX designer, the site prioritizes the content—her designs—over complex code structures.</p>
      <p><strong>Technical Implementation:</strong></p>
      <p>The site uses <strong>Vanilla JavaScript</strong> to handle the navigation toggles and smooth scrolling effects. By avoiding libraries like jQuery or React, the site achieves a perfect 100 Lighthouse performance score.</p>
      <ul>
        <li><strong>HTML5:</strong> Semantic structure for SEO and Accessibility.</li>
        <li><strong>CSS3:</strong> Custom flexbox layouts and media queries for a fully responsive experience.</li>
        <li><strong>JavaScript:</strong> Lightweight scripts for modal popups and form validation.</li>
      </ul>
    `,
  },

  // --- 3. Brandon (Creative Studio) - Vanilla JS ---
  {
    id: "project3",
    title: "Brandon - Creative Studio",
    description:
      "A high-impact creative portfolio for Brandon. This project utilizes pure JavaScript to drive scroll interactions and animations, avoiding the overhead of dependencies.",
    image: "assets/img/works/brandon.png",
    client: "Brandon",
    date: "February 14, 2024",
    website: "https://brandon-portfolio-hasrat.netlify.app/",
    category: "Branding, Creative Direction",
    technologies: ["HTML5", "CSS3 Animation", "Vanilla JavaScript", "ES6+"],
    features: [
      "Smooth Scroll Animations",
      "Dark Mode Aesthetic",
      "Custom JS Carousel",
      "Animated Typography",
    ],
    rating: 5,
    detailedDescription: `
      <p>Brandon's portfolio is designed to make a bold statement. It features a dark, modern aesthetic that allows colorful branding projects to pop off the screen.</p>
      <p><strong>Built with Vanilla JS:</strong></p>
      <p>Instead of using heavy animation libraries, we utilized modern <strong>CSS3 transitions</strong> and <strong>Vanilla JavaScript Intersection Observers</strong> to trigger animations as the user scrolls down the page.</p>
      <ul>
        <li>Custom cursor effects implemented with JS events.</li>
        <li>A bespoke image slider built from scratch without plugins.</li>
        <li>Sticky navigation header that transforms on scroll.</li>
      </ul>
    `,
  },

  // --- 4. Luther (Personal Identity) - Vanilla JS ---
  {
    id: "project4",
    title: "Luther - Personal Identity Site",
    description:
      "A professional digital identity for Luther. Built on a solid foundation of Vanilla JS and Bootstrap, serving as a performant, responsive, and reliable business card.",
    image: "assets/img/works/luther.png",
    client: "Luther",
    date: "March 05, 2024",
    website: "https://luther-portfolio-hasrat.netlify.app/",
    category: "Web Development, Personal Brand",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Bootstrap Grid"],
    features: [
      "Professional Bio Section",
      "JS Form Validation",
      "Contact Section",
      "Downloadable Resume",
    ],
    rating: 4,
    detailedDescription: `
      <p>Luther's site is the definition of professional web development. It serves as a central hub for his resume, skills, and contact information.</p>
      <p><strong>Architecture:</strong></p>
      <p>The project leverages the <strong>Bootstrap</strong> grid system for layout stability but relies entirely on <strong>Vanilla JavaScript</strong> for logic. This ensures the site loads instantly on mobile networks.</p>
      <ul>
        <li><strong>Form Handling:</strong> The contact form uses native JS to validate email inputs before submission.</li>
        <li><strong>Dark/Light Mode:</strong> A toggle switch implemented with JS local storage to remember user preference.</li>
      </ul>
    `,
  },

  // --- 5. Meyawo (Digital Resume) - Vanilla JS ---
  {
    id: "project5",
    title: "Meyawo - Digital Resume",
    description:
      "A sleek digital resume for Meyawo. This single-page application relies on Vanilla JavaScript for smooth scrolling navigation and dynamic content rendering.",
    image: "assets/img/works/meyawo.png",
    client: "Meyawo",
    date: "April 22, 2024",
    website: "https://meyawo-portfolio-hasrat.netlify.app/",
    category: "Frontend Development, Resume",
    technologies: ["HTML5", "SCSS/CSS", "Vanilla JavaScript"],
    features: [
      "One-Page Scroll Navigation",
      "Testimonials Slider",
      "Service Pricing Tables",
      "Sticky Navigation Bar",
    ],
    rating: 5,
    detailedDescription: `
      <p>Meyawo is a specialized template for developers. It condenses a full career history into a single, beautiful page.</p>
      <p><strong>Why Vanilla JS?</strong></p>
      <p>To keep the resume accessible to everyone, everywhere. The site features:</p>
      <ul>
        <li><strong>ScrollSpy Navigation:</strong> Custom JS logic highlights the active menu link as you scroll through sections.</li>
        <li><strong>Dynamic Copyright:</strong> A simple script to auto-update the year in the footer.</li>
        <li><strong>Interactive Testimonials:</strong> A touch-friendly slider built with vanilla JS touch events.</li>
      </ul>
    `,
  },

  // --- 6. Jony (Videographer) - Vanilla JS ---
  {
    id: "project6",
    title: "Jony's Lens Portfolio",
    description:
      "A videography showcase for Jony. Engineered with Vanilla JavaScript to manage high-quality video backgrounds and custom media galleries efficiently.",
    image: "assets/img/works/creativedirector.png",
    client: "Jony",
    date: "May 18, 2024",
    website: "https://creative-portfolio-hasrat.netlify.app/",
    category: "Videography, Photography",
    technologies: ["HTML5 Video", "CSS Grid", "Vanilla JavaScript"],
    features: [
      "Full-Screen Video Background",
      "Custom JS Lightbox",
      "Masonry Photo Grid",
      "Fast Asset Loading",
    ],
    rating: 5,
    detailedDescription: `
      <p>Video portfolios are heavy by nature, but Jony's site remains fast. It uses <strong>HTML5 Video</strong> tags controlled by <strong>Vanilla JavaScript</strong> to ensure videos play only when visible.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li><strong>Custom Lightbox:</strong> A lightweight script that opens images/videos in a modal overlay without needing external plugins.</li>
        <li><strong>Masonry Layout:</strong> CSS Grid combined with JS calculations to create a Pinterest-style layout for photography.</li>
        <li><strong>Lazy Loading:</strong> Native JS Intersection Observer API loads assets only as the user scrolls to them.</li>
      </ul>
    `,
  },
  // --- 7. Jony (Videographer) - Vanilla JS ---

  {
    id: "project7",
    title: "Videography Portfolio",
    description:
      "A videography showcase for Jony. Engineered with Vanilla JavaScript to manage high-quality video backgrounds and custom media galleries efficiently.",
    image: "assets/img/works/videographer.png",
    client: "Jony",
    date: "May 18, 2024",
    website: "https://videographer-portfolio-hasrat.netlify.app/",
    category: "Videography, Photography",
    technologies: ["HTML5 Video", "CSS Grid", "Vanilla JavaScript"],
    features: [
      "Full-Screen Video Background",
      "Custom JS Lightbox",
      "Masonry Photo Grid",
      "Fast Asset Loading",
    ],
    rating: 5,
    detailedDescription: `
      <p>Video portfolios are heavy by nature, but Jony's site remains fast. It uses <strong>HTML5 Video</strong> tags controlled by <strong>Vanilla JavaScript</strong> to ensure videos play only when visible.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li><strong>Custom Lightbox:</strong> A lightweight script that opens images/videos in a modal overlay without needing external plugins.</li>
        <li><strong>Masonry Layout:</strong> CSS Grid combined with JS calculations to create a Pinterest-style layout for photography.</li>
        <li><strong>Lazy Loading:</strong> Native JS Intersection Observer API loads assets only as the user scrolls to them.</li>
      </ul>
    `,
  },
];

/**
 * Get a project by its ID
 * @param {string} id - Project ID
 * @returns {object|null} Project object or null if not found
 */
export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id) || null;
}

/**
 * Get all projects
 * @returns {array} Array of all projects
 */
export function getAllProjects() {
  return PROJECTS;
}
