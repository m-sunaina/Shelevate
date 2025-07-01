// Player data (example format)
const allPlayers = [
    {
        id: 1,
        name: "Deepti Sharma",
        points: 214.5,
        matches: 8,
        wickets: 10,
        dots: 59,
        runs: 245,
        fours: 34,
        sixes: 8,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 27,
        fairPlayRating: 8.5
    },
    {
        id: 2,
        name: "Ellyse Perry",
        points: 201,
        matches: 9,
        wickets: 7,
        dots: 47,
        runs: 280,
        fours: 41,
        sixes: 7,
        catches: 1,
        runOuts: 0,
        stumpings: 0,
        age: 33,
        fairPlayRating: 8.7
    },
    {
        id: 3,
        name: "Natalie Sciver-Brunt",
        points: 186,
        matches: 9,
        wickets: 10,
        dots: 75,
        runs: 210,
        fours: 26,
        sixes: 1,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 31,
        fairPlayRating: 8.2
    },
    {
        id: 4,
        name: "Meg Lanning",
        points: 136.5,
        matches: 9,
        wickets: 0,
        dots: 0,
        runs: 325,
        fours: 47,
        sixes: 4,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 32,
        fairPlayRating: 9.1
    },
    {
        id: 5,
        name: "Smriti Mandhana",
        points: 146.5,
        matches: 10,
        wickets: 0,
        dots: 0,
        runs: 310,
        fours: 40,
        sixes: 10,
        catches: 4,
        runOuts: 1,
        stumpings: 0,
        age: 28,
        fairPlayRating: 9.8
    },
    {
        id: 6,
        name: "Sophie Ecclestone",
        points: 144.5,
        matches: 8,
        wickets: 11,
        dots: 88,
        runs: 30,
        fours: 1,
        sixes: 1,
        catches: 3,
        runOuts: 3,
        stumpings: 0,
        age: 25,
        fairPlayRating: 8.4
    },
    {
        id: 7, 
        name: "Shabnim Ismail",
        points: 132.5,
        matches: 7,
        wickets: 8,
        dots: 97,
        runs: 15,
        fours: 1,
        sixes: 0,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 35,
        fairPlayRating: 7.9
    },
    {
        id: 8,
        name: "Richa Ghosh",
        points: 151,
        matches: 10,
        wickets: 0,
        dots: 0,
        runs: 175,
        fours: 31,
        sixes: 10,
        catches: 3,
        runOuts: 4,
        stumpings: 10,
        age: 20,
        fairPlayRating: 8.5
    },
    {
        id: 9,
        name: "Alice Capsey",
        points: 133.5,
        matches: 9,
        wickets: 4,
        dots: 21,
        runs: 195,
        fours: 29,
        sixes: 6,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 19,
        fairPlayRating: 8.3
    },
    {
        id: 10,
        name: "Sophie Devine",
        points: 152.5,
        matches: 10,
        wickets: 6,
        dots: 67,
        runs: 145,
        fours: 13,
        sixes: 7,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 33,
        fairPlayRating: 9.5
    },
    {
        id: 11,
        name: "Harmanpreet Kaur",
        points: 178,
        matches: 8,
        wickets: 5,
        dots: 52,
        runs: 210,
        fours: 30,
        sixes: 9,
        catches: 2,
        runOuts: 1,
        stumpings: 0,
        age: 33,
        fairPlayRating: 8.6
    },
    {
        id: 12,
        name: "Jhulan Goswami",
        points: 195,
        matches: 10,
        wickets: 12,
        dots: 112,
        runs: 40,
        fours: 5,
        sixes: 0,
        catches: 4,
        runOuts: 1,
        stumpings: 0,
        age: 38,
        fairPlayRating: 9.0
    },
    {
        id: 13,
        name: "Shafali Verma",
        points: 139,
        matches: 9,
        wickets: 0,
        dots: 20,
        runs: 350,
        fours: 55,
        sixes: 7,
        catches: 1,
        runOuts: 0,
        stumpings: 0,
        age: 20,
        fairPlayRating: 8.3
    },
    {
        id: 14,
        name: "Sushma Verma",
        points: 110,
        matches: 7,
        wickets: 0,
        dots: 35,
        runs: 150,
        fours: 20,
        sixes: 2,
        catches: 2,
        runOuts: 0,
        stumpings: 1,
        age: 26,
        fairPlayRating: 7.7
    },
    {
        id: 15,
        name: "Lauren Winfield-Hill",
        points: 118.5,
        matches: 10,
        wickets: 0,
        dots: 45,
        runs: 230,
        fours: 40,
        sixes: 4,
        catches: 5,
        runOuts: 1,
        stumpings: 0,
        age: 31,
        fairPlayRating: 8.4
    },
    {
        id: 16,
        name: "Tahlia McGrath",
        points: 153,
        matches: 9,
        wickets: 7,
        dots: 66,
        runs: 180,
        fours: 18,
        sixes: 6,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 28,
        fairPlayRating: 8.0
    },
    {
        id: 17,
        name: "Alyssa Healy",
        points: 182.5,
        matches: 9,
        wickets: 0,
        dots: 55,
        runs: 270,
        fours: 38,
        sixes: 6,
        catches: 6,
        runOuts: 1,
        stumpings: 0,
        age: 30,
        fairPlayRating: 8.9
    },
    {
        id: 18,
        name: "Danni Wyatt",
        points: 164,
        matches: 10,
        wickets: 3,
        dots: 42,
        runs: 200,
        fours: 25,
        sixes: 5,
        catches: 4,
        runOuts: 0,
        stumpings: 0,
        age: 27,
        fairPlayRating: 7.9
    },
    {
        id: 19,
        name: "Mithali Raj",
        points: 128.5,
        matches: 10,
        wickets: 0,
        dots: 33,
        runs: 280,
        fours: 45,
        sixes: 3,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 42,
        fairPlayRating: 9.3
    },
    {
        id: 20,
        name: "Poonam Yadav",
        points: 152,
        matches: 8,
        wickets: 15,
        dots: 95,
        runs: 20,
        fours: 2,
        sixes: 0,
        catches: 1,
        runOuts: 0,
        stumpings: 0,
        age: 30,
        fairPlayRating: 8.0
    },
    {
        id: 21,
        name: "Jemimah Rodrigues",
        points: 145,
        matches: 9,
        wickets: 0,
        dots: 15,
        runs: 270,
        fours: 42,
        sixes: 5,
        catches: 3,
        runOuts: 1,
        stumpings: 0,
        age: 23,
        fairPlayRating: 8.6
    },
    {
        id: 22,
        name: "Lea Tahuhu",
        points: 138,
        matches: 8,
        wickets: 10,
        dots: 85,
        runs: 40,
        fours: 4,
        sixes: 1,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 33,
        fairPlayRating: 8.2
    },
    {
        id: 23,
        name: "Amelia Kerr",
        points: 160,
        matches: 10,
        wickets: 11,
        dots: 70,
        runs: 190,
        fours: 25,
        sixes: 6,
        catches: 4,
        runOuts: 0,
        stumpings: 0,
        age: 23,
        fairPlayRating: 9.0
    },
    {
        id: 24,
        name: "Deandra Dottin",
        points: 148.5,
        matches: 9,
        wickets: 6,
        dots: 55,
        runs: 220,
        fours: 28,
        sixes: 8,
        catches: 3,
        runOuts: 1,
        stumpings: 0,
        age: 32,
        fairPlayRating: 8.4
    },
    {
        id: 25,
        name: "Hayley Matthews",
        points: 172,
        matches: 10,
        wickets: 9,
        dots: 65,
        runs: 250,
        fours: 35,
        sixes: 7,
        catches: 2,
        runOuts: 0,
        stumpings: 0,
        age: 25,
        fairPlayRating: 8.7
    },
    {
        id: 26,
        name: "Laura Wolvaardt",
        points: 158.5,
        matches: 9,
        wickets: 0,
        dots: 10,
        runs: 315,
        fours: 50,
        sixes: 4,
        catches: 2,
        runOuts: 1,
        stumpings: 0,
        age: 24,
        fairPlayRating: 9.1
    },
    {
        id: 27,
        name: "Marizanne Kapp",
        points: 165,
        matches: 9,
        wickets: 7,
        dots: 75,
        runs: 230,
        fours: 30,
        sixes: 5,
        catches: 4,
        runOuts: 0,
        stumpings: 0,
        age: 34,
        fairPlayRating: 8.9
    },
    {
        id: 28,
        name: "Suzie Bates",
        points: 143,
        matches: 10,
        wickets: 2,
        dots: 40,
        runs: 270,
        fours: 37,
        sixes: 5,
        catches: 3,
        runOuts: 1,
        stumpings: 0,
        age: 36,
        fairPlayRating: 8.5
    },
    {
        id: 29,
        name: "Mady Villiers",
        points: 130,
        matches: 8,
        wickets: 9,
        dots: 65,
        runs: 85,
        fours: 10,
        sixes: 2,
        catches: 1,
        runOuts: 0,
        stumpings: 0,
        age: 25,
        fairPlayRating: 8.3
    },
    {
        id: 30,
        name: "Taniya Bhatia",
        points: 126,
        matches: 10,
        wickets: 0,
        dots: 5,
        runs: 150,
        fours: 22,
        sixes: 3,
        catches: 6,
        runOuts: 2,
        stumpings: 8,
        age: 26,
        fairPlayRating: 8.0
    },
    {
        id: 31,
        name: "Ashleigh Gardner",
        points: 167.5,
        matches: 9,
        wickets: 8,
        dots: 60,
        runs: 210,
        fours: 24,
        sixes: 6,
        catches: 3,
        runOuts: 1,
        stumpings: 0,
        age: 27,
        fairPlayRating: 8.7
    },
    {
        id: 32,
        name: "Grace Harris",
        points: 135,
        matches: 8,
        wickets: 5,
        dots: 50,
        runs: 180,
        fours: 20,
        sixes: 5,
        catches: 2,
        runOuts: 1,
        stumpings: 0,
        age: 30,
        fairPlayRating: 8.5
    },
    {
        id: 33,
        name: "Chamari Athapaththu",
        points: 155,
        matches: 10,
        wickets: 4,
        dots: 45,
        runs: 290,
        fours: 42,
        sixes: 9,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 34,
        fairPlayRating: 8.8
    },
    {
        id: 34,
        name: "Salma Khatun",
        points: 140,
        matches: 9,
        wickets: 10,
        dots: 78,
        runs: 80,
        fours: 6,
        sixes: 1,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 33,
        fairPlayRating: 8.3
    },
    {
        id: 35,
        name: "Nida Dar",
        points: 165.5,
        matches: 9,
        wickets: 12,
        dots: 85,
        runs: 195,
        fours: 28,
        sixes: 4,
        catches: 2,
        runOuts: 1,
        stumpings: 0,
        age: 37,
        fairPlayRating: 8.6
    },
    {
        id: 36,
        name: "Fatima Sana",
        points: 134,
        matches: 8,
        wickets: 6,
        dots: 55,
        runs: 140,
        fours: 15,
        sixes: 3,
        catches: 1,
        runOuts: 0,
        stumpings: 0,
        age: 22,
        fairPlayRating: 8.1
    },
    {
        id: 37,
        name: "Beth Mooney",
        points: 162,
        matches: 10,
        wickets: 0,
        dots: 20,
        runs: 340,
        fours: 48,
        sixes: 6,
        catches: 4,
        runOuts: 1,
        stumpings: 0,
        age: 29,
        fairPlayRating: 9.0
    },
    {
        id: 38,
        name: "Anya Shrubsole",
        points: 148,
        matches: 9,
        wickets: 11,
        dots: 90,
        runs: 50,
        fours: 7,
        sixes: 1,
        catches: 3,
        runOuts: 0,
        stumpings: 0,
        age: 32,
        fairPlayRating: 8.5
    }
];

