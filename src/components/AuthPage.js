import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Athlete, Mentor, Sponsor
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 🔹 Handle Sign Up
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info in Firestore
      await setDoc(doc(db, "users", user.uid), { email, role });

      // Navigate to profile setup based on role
      navigate(`/profile-setup/${role}`);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please log in instead.");
        setIsLogin(true);
      } else {
        alert(error.message);
      }
    }
  };

  // 🔹 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {!isLogin && (
          <>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select Role</option>
              <option value="athlete">Athlete</option>
              <option value="mentor">Mentor</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </>
        )}

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", color: "blue" }}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
      </p>
    </div>
  );
};

export default AuthPage;
