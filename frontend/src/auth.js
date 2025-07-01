// Form toggle functionality
function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (formType === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        handleRoleChange();
    }
}

// Handle role change for conditional fields
function handleRoleChange() {
    const role = document.getElementById('userRole').value;
    const athleteFields = document.getElementById('athleteFields');
    const mentorFields = document.getElementById('mentorFields');
    const sponsorFields = document.getElementById('sponsorFields');

    // Hide all conditional fields first
    athleteFields.classList.add('hidden');
    mentorFields.classList.add('hidden');
    sponsorFields.classList.add('hidden');

    // Show relevant fields based on role
    switch (role) {
        case 'athlete':
            athleteFields.classList.remove('hidden');
            break;
        case 'mentor':
            mentorFields.classList.remove('hidden');
            break;
        case 'sponsor':
            sponsorFields.classList.remove('hidden');
            break;
    }
}

// Login form submission
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess('Login successful! Redirecting...');
            localStorage.setItem('token', data.token);
            localStorage.setItem('userData', JSON.stringify(data.user));
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 2000);
        } else {
            showError(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('An error occurred. Please try again.');
    }
}

// Sign up form submission
async function handleSignup(event) {
    event.preventDefault();

    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('userRole').value;

    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    if (!role) {
        showError('Please select a role');
        return;
    }

    const userData = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        password: password,
        role: role
    };

    // Add conditional fields based on role
    switch (userData.role) {
        case 'athlete':
            userData.sport = document.getElementById('athleteSport').value;
            userData.skillLevel = document.getElementById('athleteSkillLevel').value;
            userData.position = document.getElementById('position').value;
            userData.brandPreference = document.getElementById('athleteBrandPreference').value;
            userData.sponsorshipType = document.getElementById('athleteSponsorshipType').value;
            userData.achievements = document.getElementById('athleteAchievements').value;
            userData.followers = document.getElementById('athleteFollowers').value;
            userData.region = document.getElementById('athleteRegion').value;
            break;
        case 'mentor':
            userData.sport = document.getElementById('mentorSport').value;
            userData.experience = document.getElementById('mentorExperience').value;
            userData.expertise = document.getElementById('mentorExpertise').value;
            userData.region = document.getElementById('mentorRegion').value;
            break;
        case 'sponsor':
            userData.budget = document.getElementById('sponsorBudget').value;
            userData.brandName = document.getElementById('sponsorBrandName').value;
            userData.targetAthlete = document.getElementById('sponsorTargetAthlete').value;
            break;
    }

    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess('Account created successfully! Please log in.');
            setTimeout(() => toggleForm('login'), 2000);
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('An error occurred. Please try again.');
    }
}

// Error and success message handlers
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    const form = document.querySelector('form');
    form.insertBefore(errorDiv, form.firstChild);

    setTimeout(() => errorDiv.remove(), 5000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;

    const form = document.querySelector('form');
    form.insertBefore(successDiv, form.firstChild);

    setTimeout(() => successDiv.remove(), 5000);
}
