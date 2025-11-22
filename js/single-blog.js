$(document).ready(function() {
    // Use centralized blog data
    const blogPostsArray = getAllBlogPosts();
    const blogPosts = {};
    blogPostsArray.forEach(post => {
        blogPosts[post.id] = post;
    });

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

