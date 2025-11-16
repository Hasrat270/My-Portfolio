/**
 * Projects Data Module
 * Centralized data for all portfolio projects
 * Easy to add new projects by adding objects to PROJECTS array
 */

const PROJECTS = [
    {
        id: 'project1',
        title: '2D Vinyl Design - Project 1',
        description: 'This is a detailed description for Project 1. It showcases innovative 2D vinyl design techniques and client collaboration.',
        image: 'assets/img/works/work1.jpg',
        client: 'Client A',
        date: 'January 1, 2023',
        website: 'http://project1.com',
        category: 'Branding, Web Design',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Custom Design', 'Print Ready']
    },
    {
        id: 'project2',
        title: '2D Vinyl Design - Project 2',
        description: 'This is a detailed description for Project 2. Focusing on creative work and brand identity.',
        image: 'assets/img/works/work2.jpg',
        client: 'Client B',
        date: 'February 15, 2023',
        website: 'http://project2.com',
        category: 'Branding, Creative Work',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Brand Identity', 'Creative Work']
    },
    {
        id: 'project3',
        title: '2D Vinyl Design - Project 3',
        description: 'This is a detailed description for Project 3. An example of a unique creative work.',
        image: 'assets/img/works/work3.jpg',
        client: 'Client C',
        date: 'March 10, 2023',
        website: 'http://project3.com',
        category: 'Creative Work',
        technologies: ['Illustrator'],
        features: ['Unique Design']
    },
    {
        id: 'project4',
        title: '2D Vinyl Design - Project 4',
        description: 'This is a detailed description for Project 4. A branding and creative work project.',
        image: 'assets/img/works/work5.jpg',
        client: 'Client D',
        date: 'April 5, 2023',
        website: 'http://project4.com',
        category: 'Branding, Creative Work',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Branding', 'Creative Work']
    },
    {
        id: 'project5',
        title: '2D Vinyl Design - Project 5',
        description: 'This is a detailed description for Project 5. A web design and branding project.',
        image: 'assets/img/works/work4.jpg',
        client: 'Client E',
        date: 'May 20, 2023',
        website: 'http://project5.com',
        category: 'Branding, Web Design',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Web Design', 'Branding']
    },
    {
        id: 'project6',
        title: '2D Vinyl Design - Project 6',
        description: 'This is a detailed description for Project 6. A comprehensive branding, creative work, and web design project.',
        image: 'assets/img/works/work8.jpg',
        client: 'Client F',
        date: 'June 1, 2023',
        website: 'http://project6.com',
        category: 'Branding, Creative Work, Web Design',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Branding', 'Creative Work', 'Web Design']
    },
    {
        id: 'project7',
        title: '2D Vinyl Design - Project 7',
        description: 'This is a detailed description for Project 7. Another branding, creative work, and web design project.',
        image: 'assets/img/works/work6.jpg',
        client: 'Client G',
        date: 'July 12, 2023',
        website: 'http://project7.com',
        category: 'Branding, Creative Work, Web Design',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Branding', 'Creative Work', 'Web Design']
    },
    {
        id: 'project8',
        title: '2D Vinyl Design - Project 8',
        description: 'This is a detailed description for Project 8. A final branding, creative work, and web design project.',
        image: 'assets/img/works/work7.jpg',
        client: 'Client H',
        date: 'August 3, 2023',
        website: 'http://project8.com',
        category: 'Branding, Creative Work, Web Design',
        technologies: ['Photoshop', 'Illustrator'],
        features: ['Branding', 'Creative Work', 'Web Design']
    },
    {
        id: 'movie-app',
        title: 'React Movie Discovery App',
        description: 'A modern React-based movie discovery web application that allows users to explore, search, and discover millions of movies effortlessly. Built with performance and user experience in mind, it integrates with The Movie Database (TMDB) API to provide real-time movie data, including trending titles, search results, and detailed movie information. The app is designed with a clean, minimal interface and smooth interactions, making movie browsing both enjoyable and efficient.',
        image: 'assets/img/works/react_1.png',
        client: 'Portfolio Project',
        date: 'August 17, 2018',
        website: 'https://hasrat-portfolio.netlify.app',
        category: 'Web Development, React',
        technologies: ['React.js', 'TMDB API', 'CSS3', 'Styled Components', 'React Hooks'],
        features: [
            'Smart Movie Search from millions of titles',
            'Debounced Search Input for performance',
            'Trending Movies Section',
            'Movie Rankings and ratings',
            'Responsive Design',
            'Fast and Dynamic UI'
        ],
        rating: 5,
        github: 'https://github.com/Hasrat270',
        detailedDescription: `
            <h4>🌟 Key Features</h4>
            <h4>🔍 Smart Movie Search:</h4>
            <p>Users can search from millions of movie titles powered by the TMDB API.</p>
            <h4>🚀 Debounced Search Input:</h4>
            <p>Reduces unnecessary API calls and improves performance by fetching data only after the user stops typing.</p>
            <h4>🔥 Trending Movies Section:</h4>
            <p>Displays movies that are trending based on real-time search counts and popularity metrics.</p>
            <h4>🎯 Movie Rankings:</h4>
            <p>Each movie is displayed with clear ratings and key info, helping users quickly gauge quality.</p>
            <h4>💻 Responsive Design:</h4>
            <p>Optimized for all devices — from mobile screens to large desktops.</p>
            <h4>⚡ Fast and Dynamic UI:</h4>
            <p>Built entirely in React, ensuring smooth rendering, dynamic data updates, and component reusability.</p>
            <h4>🧰 Technologies Used</h4>
            <ul>
                <li>Frontend Framework: React.js</li>
                <li>API Source: TMDB (The Movie Database) API</li>
                <li>Styling: CSS3 / Styled Components</li>
                <li>State Management: React Hooks (useState, useEffect)</li>
                <li>Optimization: Debouncing for efficient API requests</li>
                <li>Deployment: Netlify</li>
            </ul>
            <h4>⚙️ How It Works</h4>
            <h4>User Interaction:</h4>
            <p>The user types a movie name in the search bar.</p>
            <h4>Debounced API Request:</h4>
            <p>After a short delay, a TMDB API call is triggered to fetch results.</p>
            <h4>Display Results:</h4>
            <p>Movies matching the query appear instantly with their title, rating, and poster.</p>
            <h4>Trending Section:</h4>
            <p>Popular movies are fetched and updated periodically using the TMDB trending endpoint.</p>
            <h4>🧩 Folder Structure (simplified)</h4>
            <pre>
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── TrendingList.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│
├── hooks/
│   ├── useDebounce.js
│
├── App.js
├── index.js
└── styles/
    ├── App.css
</pre>
            <h4>🚀 Future Enhancements</h4>
            <ul>
                <li>🎞️ Add user authentication and favorites list</li>
                <li>📺 Integrate trailers and cast info</li>
                <li>🌐 Add multi-language support</li>
                <li>📱 Create a PWA version for offline access</li>
            </ul>
            <h4>✨ Conclusion</h4>
            <p>Hasrat Movies offers a simple yet powerful experience for movie enthusiasts. With its seamless integration of TMDB data, efficient debouncing mechanism, and clean React architecture, it stands as a fast, scalable, and user-friendly movie browsing platform.</p>
        `
    }
];

/**
 * Get project by ID
 * @param {string} id - Project ID
 * @returns {object|null} Project object or null if not found
 */
function getProjectById(id) {
    return PROJECTS.find(project => project.id === id) || null;
}

/**
 * Get all projects
 * @returns {array} Array of all projects
 */
function getAllProjects() {
    return PROJECTS;
}

/**
 * Add a new project (for dynamic addition)
 * @param {object} project - New project object
 */
function addProject(project) {
    PROJECTS.push(project);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS, getProjectById, getAllProjects, addProject };
}
