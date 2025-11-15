$(document).ready(function() {
    // Blog posts data
    const blogPosts = [
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
            content: "full-content-1"
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
            content: "full-content-2"
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
            content: "full-content-3"
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
            content: "full-content-4"
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
            content: "full-content-5"
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
            content: "full-content-6"
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
            content: "full-content-7"
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
            content: "full-content-8"
        }
    ];

    let currentPage = 1;
    let postsPerPage = 5;
    let filteredPosts = [...blogPosts];
    let currentCategory = 'All';

    // Render blog posts
    function renderPosts(posts, page = 1) {
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const postsToShow = posts.slice(startIndex, endIndex);
        
        const blogContainer = $('.blog_left_sidebar');
        blogContainer.find('.blog_item').remove();
        
        postsToShow.forEach((post, index) => {
            const postHtml = `
                <article class="row blog_item" data-id="${post.id}" data-category="${post.category}">
                    <div class="col-md-3">
                        <div class="blog_info text-right">
                            <div class="post_tag">
                                ${post.tags.map(tag => `<a href="#" class="tag-link" data-tag="${tag}">${tag}</a>`).join(', ')}
                            </div>
                            <ul class="blog_meta list">
                                <li><a href="#">Hasrat Afridi<i class="lnr lnr-user"></i></a></li>
                                <li><a href="#">${post.date}<i class="lnr lnr-calendar-full"></i></a></li>
                                <li><a href="#">${post.views} Views<i class="lnr lnr-eye"></i></a></li>
                                <li><a href="#">${post.comments} Comments<i class="lnr lnr-bubble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="blog_post">
                            <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 250px; object-fit: cover;">
                            <div class="blog_details">
                                <a href="single-blog.html?id=${post.id}">
                                    <h2>${post.title}</h2>
                                </a>
                                <p>${post.excerpt}</p>
                                <a href="single-blog.html?id=${post.id}" class="primary_btn">View More</a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
            blogContainer.append(postHtml);
        });
        
        renderPagination(posts, page);
    }

    // Render pagination
    function renderPagination(posts, currentPageNum) {
        const totalPages = Math.ceil(posts.length / postsPerPage);
        const pagination = $('.blog-pagination .pagination');
        pagination.empty();
        
        // Previous button
        pagination.append(`
            <li class="page-item ${currentPageNum === 1 ? 'disabled' : ''}">
                <a href="#" class="page-link" data-page="${currentPageNum - 1}" aria-label="Previous">
                    <span aria-hidden="true"><span class="lnr lnr-chevron-left"></span></span>
                </a>
            </li>
        `);
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            pagination.append(`
                <li class="page-item ${i === currentPageNum ? 'active' : ''}">
                    <a href="#" class="page-link" data-page="${i}">${String(i).padStart(2, '0')}</a>
                </li>
            `);
        }
        
        // Next button
        pagination.append(`
            <li class="page-item ${currentPageNum === totalPages ? 'disabled' : ''}">
                <a href="#" class="page-link" data-page="${currentPageNum + 1}" aria-label="Next">
                    <span aria-hidden="true"><span class="lnr lnr-chevron-right"></span></span>
                </a>
            </li>
        `);
    }

    // Search functionality
    $('.search_widget input').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        currentPage = 1;
        renderPosts(filteredPosts, currentPage);
    });

    // Category filtering
    $('.category-link').on('click', function(e) {
        e.preventDefault();
        const category = $(this).data('category') || $(this).find('p').first().text();
        currentCategory = category;
        
        if (category === 'All' || category === 'All Categories') {
            filteredPosts = [...blogPosts];
        } else {
            filteredPosts = blogPosts.filter(post => post.category === category);
        }
        
        currentPage = 1;
        renderPosts(filteredPosts, currentPage);
        
        // Update active state
        $('.category-link').removeClass('active');
        $(this).addClass('active');
    });

    // Pagination click handler
    $(document).on('click', '.page-link', function(e) {
        e.preventDefault();
        const page = parseInt($(this).data('page'));
        if (page && page >= 1 && page <= Math.ceil(filteredPosts.length / postsPerPage)) {
            currentPage = page;
            renderPosts(filteredPosts, currentPage);
            $('html, body').animate({ scrollTop: $('.blog_area').offset().top - 100 }, 500);
        }
    });

    // Tag filtering
    $(document).on('click', '.tag-link', function(e) {
        e.preventDefault();
        const tag = $(this).data('tag');
        filteredPosts = blogPosts.filter(post => post.tags.includes(tag));
        currentPage = 1;
        renderPosts(filteredPosts, currentPage);
    });

    // Initial render
    renderPosts(blogPosts, 1);
    
    // Update category counts dynamically
    const categories = ['Frontend', 'Backend', 'Database', 'Security', 'DevOps', 'Testing'];
    categories.forEach(cat => {
        const count = blogPosts.filter(p => p.category === cat).length;
        $(`.category-link[data-category="${cat}"]`).find('p').last().text(count);
    });
    
    // Set "All Categories" as active by default
    $('.category-link[data-category="All"]').addClass('active');
});

