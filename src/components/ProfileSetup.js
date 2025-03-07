import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const ProfileSetup = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    sport: "",
    positions: "",
    experience: "",
    specialization: "",
    budget: "",
    targetAthletes: "",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    try {
      await updateDoc(doc(db, "users", user.uid), { profileData });
      alert("Profile setup complete!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error saving profile: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Profile Setup - {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />

        <input type="text" name="sport" placeholder="Sport" onChange={handleChange} required />

        {role === "athlete" && <input type="text" name="positions" placeholder="Positions (if team sport)" onChange={handleChange} />}
        {role === "mentor" && <input type="text" name="experience" placeholder="Experience (years)" onChange={handleChange} />}
        {role === "mentor" && <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} />}
        {role === "sponsor" && <input type="text" name="budget" placeholder="Budget" onChange={handleChange} />}
        {role === "sponsor" && <input type="text" name="targetAthletes" placeholder="Who are you looking for?" onChange={handleChange} />}

        <button type="submit">Complete Profile</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
