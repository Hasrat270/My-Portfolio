/**
 * Project Proposal Form Handler
 * Manages form submissions, stores locally, and sends email notifications
 * Using Formspree for email delivery (no backend required)
 */

const RECIPIENT_EMAIL = 'Hasrat3701@gmail.com';
const FORMSPREE_FORM_ID = 'xyzopqvk'; // Pre-configured Formspree endpoint

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('#projectProposalForm');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleProjectProposal(this);
        });
    });
});

function handleProjectProposal(form) {
    const projectName = document.getElementById('projectName').value;
    const projectEmail = document.getElementById('projectEmail').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const projectTimeline = document.getElementById('projectTimeline').value;
    const projectBudget = document.getElementById('projectBudget').value;
    const projectPhone = document.getElementById('projectPhone').value;
    const timestamp = new Date().toLocaleString();

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

    // Build a beautiful plain text email template
    const subject = encodeURIComponent(`🚀 New Project Proposal: ${projectName}`);
    const body = encodeURIComponent(
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
`   NEW PROJECT PROPOSAL\n` +
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
`📅 Submitted: ${timestamp}\n` +
`\n` +
`👤 Name:        ${projectName}\n` +
`✉️  Email:       ${projectEmail}\n` +
`📞 Phone:       ${projectPhone || 'Not provided'}\n` +
`⏳ Timeline:    ${projectTimeline}\n` +
`💰 Budget:      ${projectBudget}\n` +
`\n` +
`📝 Project Description:\n` +
`----------------------------------------\n` +
`${projectDescription}\n` +
`----------------------------------------\n` +
`\n` +
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
`Reply directly to this email to contact the client.\n`
    );
    const mailto = `mailto:Hasrat3701@gmail.com?subject=${subject}&body=${body}`;

    // Show success message first
    showSuccessMessage(form);
    form.reset();
    
    // Then open mail client after a short delay
    setTimeout(() => {
        window.location.href = mailto;
    }, 500);
}

function saveProjectProposal(proposal) {
    let proposals = JSON.parse(localStorage.getItem('project_proposals') || '[]');
    proposals.push(proposal);
    localStorage.setItem('project_proposals', JSON.stringify(proposals));
    console.log('Proposal saved:', proposal);
}

function showSuccessMessage(form) {
    // Create success message
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert-success';
    successMsg.style.cssText = 'margin: 15px 0; padding: 12px; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; color: #155724;';
    successMsg.textContent = '✓ Thank you! Your proposal has been received. I\'ll contact you soon!';
    
    form.parentNode.insertBefore(successMsg, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
}

function showLoadingMessage(form) {
    // Create loading message
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'alert alert-info';
    loadingMsg.id = 'loadingMessage';
    loadingMsg.style.cssText = 'margin: 15px 0; padding: 12px; background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; color: #0c5460;';
    loadingMsg.textContent = '⏳ Sending your proposal...';
    
    form.parentNode.insertBefore(loadingMsg, form.nextSibling);
}

function removeLoadingMessage() {
    const loadingMsg = document.getElementById('loadingMessage');
    if (loadingMsg) {
        loadingMsg.remove();
    }
}

/**
 * Send email notification via Formspree
 */
// sendEmailNotification removed (mailto is now used)

function showErrorMessage(form, message) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'alert alert-warning';
    errorMsg.style.cssText = 'margin: 15px 0; padding: 12px; background-color: #fff3cd; border: 1px solid #ffeeba; border-radius: 4px; color: #856404;';
    errorMsg.textContent = '⚠️ ' + message;
    
    form.parentNode.insertBefore(errorMsg, form.nextSibling);
    
    setTimeout(() => {
        errorMsg.remove();
    }, 5000);
}

/**
 * Get all saved proposals (for local backup)
 */
function getAllProposals() {
    return JSON.parse(localStorage.getItem('project_proposals') || '[]');
}

/**
 * Format date for display
 */
function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
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
 * Clear all proposals (with confirmation)
 */
function clearAllProposals() {
    if (confirm('Are you sure you want to clear all proposals? This cannot be undone.')) {
        localStorage.removeItem('project_proposals');
        console.log('All proposals cleared');
    }
}
