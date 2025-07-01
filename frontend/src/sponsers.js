// Sample sponsors data
const sponsors = [
    {
        id: 1,
        name: "Nike",
        logo: "/images/nike.png",
        budget: 5000000,
        description: "Global sports apparel and equipment manufacturer",
        sponsoredAthletes: [
            { name: "Smriti Mandhana", sport: "Cricket", contractValue: 500000 },
            { name: "Harmanpreet Kaur", sport: "Cricket", contractValue: 450000 }
        ],
        focusAreas: ["Cricket", "Athletics", "Tennis"],
        yearlyBudget: 2000000,
        activeContracts: 12
    },
    {
        id: 2,
        name: "Adidas",
        logo: "/images/addidas.png",
        budget: 4500000,
        description: "Leading sportswear manufacturer",
        sponsoredAthletes: [
            { name: "Mithali Raj", sport: "Cricket", contractValue: 400000 },
            { name: "Deepti Sharma", sport: "Cricket", contractValue: 350000 }
        ],
        focusAreas: ["Cricket", "Football", "Running"],
        yearlyBudget: 1800000,
        activeContracts: 10
    },
    {
        id: 3,
        name: "Puma",
        logo: "/images/puma.jpg",
        budget: 4200000,
        description: "Renowned sportswear and footwear brand",
        sponsoredAthletes: [
            { name: "Jemimah Rodrigues", sport: "Cricket", contractValue: 380000 },
            { name: "Shafali Verma", sport: "Cricket", contractValue: 370000 }
        ],
        focusAreas: ["Cricket", "Athletics", "Football"],
        yearlyBudget: 1700000,
        activeContracts: 8
    },
    {
        id: 4,
        name: "Reebok",
        logo: "/images/reebok.png",
        budget: 2500000,
        description: "Athletic footwear and apparel brand",
        sponsoredAthletes: [
            { name: "Ellyse Perry", sport: "Cricket", contractValue: 600000 },
            { name: "Alyssa Healy", sport: "Cricket", contractValue: 550000 }
        ],
        focusAreas: ["Cricket", "Running", "Fitness"],
        yearlyBudget: 1200000,
        activeContracts: 6
    },
    {
        id: 5,
        name: "Red Bull",
        logo: "/images/redbull.png",
        budget: 6000000,
        description: "Energy drink company with major sports sponsorships",
        sponsoredAthletes: [
            { name: "Sophie Devine", sport: "Cricket", contractValue: 420000 },
            { name: "Meg Lanning", sport: "Cricket", contractValue: 480000 }
        ],
        focusAreas: ["Cricket", "Extreme Sports", "Football"],
        yearlyBudget: 3000000,
        activeContracts: 12
    },
    {
        id: 6,
        name: "Under Armour",
        logo: "/images/underarmour.png",
        budget: 3500000,
        description: "Innovative sports performance brand",
        sponsoredAthletes: [
            { name: "Beth Mooney", sport: "Cricket", contractValue: 410000 },
            { name: "Natalie Sciver", sport: "Cricket", contractValue: 400000 }
        ],
        focusAreas: ["Cricket", "Athletics", "Hockey"],
        yearlyBudget: 1600000,
        activeContracts: 7
    },
    {
        id: 7,
        name: "Rolex",
        logo: "/images/rolex.webp",
        budget: 7000000,
        description: "Luxury watch brand sponsoring elite sports",
        sponsoredAthletes: [
            { name: "Serena Williams", sport: "Tennis", contractValue: 3000000 },
            { name: "Maria Sharapova", sport: "Tennis", contractValue: 2500000 }
        ],
        focusAreas: ["Tennis", "Golf", "Equestrian"],
        yearlyBudget: 3500000,
        activeContracts: 10
    },
    {
        id: 8,
        name: "Coca-Cola",
        logo: "/images/coca-cola.png",
        budget: 5500000,
        description: "Major sponsor in global sporting events",
        sponsoredAthletes: [
            { name: "Megan Rapinoe", sport: "Football", contractValue: 1200000 },
            { name: "Sam Kerr", sport: "Football", contractValue: 1100000 }
        ],
        focusAreas: ["Football", "Olympics", "Basketball"],
        yearlyBudget: 2500000,
        activeContracts: 14
    },
    {
        id: 9,
        name: "Monster Energy",
        logo: "/images/monster.png",
        budget: 4000000,
        description: "Energy drink company sponsoring extreme sports",
        sponsoredAthletes: [
            { name: "Sky Brown", sport: "Skateboarding", contractValue: 900000 },
            { name: "Leticia Bufoni", sport: "Skateboarding", contractValue: 850000 }
        ],
        focusAreas: ["Skateboarding", "MMA", "Motorsports"],
        yearlyBudget: 1800000,
        activeContracts: 7
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const token = localStorage.getItem('token');
    //if (!token) {
        //window.location.href = '/login';
        //return;
    //}

    // Load user data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    document.getElementById('userName').textContent = userData.name || 'User';
    document.getElementById('userEmail').textContent = userData.email || 'N/A';
    document.getElementById('userRole').textContent = userData.role || 'N/A';

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme === 'dark' ? 'dark-theme' : '';
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        body.className = isDark ? '' : 'dark-theme';
        icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Initialize sponsors grid
    initializeSponsors();
});

function initializeSponsors() {
    const sponsorsGrid = document.getElementById('sponsorsGrid');
    const modal = document.getElementById('sponsorModal');
    const closeButton = document.querySelector('.close-button');

    // Create sponsor cards
    sponsors.forEach(sponsor => {
        const card = createSponsorCard(sponsor);
        sponsorsGrid.appendChild(card);
    });

    // Modal close functionality
    closeButton.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

function createSponsorCard(sponsor) {
    const card = document.createElement('div');
    card.className = 'sponsor-card';
    card.innerHTML = `
        <div class="sponsor-logo">
            <img src="${sponsor.logo}" alt="${sponsor.name} logo">
        </div>
        <div class="sponsor-info">
            <h3>${sponsor.name}</h3>
            <p>${sponsor.description}</p>
            <div class="sponsor-stats">
                <div class="stat-item">
                    <div class="stat-value">${sponsor.activeContracts}</div>
                    <div class="stat-label">Active Athletes</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">$${(sponsor.yearlyBudget/1000000).toFixed(1)}M</div>
                    <div class="stat-label">Yearly Budget</div>
                </div>
            </div>
        </div>
    `;

    card.onclick = () => showSponsorDetails(sponsor);
    return card;
}

function showSponsorDetails(sponsor) {
    const modal = document.getElementById('sponsorModal');
    const details = document.getElementById('sponsorDetails');
    
    details.innerHTML = `
        <h2>${sponsor.name}</h2>
        <p class="sponsor-description">${sponsor.description}</p>
        <div class="focus-areas">
            <h3>Focus Areas</h3>
            <div class="tags">
                ${sponsor.focusAreas.map(area => `<span class="tag">${area}</span>`).join('')}
            </div>
        </div>
        <div class="sponsored-athletes">
            <h3>Sponsored Athletes</h3>
            <div class="athletes-list">
                ${sponsor.sponsoredAthletes.map(athlete => `
                    <div class="athlete-item">
                        <span class="athlete-name">${athlete.name}</span>
                        <span class="athlete-sport">${athlete.sport}</span>
                        <span class="contract-value">$${(athlete.contractValue/1000).toFixed(0)}K</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = "block";
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
}