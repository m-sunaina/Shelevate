import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// MongoDB Connection with error handling
const connectDB = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI); // Debugging URI
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

connectDB();

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['athlete', 'mentor', 'sponsor'] },

    // Athlete-specific fields
    athleteSport: String,
    athleteSkillLevel: String,
    athleteposition:String,
    athleteBrandPreference: String,
    athleteSponsorshipType: String,
    athleteAchievements: String,
    athleteFollowers: String,
    athleteRegion: String,

    // Mentor-specific fields
    mentorSport: String,
    mentorExperience: String,
    mentorExpertise: String,
    mentorRegion: String,

    // Sponsor-specific fields
    sponsorBudget: String,
    sponsorBrandName: String,
    sponsorTargetAthlete: String,

    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Authentication Routes
app.post('/api/auth/signup', async (req, res) => {
    console.log('Received Data:', req.body); // Debugging data
    try {
        const { name, email, password, role, ...extraFields } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
            role
        };

        if (role === 'athlete') {
            Object.assign(userData, {
                athleteSport: extraFields.sport,
                athleteSkillLevel: extraFields.skillLevel,
                athleteposition:extraFields.position,
                athleteBrandPreference: extraFields.brandPreference,
                athleteSponsorshipType: extraFields.sponsorshipType,
                athleteAchievements: extraFields.achievements,
                athleteFollowers: extraFields.followers,
                athleteRegion: extraFields.region
            });
        } else if (role === 'mentor') {
            Object.assign(userData, {
                mentorSport: extraFields.sport,
                mentorExperience: extraFields.experience,
                mentorExpertise: extraFields.expertise,
                mentorRegion: extraFields.region
            });
        } else if (role === 'sponsor') {
            Object.assign(userData, {
                sponsorBudget: extraFields.budget,
                sponsorBrandName: extraFields.brandName,
                sponsorTargetAthlete: extraFields.targetAthlete
            });
        }

        const user = new User(userData);

        await user.save();

        const savedUser = await User.findOne({ email }); // Debugging saved data
        console.log('Saved User:', savedUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.use('/', express.static(path.join(__dirname, 'frontend/src')));
app.use(express.static(path.join(__dirname, './frontend/src')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/template/landing.html'));
});
app.get('/login',(req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/auth.html'));
});
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/dashboard.html'));
});
app.get('/leaderboard', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/leaderboard.html'));
});
app.get('/athlete', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/athelete.html'));
});
app.get('/sponsors', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/sponsers.html'));
});
app.get('/mentor', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/template/mentor.html'));
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