// Categories definitions with criteria
const categories = [
    {
        id: 'mvp',
        title: 'Most Valuable Players',
        icon: '🏆',
        description: 'Top performers across all aspects of the game',
        criteria: (player) => {
            // MVP is determined primarily by total points
            return player.points;
        },
        maxResults: 3 // Show top 3 MVPs
    },
    {
        id: 'fairplay',
        title: 'Fair Play Award',
        icon: '🤝',
        description: 'Players exemplifying sportsmanship and integrity',
        criteria: (player) => {
            // Fair play is determined by a fair play rating
            return player.fairPlayRating;
        },
        maxResults: 3
    },
    {
        id: 'batters',
        title: 'Top Batters',
        icon: '🏏',
        description: 'Leading run-scorers and impactful batting performances',
        criteria: (player) => {
            // Batting score calculated based on runs, fours, sixes
            const boundaryBonus = (player.fours * 0.5) + (player.sixes * 1.5);
            const strikeRateEffect = player.runs / player.matches; // Approximation
            return player.runs + boundaryBonus + strikeRateEffect;
        },
        maxResults: 3
    },
    {
        id: 'bowlers',
        title: 'Top Bowlers',
        icon: '🎯',
        description: 'Leading wicket-takers and economic bowlers',
        criteria: (player) => {
            // Bowling score calculated on wickets and dot balls
            const wicketValue = player.wickets * 10;
            const dotBallValue = player.dots * 0.5;
            return wicketValue + dotBallValue;
        },
        maxResults: 3,
        minCriteria: (player) => player.wickets >= 3 // Must have taken at least 3 wickets
    },
    {
        id: 'allrounders',
        title: 'Best All-rounders',
        icon: '⭐',
        description: 'Players excelling in both batting and bowling',
        criteria: (player) => {
            // Allrounder needs to contribute in both batting and bowling
            const battingContribution = player.runs / 10;
            const bowlingContribution = player.wickets * 5;
            
            // Only true all-rounders with both batting and bowling contributions
            if (player.runs >= 100 && player.wickets >= 3) {
                return battingContribution + bowlingContribution;
            }
            return 0; // Not an all-rounder
        },
        maxResults: 3
    },
    {
        id: 'emerging',
        title: 'Emerging Players',
        icon: '🌟',
        description: 'Breakthrough performers of the season',
        criteria: (player) => {
            // Emerging players are typically younger and showing promise
            if (player.age <= 25) {
                // Higher weight for performance at young age
                return player.points * (1 + ((25 - player.age) / 25));
            }
            return 0; // Not eligible as emerging player
        },
        maxResults: 3
    }
];

