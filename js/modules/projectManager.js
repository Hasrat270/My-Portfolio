/**
 * Project Manager Module
 * Handles project data operations and dynamic content loading
 * Provides a clean API for managing portfolio projects
 */

import { getProjectById, getAllProjects } from "../data/projects.js";

/**
 * Project Manager Class
 * Manages project-related operations
 */
class ProjectManager {
  constructor() {
    this.currentProject = null;
  }

  /**
   * Load project details into the page
   * @param {string} projectId - ID of the project to load
   * @returns {boolean} - True if project loaded successfully, false otherwise
   */
  loadProjectDetails(projectId) {
    const project = getProjectById(projectId);

    if (!project) {
      this.showProjectNotFound();
      return false;
    }

    this.currentProject = project;
    this.updateProjectUI(project);
    return true;
  }

  /**
   * Update the UI with project data
   * @param {object} project - Project data object
   */
  updateProjectUI(project) {
    // Update basic project info
    this.updateElement("project-title-banner", project.title);
    this.updateElement("project-title", project.title);
    this.updateElement("project-description", project.description);
    this.updateElement("project-client", project.client);
    this.updateElement("project-date", project.date);
    this.updateElement("project-category", project.category);

    // Update image
    this.updateImage("project-image", project.image, project.title);

    // Update website link
    this.updateLink("project-website", project.website);

    // Handle special fields for movie app
    if (/^project\d+$/.test(project.id)) {
      this.loadDetailedProjectContent(project);
    }
  }

  /**
   * Load detailed content for complex projects (like movie app)
   * @param {object} project - Project data object
   */
  loadDetailedProjectContent(project) {
    // Update rating if available
    if (project.rating) {
      this.updateRating("project-rating", project.rating);
      this.showElement("project-rating-container");
    }

    // Load detailed description if available
    if (project.detailedDescription) {
      this.updateDetailedDescription(project.detailedDescription);
      this.showElement("project-detailed-content");
    }

    // Update technologies if available
    if (project.technologies) {
      this.updateTechnologies(project.technologies);
    }

    // Update features if available
    if (project.features) {
      this.updateFeatures(project.features);
    }
  }

  /**
   * Update a DOM element's text content safely
   * @param {string} elementId - ID of the element to update
   * @param {string} content - Content to set
   */
  updateElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = content;
    }
  }

  /**
   * Update an image element safely
   * @param {string} elementId - ID of the image element
   * @param {string} src - Image source URL
   * @param {string} alt - Alt text for the image
   */
  updateImage(elementId, src, alt = "") {
    const imgElement = document.getElementById(elementId);
    if (imgElement) {
      imgElement.src = src;
      imgElement.alt = alt;
    }
  }

  /**
   * Update a link element safely
   * @param {string} elementId - ID of the link element
   * @param {string} href - Link URL
   */
  updateLink(elementId, href) {
    const linkElement = document.getElementById(elementId);
    if (linkElement) {
      linkElement.href = href;
      linkElement.textContent = this.cleanUrl(href);
    }
  }

  /**
   * Update rating display
   * @param {string} elementId - ID of the rating container
   * @param {number} rating - Rating value (1-5)
   */
  updateRating(elementId, rating) {
    const container = document.getElementById(elementId);
    if (container) {
      container.innerHTML = this.generateStarRating(rating);
    }
  }

  /**
   * Generate HTML for star rating
   * @param {number} rating - Rating value
   * @returns {string} HTML string for stars
   */
  generateStarRating(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += `<i class="fa fa-star${i < rating ? "" : "-o"}"></i>`;
    }
    return stars;
  }

  /**
   * Update detailed description
   * @param {string} content - HTML content for detailed description
   */
  updateDetailedDescription(content) {
    const detailedElement = document.getElementById("project-detailed-content");
    if (detailedElement) {
      detailedElement.innerHTML = content;
    }
  }

  /**
   * Update technologies list
   * @param {array} technologies - Array of technology strings
   */
  updateTechnologies(technologies) {
    // This could be implemented to show technologies in a specific section
    console.log("Technologies:", technologies);
  }

  /**
   * Update features list
   * @param {array} features - Array of feature strings
   */
  updateFeatures(features) {
    // This could be implemented to show features in a specific section
    console.log("Features:", features);
  }

  /**
   * Clean URL for display (remove protocol)
   * @param {string} url - Full URL
   * @returns {string} Cleaned URL
   */
  cleanUrl(url) {
    return url.replace(/(^\w+:|^)\/\//, "");
  }

  /**
   * Show an element by setting display to block
   * @param {string} elementId - ID of the element to show
   */
  showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
  }

  /**
   * Hide an element by setting display to none
   * @param {string} elementId - ID of the element to hide
   */
  hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "none";
    }
  }

  /**
   * Show project not found message
   */
  showProjectNotFound() {
    this.updateElement("project-title-banner", "Project Not Found");
    this.updateElement("project-title", "Project Not Found");
    this.updateElement(
      "project-description",
      "The requested project could not be found."
    );
    this.updateElement("project-client", "N/A");
    this.updateElement("project-date", "N/A");
    this.updateElement("project-category", "N/A");
    this.updateLink("project-website", "#");
    this.updateImage("project-image", "", "Project not found");
    this.hideElement("project-rating-container");
    this.hideElement("project-detailed-content");
  }

  /**
   * Get current project
   * @returns {object|null} Current project object
   */
  getCurrentProject() {
    return this.currentProject;
  }

  /**
   * Get all projects
   * @returns {array} Array of all projects
   */
  getAllProjects() {
    return getAllProjects();
  }
}

// Export the ProjectManager class for ES6 modules
export { ProjectManager };
