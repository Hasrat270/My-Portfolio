/**
 * Project Details Page Handler
 * Uses ProjectManager to dynamically load project information based on URL parameter
 * Supports both simple and complex projects (like movie app) without separate pages
 */

import { ProjectManager } from './modules/projectManager.js';

/**
 * Initialize project details page
 * Loads project data based on URL parameter
 */
function initializeProjectDetails() {
    const projectManager = new ProjectManager();
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        projectManager.showProjectNotFound();
        return;
    }

    // Load project details using the manager
    const success = projectManager.loadProjectDetails(projectId);

    if (!success) {
        console.warn(`Project with ID "${projectId}" not found`);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeProjectDetails);
