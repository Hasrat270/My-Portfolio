$(document).ready(function() {
    // Use centralized blog data from blog-posts.js
    const blogPosts = getAllBlogPosts();

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