// Function to categorize players
function categorizeAllPlayers() {
    // Start with empty categories
    const categorizedPlayers = {};
    
    // Initialize each category
    categories.forEach(category => {
        categorizedPlayers[category.id] = [];
    });
    
    // Process each player through each category
    categories.forEach(category => {
        // Filter eligible players for this category
        let eligiblePlayers = [...allPlayers];
        
        // Apply minimum criteria if exists
        if (category.minCriteria) {
            eligiblePlayers = eligiblePlayers.filter(category.minCriteria);
        }
        
        // Score all eligible players according to category criteria
        const scoredPlayers = eligiblePlayers.map(player => {
            return {
                ...player,
                categoryScore: category.criteria(player)
            };
        });
        
        // Sort by category score (descending)
        scoredPlayers.sort((a, b) => b.categoryScore - a.categoryScore);
        
        // Take top players based on maxResults
        const topPlayers = scoredPlayers
            .slice(0, category.maxResults)
            .filter(player => player.categoryScore > 0) // Ensure they have some relevance to category
            .map((player, index) => {
                return {
                    position: index + 1,
                    player: player.name,
                    points: player.points,
                    matches: player.matches,
                    wickets: player.wickets,
                    dots: player.dots,
                    fours: player.fours,
                    sixes: player.sixes,
                    catches: player.catches,
                    runOuts: player.runOuts,
                    stumpings: player.stumpings,
                    // Include additional stats as needed
                    categoryScore: player.categoryScore
                };
            });
        
        // Assign to category
        categorizedPlayers[category.id] = topPlayers;
    });
    
    return categorizedPlayers;
}

