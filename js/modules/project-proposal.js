/**
 * Project Proposal Form Handler
 * Manages form submissions, stores locally, and sends email notifications
 */

// Configuration
const CONFIG = {
    recipientEmail: 'Hasrat3701@gmail.com',
    storageKey: 'project_proposals',
    successMessageDuration: 5000,
    mailtoDelay: 500
};

/**
 * Initialize form handlers
 */
function initializeFormHandlers() {
    const forms = document.querySelectorAll('#projectProposalForm');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = getFormData();
    
    if (!validateFormData(formData)) {
        showErrorMessage(this, 'Please fill in all required fields.');
        return;
    }
    
    saveProposal(formData);
    sendEmailViaMailto(formData);
    showSuccessMessage(this);
    this.reset();
}

/**
 * Get form data
 */
function getFormData() {
    return {
        projectName: getElementValue('projectName'),
        projectEmail: getElementValue('projectEmail'),
        projectDescription: getElementValue('projectDescription'),
        projectTimeline: getElementValue('projectTimeline'),
        projectBudget: getElementValue('projectBudget'),
        projectPhone: getElementValue('projectPhone'),
        timestamp: new Date().toLocaleString(),
        id: Date.now()
    };
}

/**
 * Safely get element value
 */
function getElementValue(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
}

/**
 * Validate form data
 */
function validateFormData(data) {
    return data.projectName && data.projectEmail && data.projectDescription;
}

/**
 * Send email via mailto
 */
function sendEmailViaMailto(formData) {
    const timestamp = formData.timestamp;

    // Save to localStorage as backup
    const formData = {
        projectName,
        projectEmail,
        projectDescription,
        projectTimeline,
        projectBudget,
        projectPhone,
        timestamp,
        id: Date.now()
    };
    saveProjectProposal(formData);

    const subject = encodeURIComponent(`🚀 New Project Proposal: ${formData.projectName}`);
    const body = encodeURIComponent(
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
`   NEW PROJECT PROPOSAL\n` +
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
`📅 Submitted: ${formData.timestamp}\n` +
`\n` +
`👤 Name:        ${formData.projectName}\n` +
`✉️  Email:       ${formData.projectEmail}\n` +
`📞 Phone:       ${formData.projectPhone || 'Not provided'}\n` +
`⏳ Timeline:    ${formData.projectTimeline}\n` +
`💰 Budget:      ${formData.projectBudget}\n` +
`\n` +
`📝 Project Description:\n` +
`----------------------------------------\n` +
`${formData.projectDescription}\n` +
`----------------------------------------\n` +
`\n` +
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
`Reply directly to this email to contact the client.\n`
    );
    const mailto = `mailto:${CONFIG.recipientEmail}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
        window.location.href = mailto;
    }, CONFIG.mailtoDelay);
}

/**
 * Save proposal to localStorage
 */
function saveProposal(proposal) {
    let proposals = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
    proposals.push(proposal);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(proposals));
}

/**
 * Show success message
 */
function showSuccessMessage(form) {
    showMessage(form, 'alert-success', '✓ Thank you! Your proposal has been received. I\'ll contact you soon!');
}

/**
 * Show error message
 */
function showErrorMessage(form, message) {
    showMessage(form, 'alert-warning', '⚠️ ' + message);
}

/**
 * Generic message display
 */
function showMessage(form, className, text) {
    const msg = document.createElement('div');
    msg.className = `alert ${className}`;
    msg.textContent = text;
    form.parentNode.insertBefore(msg, form.nextSibling);
    
    setTimeout(() => msg.remove(), CONFIG.successMessageDuration);
}

/**
 * Get all saved proposals
 */
function getAllProposals() {
    return JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
}

/**
 * Export proposals as JSON (useful for backup)
 */
function exportProposals() {
    const proposals = getAllProposals();
    const dataStr = JSON.stringify(proposals, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `project-proposals-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

/**
 * Clear all proposals
 */
function clearAllProposals() {
    if (confirm('Are you sure you want to clear all proposals? This cannot be undone.')) {
        localStorage.removeItem(CONFIG.storageKey);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeFormHandlers);
