import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { findMatches } from "../utils/matchmaking";
// Import AI matchmaking function

const Dashboard = () => {
  const [role, setRole] = useState(""); // User role (athlete, mentor, sponsor)
  const [userData, setUserData] = useState(null); // Stores user profile data
  const [matches, setMatches] = useState([]); // Stores AI-matched users
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setRole(data.role);
          setUserData(data);

          // Fetch AI-based matches
          const recommendedMatches = await findMatches(data.role, data);
          setMatches(recommendedMatches);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

      {/* User Role Details */}
      {userData && (
        <div>
          <h3>Your Profile</h3>
          <p><strong>Role:</strong> {role}</p>
          {role === "athlete" && (
            <>
              <p><strong>Sport:</strong> {userData.sport}</p>
              <p><strong>Skill Level:</strong> {userData.skillLevel}</p>
            </>
          )}
          {role === "mentor" && (
            <>
              <p><strong>Specialization:</strong> {userData.specialization}</p>
            </>
          )}
          {role === "sponsor" && (
            <>
              <p><strong>Company:</strong> {userData.company}</p>
            </>
          )}
        </div>
      )}

      {/* Display AI-based Matches */}
      <h3>Recommended Matches</h3>
      {matches.length > 0 ? (
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              <strong>{match.name}</strong> - {match.role} (Score: {match.score})
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches found.</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

