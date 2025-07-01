document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const token = localStorage.getItem('token');
    const navRight = document.querySelector('.nav-right');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    if (!token) {
        // Hide profile if not logged in
        if (profileDropdown) {
            profileDropdown.style.display = 'none';
        }
        // Add login/register buttons if needed
        const authButtons = document.createElement('div');
        authButtons.className = 'auth-buttons';
        authButtons.innerHTML = `
            <a href="/login" class="login-btn">Login</a>
            <a href="/register" class="register-btn">Register</a>
        `;
        navRight.appendChild(authButtons);
    } else {
        // Show profile and load user data
        if (profileDropdown) {
            profileDropdown.style.display = 'block';
        }
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        document.getElementById('userName').textContent = userData.name || 'User';
        document.getElementById('userEmail').textContent = userData.email || 'N/A';
        document.getElementById('userRole').textContent = userData.role || 'N/A';
    }
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme';
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        body.className = isDark ? 'light-theme' : 'dark-theme';
        icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
});

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
}