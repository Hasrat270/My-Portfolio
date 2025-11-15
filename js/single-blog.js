$(document).ready(function() {
    // Blog posts full content
    const blogPosts = {
        1: {
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
        2: {
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
        3: {
            title: "MongoDB Best Practices for MERN Stack Applications",
            excerpt: "Explore MongoDB schema design, indexing strategies, and query optimization techniques.",
            category: "Database",
            tags: ["MongoDB", "Database", "NoSQL"],
            date: "10 Jan, 2025",
            views: "1.8K",
            comments: 8,
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
            content: `<p>Learn best practices for MongoDB in MERN applications.</p>`
        },
        4: {
            title: "Authentication & Authorization in MERN Stack",
            excerpt: "Implement secure user authentication using JWT tokens, bcrypt, and middleware.",
            category: "Security",
            tags: ["JWT", "Authentication", "Security"],
            date: "8 Jan, 2025",
            views: "2.2K",
            comments: 15,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
            content: `<p>Build a complete auth system for your MERN applications.</p>`
        },
        5: {
            title: "Deploying MERN Applications: From Development to Production",
            excerpt: "Complete guide to deploying your MERN stack applications.",
            category: "DevOps",
            tags: ["Deployment", "DevOps", "Production"],
            date: "5 Jan, 2025",
            views: "1.9K",
            comments: 10,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
            content: `<p>Learn deployment strategies for MERN applications.</p>`
        },
        6: {
            title: "State Management in React: Redux vs Context API",
            excerpt: "Compare Redux and Context API for state management.",
            category: "Frontend",
            tags: ["React", "Redux", "State Management"],
            date: "3 Jan, 2025",
            views: "2.7K",
            comments: 22,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
            content: `<p>Understand when to use Redux vs Context API.</p>`
        },
        7: {
            title: "Building Real-time Applications with Socket.io",
            excerpt: "Create real-time features like chat applications and live updates using Socket.io.",
            category: "Backend",
            tags: ["Socket.io", "Real-time", "WebSockets"],
            date: "1 Jan, 2025",
            views: "1.5K",
            comments: 7,
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
            content: `<p>Master Socket.io for real-time applications.</p>`
        },
        8: {
            title: "Testing MERN Applications: Unit, Integration, and E2E Tests",
            excerpt: "Master testing strategies for full-stack applications.",
            category: "Testing",
            tags: ["Testing", "Jest", "Quality Assurance"],
            date: "28 Dec, 2024",
            views: "1.3K",
            comments: 5,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
            content: `<p>Learn comprehensive testing for MERN applications.</p>`
        }
    };

    // Comments storage (using localStorage for persistence)
    const STORAGE_KEY = 'blog_comments';
    
    // Initialize comments storage
    function initializeCommentsStorage() {
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
        }
    }

    // Get comments for current post
    function getPostComments(postId) {
        initializeCommentsStorage();
        const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return allComments[postId] || [];
    }

    // Save comment to localStorage
    function saveComment(postId, comment) {
        initializeCommentsStorage();
        const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!allComments[postId]) {
            allComments[postId] = [];
        }
        comment.id = Date.now();
        comment.timestamp = new Date().toLocaleString();
        comment.replies = [];
        allComments[postId].push(comment);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allComments));
        return comment;
    }

    // Add reply to comment
    function addReplyToComment(postId, commentId, reply) {
        initializeCommentsStorage();
        const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY));
        const comments = allComments[postId];
        if (comments) {
            const comment = comments.find(c => c.id == commentId);
            if (comment) {
                reply.id = Date.now();
                reply.timestamp = new Date().toLocaleString();
                comment.replies.push(reply);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(allComments));
                return reply;
            }
        }
        return null;
    }

    // Render all comments
    function renderComments(postId) {
        const comments = getPostComments(postId);
        const commentsList = $('#commentsList');
        commentsList.empty();

        // Update comment count
        $('#commentsCount').text(comments.length + ' Comment' + (comments.length !== 1 ? 's' : ''));

        comments.forEach(comment => {
            const commentHtml = `
                <div class="comment-list">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex" style="width: 100%;">
                            <div class="thumb">
                                <img src="${getDefaultAvatar(comment.name)}" alt="${comment.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
                            </div>
                            <div class="desc" style="flex: 1; margin-left: 15px;">
                                <h5>${escapeHtml(comment.name)}</h5>
                                <p class="date">${comment.timestamp}</p>
                                <p class="comment">${escapeHtml(comment.message)}</p>
                            </div>
                        </div>
                        <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase" data-comment-id="${comment.id}">Reply</a>
                        </div>
                    </div>
                    
                    <!-- Reply Form -->
                    <div class="reply-form" id="replyForm-${comment.id}" style="display: none; margin-top: 20px; margin-left: 80px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                        <h6>Reply to ${escapeHtml(comment.name)}</h6>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <input type="text" class="form-control reply-name" placeholder="Your Name" style="margin-bottom: 10px;">
                            <textarea class="form-control reply-message" rows="3" placeholder="Your Reply" style="margin-bottom: 10px;"></textarea>
                            <button type="button" class="btn btn-sm btn-primary submit-reply" data-comment-id="${comment.id}" data-post-id="${urlParams.get('id') || 1}">Submit Reply</button>
                            <button type="button" class="btn btn-sm btn-secondary cancel-reply" data-comment-id="${comment.id}" style="margin-left: 5px;">Cancel</button>
                        </div>
                    </div>
                    
                    <!-- Replies -->
                    ${renderReplies(comment.replies, comment.id)}
                </div>
            `;
            commentsList.append(commentHtml);
        });
    }

    // Render replies to a comment
    function renderReplies(replies, commentId) {
        if (!replies || replies.length === 0) return '';

        let repliesHtml = '';
        replies.forEach(reply => {
            repliesHtml += `
                <div class="comment-list left-padding">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex" style="width: 100%;">
                            <div class="thumb">
                                <img src="${getDefaultAvatar(reply.name)}" alt="${reply.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
                            </div>
                            <div class="desc" style="flex: 1; margin-left: 15px;">
                                <h5>${escapeHtml(reply.name)} <small style="color: #888;">(Reply)</small></h5>
                                <p class="date">${reply.timestamp}</p>
                                <p class="comment">${escapeHtml(reply.message)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        return repliesHtml;
    }

    // Get avatar based on name
    function getDefaultAvatar(name) {
        // Using UI Avatars service for random but consistent avatars
        const encoded = encodeURIComponent(name);
        return `https://ui-avatars.com/api/?name=${encoded}&background=random&color=fff&size=60`;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id')) || 1;
    const post = blogPosts[postId] || blogPosts[1];

    // Update page content
    if (post) {
        $('.blog_details h2').text(post.title);
        $('.blog_details .excert').html(post.content);
        $('.feature-img img').attr('src', post.image).attr('alt', post.title);
        $('.blog_info .post_tag').html(
            post.tags.map(tag => `<a href="blog.html" class="active">${tag}</a>`).join(', ')
        );
        $('.blog_meta li:first a').html(`Hasrat Afridi<i class="lnr lnr-user"></i>`);
        $('.blog_meta li:nth-child(2) a').html(`${post.date}<i class="lnr lnr-calendar-full"></i>`);
        $('.blog_meta li:nth-child(3) a').html(`${post.views} Views<i class="lnr lnr-eye"></i>`);
        $('.blog_meta li:nth-child(4) a').html(`${getPostComments(postId).length} Comments<i class="lnr lnr-bubble"></i>`);
    }

    // Update next/previous post links
    function updateNavigationLinks() {
        const postIds = Object.keys(blogPosts).map(Number).sort((a, b) => a - b);
        const currentIndex = postIds.indexOf(postId);

        if (currentIndex > 0) {
            const prevId = postIds[currentIndex - 1];
            const prevPost = blogPosts[prevId];
            $('.prev-post-link').attr('href', `single-blog.html?id=${prevId}`);
            $('#prevPostTitle').text(prevPost.title);
        } else {
            $('.prev-post-link').css('pointer-events', 'none').css('opacity', '0.5');
            $('#prevPostTitle').text('No Previous Post');
        }

        if (currentIndex < postIds.length - 1) {
            const nextId = postIds[currentIndex + 1];
            const nextPost = blogPosts[nextId];
            $('.next-post-link').attr('href', `single-blog.html?id=${nextId}`);
            $('#nextPostTitle').text(nextPost.title);
        } else {
            $('.next-post-link').css('pointer-events', 'none').css('opacity', '0.5');
            $('#nextPostTitle').text('No Next Post');
        }
    }

    // Initial render of comments
    renderComments(postId);
    updateNavigationLinks();

    // Handle comment form submission
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#commentName').val().trim();
        const email = $('#commentEmail').val().trim();
        const message = $('#commentMessage').val().trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        const comment = {
            name: name,
            email: email,
            message: message
        };

        saveComment(postId, comment);
        renderComments(postId);

        // Reset form
        this.reset();
        
        // Scroll to comments
        $('html, body').animate({ scrollTop: $('#commentsCount').offset().top - 100 }, 500);
    });

    // Handle reply button click
    $(document).on('click', '.btn-reply', function(e) {
        e.preventDefault();
        const commentId = $(this).data('comment-id');
        $(`#replyForm-${commentId}`).toggle();
    });

    // Handle cancel reply
    $(document).on('click', '.cancel-reply', function() {
        const commentId = $(this).data('comment-id');
        $(`#replyForm-${commentId}`).hide();
    });

    // Handle submit reply
    $(document).on('click', '.submit-reply', function() {
        const commentId = $(this).data('comment-id');
        const currentPostId = $(this).data('post-id');
        const name = $(`#replyForm-${commentId} .reply-name`).val().trim();
        const message = $(`#replyForm-${commentId} .reply-message`).val().trim();

        if (!name || !message) {
            alert('Please fill in all fields');
            return;
        }

        const reply = {
            name: name,
            message: message
        };

        addReplyToComment(currentPostId, commentId, reply);
        renderComments(currentPostId);
        $(`#replyForm-${commentId}`).hide();
    });
});

