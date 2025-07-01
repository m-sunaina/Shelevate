const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

let isDarkMode = false;

function updateThemeIcon() {
    if (isDarkMode) {
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        `;
    } else {
        themeIcon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        `;
    }
}

// Set default dark mode
document.documentElement.classList.add('dark');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
    updateThemeIcon();
});

// Profile dropdown functionality
const profileButton = document.getElementById('profile-button');
const profileMenu = document.getElementById('profile-menu');

profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target)) {
        profileMenu.classList.remove('active');
    }
});

// Find Mentor button functionality
const findMentorButton = document.getElementById('find-mentor');

findMentorButton.addEventListener('click', () => {
    // Add your logic here for handling the Find Mentor button click
    console.log('Finding a mentor...');
});

document.addEventListener("DOMContentLoaded", function () {
    // --- Start of dashboard.js code ---
    // Check authentication
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return;
    }

    // Load user data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    document.getElementById('userName').textContent = userData.name || 'User';
    document.getElementById('userEmail').textContent = userData.email || 'N/A';
    document.getElementById('userRole').textContent = userData.role || 'N/A';

    // Theme toggle functionality from dashboard.js
    const themeToggleFromDashboard = document.getElementById('themeToggle');
    if (themeToggleFromDashboard) {
        const body = document.body;
        const icon = themeToggleFromDashboard.querySelector('i');

        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme';
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

        themeToggleFromDashboard.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            body.className = isDark ? 'light-theme' : 'dark-theme';
            icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });
    }
    // --- End of dashboard.js code ---

    // Original DOMContentLoaded code from athlete.js
    const card = document.getElementById("nutrition-card");

    // Show card when scrolling down 500px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });
});

async function fetchNutritionData() {
    const apiKey = "YOUR_RAPIDAPI_KEY"; // Replace with your API key
    const url = "https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=male&age_value=25&age_type=yrs&feet=5&inches=10&lbs=160&activity_level=Active";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Rapidapi-Key": apiKey,
                "X-Rapidapi-Host": "nutrition-calculator.p.rapidapi.com"
            }
        });

        const data = await response.json();

        // Update UI with fetched data
        document.getElementById("bmi").textContent = data.BMI_EER.BMI;
        document.getElementById("calories").textContent = data.BMI_EER["Estimated Daily Caloric Needs"];
        document.getElementById("protein").textContent = data.macronutrients_table["macronutrients-table"][3][1];
        document.getElementById("fat").textContent = data.macronutrients_table["macronutrients-table"][4][1];

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Logout function from dashboard.js
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
}