// Generate the categorized players
const playersData = categorizeAllPlayers();

// DOM Elements
const categoriesContainer = document.getElementById('categories-container');
const playersModal = document.getElementById('players-modal');
const statsModal = document.getElementById('stats-modal');
const modalCategoryTitle = document.getElementById('modal-category-title');
const playersList = document.getElementById('players-list');
const playerStatsTitle = document.getElementById('player-stats-title');
const playerStatsContent = document.getElementById('player-stats-content');
const closeButtons = document.querySelectorAll('.close-button');
const backButton = document.querySelector('.back-button');
document.addEventListener('DOMContentLoaded', function() {
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

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', newTheme);
    });

    // Initialize other functionality
    createCategoryBlocks();
});

// Remove these functions as they're no longer needed
// function toggleTheme() { ... }
// function initializeTheme() { ... }
const themeToggle = document.getElementById('theme-toggle');

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Create category blocks
function createCategoryBlocks() {
    categoriesContainer.innerHTML = categories.map((category, index) => `
        <div class="block" style="animation-delay: ${index * 0.1}s" data-category="${category.id}">
            <div class="category-icon">${category.icon}</div>
            <h3>${category.title}</h3>
            <p class="category-description">${category.description}</p>
        </div>
    `).join('');
}

// Show players list for a category
function showPlayersList(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    const players = playersData[categoryId];
    
    modalCategoryTitle.textContent = category.title;
    
    playersList.innerHTML = players.map(player => `
        <div class="player-card" data-player-id="${player.position}" data-category="${categoryId}">
            <div class="position-indicator position-${player.position}">${player.position}</div>
            <div>
                <h3>${player.player}</h3>
                <p>Points: ${player.points} | Matches: ${player.matches}</p>
            </div>
        </div>
    `).join('');
    
    playersModal.style.display = 'block';
    statsModal.style.display = 'none';
}

