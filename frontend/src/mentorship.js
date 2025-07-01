document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return;
    }

    // Load user data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userNameElement = document.getElementById('userName');
    const userEmailElement = document.getElementById('userEmail');
    const userRoleElement = document.getElementById('userRole');

    if (userNameElement) userNameElement.textContent = userData.name || 'User';
    if (userEmailElement) userEmailElement.textContent = userData.email || 'N/A';
    if (userRoleElement) userRoleElement.textContent = userData.role || 'N/A';

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('svg');
    if (themeToggle) {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.classList.toggle('dark-theme', savedTheme === 'dark');
        updateThemeIcon(savedTheme === 'dark');
        
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
        });
    }
    // Initialize mentor search functionality
    initializeMentorSearch();
});

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.style.transform = isDark ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}
function initializeMentorSearch() {
    const searchBtn = document.getElementById('find-mentor');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchMentors);
    }
}

async function searchMentors() {
    const sport = document.getElementById('sportSelect').value;
    const region = document.getElementById('regionSelect').value;
    const position = document.getElementById('positionSelect').value;

    if (!sport || !region || !position) {
        alert('Please select all fields');
        return;
    }

    try {
        const response = await fetch('/api/find-mentor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                athleteSport: sport,
                athleteRegion: region,
                athleteposition: position
            })
        });

        const mentors = await response.json();
        displayMentors(mentors);
    } catch (error) {
        console.error('Error finding mentors:', error);
        alert('Error finding mentors. Please try again.');
    }
}

function displayMentors(mentors) {
    const mentorsGrid = document.getElementById('mentors-grid');
    mentorsGrid.innerHTML = '';

    if (!mentors || mentors.length === 0) {
        mentorsGrid.innerHTML = `
            <div class="achievement-card">
                <div class="achievement-icon">
                    <i class="fas fa-user-slash"></i>
                </div>
                <div class="achievement-content">
                    <h3>No Mentors Found</h3>
                    <p>Try different search criteria</p>
                </div>
            </div>`;
        return;
    }

    mentors.forEach(mentor => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.innerHTML = `
            <div class="achievement-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="achievement-content">
                <h3>${mentor.name}</h3>
                <p>${mentor.mentorExpertise}</p>
                <p>${mentor.mentorRegion}</p>
                <button class="connect-btn" onclick="connectWithMentor('${mentor._id}')">
                    Connect
                </button>
            </div>
        `;
        mentorsGrid.appendChild(card);
    });
}

async function connectWithMentor(mentorId) {
    try {
        const response = await fetch('/api/connect-mentor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ mentorId })
        });

        const result = await response.json();
        if (result.success) {
            alert('Connection request sent to mentor!');
        } else {
            alert('Failed to connect with mentor. Please try again.');
        }
    } catch (error) {
        console.error('Error connecting with mentor:', error);
        alert('Error connecting with mentor. Please try again.');
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
}