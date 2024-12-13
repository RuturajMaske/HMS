// Function to display the relevant module when a navbar link is clicked
function showModule(moduleId) {
    // Hide all modules first
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => {
        module.classList.remove('active');
    });

    // Show the clicked module
    const activeModule = document.getElementById(moduleId);
    activeModule.classList.add('active');
}

// Optionally, show the "Student Login" module by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showModule('student-login');
});
