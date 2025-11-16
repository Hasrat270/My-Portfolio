/**
 * Project Details Handler
 * Dynamically loads project information based on URL parameter
 */

// Project data configuration
const PROJECT_DATA = {
        project1: {
            title: '2D Vinyl Design - Project 1',
            description: 'This is a detailed description for Project 1. It showcases innovative 2D vinyl design techniques and client collaboration.',
            image: 'img/works/work1.jpg',
            client: 'Client A',
            date: 'January 1, 2023',
            website: 'http://project1.com',
            category: 'Branding, Web Design'
        },
        project2: {
            title: '2D Vinyl Design - Project 2',
            description: 'This is a detailed description for Project 2. Focusing on creative work and brand identity.',
            image: 'img/works/work2.jpg',
            client: 'Client B',
            date: 'February 15, 2023',
            website: 'http://project2.com',
            category: 'Branding, Creative Work'
        },
        project3: {
            title: '2D Vinyl Design - Project 3',
            description: 'This is a detailed description for Project 3. An example of a unique creative work.',
            image: 'img/works/work3.jpg',
            client: 'Client C',
            date: 'March 10, 2023',
            website: 'http://project3.com',
            category: 'Creative Work'
        },
        project4: {
            title: '2D Vinyl Design - Project 4',
            description: 'This is a detailed description for Project 4. A branding and creative work project.',
            image: 'img/works/work5.jpg',
            client: 'Client D',
            date: 'April 5, 2023',
            website: 'http://project4.com',
            category: 'Branding, Creative Work'
        },
        project5: {
            title: '2D Vinyl Design - Project 5',
            description: 'This is a detailed description for Project 5. A web design and branding project.',
            image: 'img/works/work4.jpg',
            client: 'Client E',
            date: 'May 20, 2023',
            website: 'http://project5.com',
            category: 'Branding, Web Design'
        },
        project6: {
            title: '2D Vinyl Design - Project 6',
            description: 'This is a detailed description for Project 6. A comprehensive branding, creative work, and web design project.',
            image: 'img/works/work8.jpg',
            client: 'Client F',
            date: 'June 1, 2023',
            website: 'http://project6.com',
            category: 'Branding, Creative Work, Web Design'
        },
        project7: {
            title: '2D Vinyl Design - Project 7',
            description: 'This is a detailed description for Project 7. Another branding, creative work, and web design project.',
            image: 'img/works/work6.jpg',
            client: 'Client G',
            date: 'July 12, 2023',
            website: 'http://project7.com',
            category: 'Branding, Creative Work, Web Design'
        },
        project8: {
            title: '2D Vinyl Design - Project 8',
            description: 'This is a detailed description for Project 8. A final branding, creative work, and web design project.',
            image: 'img/works/work7.jpg',
            client: 'Client H',
            date: 'August 3, 2023',
            website: 'http://project8.com',
            category: 'Branding, Creative Work, Web Design'
        }
};

/**
 * Safely update element content
 */
function updateElement(id, content, isHref = false) {
    const element = document.getElementById(id);
    if (element) {
        if (isHref) {
            element.href = content;
        } else {
            element.textContent = content;
        }
    }
}

/**
 * Clean URL for display (remove protocol)
 */
function cleanUrl(url) {
    return url.replace(/(^\w+:|^)\/\//, '');
}

/**
 * Load project details
 */
function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = PROJECT_DATA[projectId];

    if (project) {
        updateElement('project-title-banner', project.title);
        updateElement('project-title', project.title);
        updateElement('project-description', project.description);
        updateElement('project-client', project.client);
        updateElement('project-date', project.date);
        updateElement('project-category', project.category);
        updateElement('project-website', cleanUrl(project.website));
        updateElement('project-website', project.website, true);
        
        const imgElement = document.getElementById('project-image');
        if (imgElement) {
            imgElement.src = project.image;
            imgElement.alt = project.title;
        }
    } else {
        showProjectNotFound();
    }
}

/**
 * Show project not found message
 */
function showProjectNotFound() {
    updateElement('project-title-banner', 'Project Not Found');
    updateElement('project-title', 'Project Not Found');
    updateElement('project-description', 'The requested project could not be found.');
    updateElement('project-client', 'N/A');
    updateElement('project-date', 'N/A');
    updateElement('project-category', 'N/A');
    updateElement('project-website', 'N/A');
    updateElement('project-website', '#', true);
    
    const imgElement = document.getElementById('project-image');
    if (imgElement) {
        imgElement.src = '';
        imgElement.alt = 'Project not found';
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', loadProjectDetails);
