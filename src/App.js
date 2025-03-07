import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import ProfileSetup from "./components/ProfileSetup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile-setup/:role" element={<ProfileSetup />} />
        <Route path="/athlete-dashboard" element={<h2>Athlete Dashboard</h2>} />
        <Route path="/mentor-dashboard" element={<h2>Mentor Dashboard</h2>} />
        <Route path="/sponsor-dashboard" element={<h2>Sponsor Dashboard</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
