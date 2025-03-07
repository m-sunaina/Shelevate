import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import ProfileSetup from "./components/ProfileSetup";
import Dashboard from "./components/Dashboard"; // Use a single Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile-setup/:role" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Unified Dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