// Show detailed player stats
function showPlayerStats(categoryId, playerId) {
    const player = playersData[categoryId].find(p => p.position === playerId);
    playerStatsTitle.textContent = `${player.player} - Detailed Statistics`;
    
    playerStatsContent.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Position</td><td>#${player.position}</td></tr>
                <tr><td>Points</td><td>${player.points}</td></tr>
                <tr><td>Matches</td><td>${player.matches}</td></tr>
                <tr><td>Wickets</td><td>${player.wickets}</td></tr>
                <tr><td>Dot Balls</td><td>${player.dots}</td></tr>
                <tr><td>Fours</td><td>${player.fours}</td></tr>
                <tr><td>Sixes</td><td>${player.sixes}</td></tr>
                <tr><td>Catches</td><td>${player.catches}</td></tr>
                <tr><td>Run Outs</td><td>${player.runOuts}</td></tr>
                <tr><td>Stumpings</td><td>${player.stumpings}</td></tr>
                <tr><td>Category Score</td><td>${player.categoryScore ? player.categoryScore.toFixed(2) : 'N/A'}</td></tr>
            </tbody>
        </table>
    `;
    
    playersModal.style.display = 'none';
    statsModal.style.display = 'block';
}

categoriesContainer.addEventListener('click', (e) => {
    const block = e.target.closest('.block');
    if (block) {
        const categoryId = block.dataset.category;
        showPlayersList(categoryId);
    }
});

playersList.addEventListener('click', (e) => {
    const playerCard = e.target.closest('.player-card');
    if (playerCard) {
        const playerId = parseInt(playerCard.dataset.playerId);
        const categoryId = playerCard.dataset.category;
        showPlayerStats(categoryId, playerId);
    }
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        playersModal.style.display = 'none';
        statsModal.style.display = 'none';
    });
});

backButton.addEventListener('click', () => {
    statsModal.style.display = 'none';
    playersModal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === playersModal) {
        playersModal.style.display = 'none';
    }
    if (e.target === statsModal) {
        statsModal.style.display = 'none';
    }
});

// Initialize
initializeTheme();
createCategoryBlocks();

// Log categorized data to console for debugging
console.log("Categorized Players:", playersData);