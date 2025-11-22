/**
 * Blog Posts Data
 * Centralized data source for all blog posts
 * Used by blog.js (listing) and single-blog.js (detail view)
 */

const BLOG_POSTS = [
    {
        id: 1,
        title: "Building Scalable REST APIs with Node.js and Express",
        excerpt: "Learn how to create robust, scalable REST APIs using Node.js and Express.js. Discover best practices for routing, middleware, error handling, and API security that will impress potential employers.",
        category: "Backend",
        tags: ["Node.js", "Express", "API", "Backend"],
        date: "15 Jan, 2025",
        views: "2.5K",
        comments: 12,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        content: `
            <p class="excert">
                Building scalable REST APIs is a crucial skill for any MERN stack developer. In this comprehensive guide, 
                I'll walk you through creating production-ready APIs that demonstrate your expertise to potential employers.
            </p>
            <p>
                REST (Representational State Transfer) APIs have become the standard for web services. As a MERN stack 
                developer, understanding how to design and implement scalable APIs is essential. This article covers everything 
                from basic routing to advanced patterns that showcase your technical depth.
            </p>
            <p>
                We'll explore Express.js middleware, error handling strategies, request validation, and security best practices. 
                These skills directly translate to real-world projects and demonstrate your ability to build maintainable, 
                production-grade applications.
            </p>
            <div class="quotes">
                "A well-designed API is like a good conversation - clear, consistent, and easy to follow. It should make 
                the developer's job easier, not harder."
            </div>
            <div class="row">
                <div class="col-6">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" alt="Node.js API">
                </div>
                <div class="col-6">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop" alt="Express.js">
                </div>
                <div class="col-lg-12 mt-25">
                    <h4>Key Takeaways:</h4>
                    <ul>
                        <li>Demonstrate understanding of RESTful principles and HTTP methods</li>
                        <li>Show knowledge of middleware and request handling patterns</li>
                        <li>Implement proper error handling and input validation</li>
                        <li>Understand security considerations (CORS, authentication, rate limiting)</li>
                        <li>Write clean, maintainable code that scales with your application</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "Mastering React Hooks: useState, useEffect, and Custom Hooks",
        excerpt: "Deep dive into React Hooks - the modern way to manage state and side effects in functional components. Perfect your React skills with practical examples and real-world use cases.",
        category: "Frontend",
        tags: ["React", "JavaScript", "Frontend", "Hooks"],
        date: "12 Jan, 2025",
        views: "3.1K",
        comments: 18,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        content: `
            <p class="excert">
                React Hooks revolutionized how we write React components. Understanding hooks deeply is essential for 
                modern frontend development and will significantly strengthen your portfolio.
            </p>
            <p>
                Hooks allow you to use state and other React features in functional components, making your code more 
                reusable and easier to understand. This article covers useState, useEffect, useContext, and custom hooks 
                with real-world examples.
            </p>
            <p>
                We'll build practical examples that you can showcase in interviews, demonstrating your ability to write 
                clean, efficient React code that follows best practices.
            </p>
        `
    },
    {
        id: 3,
        title: "MongoDB Best Practices for MERN Stack Applications",
        excerpt: "Explore MongoDB schema design, indexing strategies, and query optimization techniques. Learn how to build efficient database structures that scale with your application.",
        category: "Database",
        tags: ["MongoDB", "Database", "NoSQL", "Backend"],
        date: "10 Jan, 2025",
        views: "1.8K",
        comments: 8,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        content: `<p>Learn best practices for MongoDB in MERN applications.</p>`
    },
    {
        id: 4,
        title: "Authentication & Authorization in MERN Stack",
        excerpt: "Implement secure user authentication using JWT tokens, bcrypt, and middleware. Build a complete auth system that protects your applications and demonstrates security expertise.",
        category: "Security",
        tags: ["JWT", "Authentication", "Security", "Backend"],
        date: "8 Jan, 2025",
        views: "2.2K",
        comments: 15,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
        content: `<p>Build a complete auth system for your MERN applications.</p>`
    },
    {
        id: 5,
        title: "Deploying MERN Applications: From Development to Production",
        excerpt: "Complete guide to deploying your MERN stack applications. Learn about environment variables, build processes, hosting options, and CI/CD pipelines that employers value.",
        category: "DevOps",
        tags: ["Deployment", "DevOps", "Production", "MERN"],
        date: "5 Jan, 2025",
        views: "1.9K",
        comments: 10,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        content: `<p>Learn deployment strategies for MERN applications.</p>`
    },
    {
        id: 6,
        title: "State Management in React: Redux vs Context API",
        excerpt: "Compare Redux and Context API for state management. Understand when to use each approach and how to make architectural decisions that showcase your technical judgment.",
        category: "Frontend",
        tags: ["React", "Redux", "State Management", "Frontend"],
        date: "3 Jan, 2025",
        views: "2.7K",
        comments: 22,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        content: `<p>Understand when to use Redux vs Context API.</p>`
    },
    {
        id: 7,
        title: "Building Real-time Applications with Socket.io",
        excerpt: "Create real-time features like chat applications and live updates using Socket.io. Add this valuable skill to your portfolio and stand out in job interviews.",
        category: "Backend",
        tags: ["Socket.io", "Real-time", "WebSockets", "Backend"],
        date: "1 Jan, 2025",
        views: "1.5K",
        comments: 7,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        content: `<p>Master Socket.io for real-time applications.</p>`
    },
    {
        id: 8,
        title: "Testing MERN Applications: Unit, Integration, and E2E Tests",
        excerpt: "Master testing strategies for full-stack applications. Learn Jest, Supertest, and Cypress to write comprehensive tests that demonstrate quality-focused development.",
        category: "Testing",
        tags: ["Testing", "Jest", "Quality Assurance", "MERN"],
        date: "28 Dec, 2024",
        views: "1.3K",
        comments: 5,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        content: `<p>Learn comprehensive testing for MERN applications.</p>`
    }
];

/**
 * Get all blog posts
 * @returns {Array} Array of all blog posts
 */
function getAllBlogPosts() {
    return BLOG_POSTS;
}

/**
 * Get a single blog post by ID
 * @param {number} postId - ID of the blog post
 * @returns {Object|null} Blog post object or null if not found
 */
function getBlogPostById(postId) {
    return BLOG_POSTS.find(post => post.id === parseInt(postId)) || null;
}

/**
 * Get blog posts by category
 * @param {string} category - Category name
 * @returns {Array} Array of blog posts in the category
 */
function getBlogPostsByCategory(category) {
    return BLOG_POSTS.filter(post => post.category === category);
}

/**
 * Search blog posts
 * @param {string} searchTerm - Search term
 * @returns {Array} Array of matching blog posts
 */
function searchBlogPosts(searchTerm) {
    const term = searchTerm.toLowerCase();
    return BLOG_POSTS.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
    );
}

/**
 * Get unique categories from all blog posts
 * @returns {Array} Array of unique category names
 */
function getBlogCategories() {
    const categories = [...new Set(BLOG_POSTS.map(post => post.category))];
    return ['All', ...categories];
}
