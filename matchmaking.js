import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

/**
 * AI-powered matchmaking using Cosine Similarity.
 * @param {string} role - The role of the current user.
 * @param {object} profileData - The profile data of the current user.
 * @returns {Promise<Array>} - List of best matches.
 */
export const findMatches = async (role, profileData) => {
  let targetCollection = "";
  if (role === "athlete") targetCollection = "mentors";
  else if (role === "mentor") targetCollection = "athletes";
  else if (role === "sponsor") targetCollection = "athletes";

  if (!targetCollection) return [];

  const querySnapshot = await getDocs(collection(db, "users"));
  const candidates = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.role !== targetCollection.slice(0, -1)) return;
    candidates.push(data);
  });

  return rankMatches(profileData, candidates);
};

/**
 * Uses Cosine Similarity for AI-based matchmaking.
 * @param {object} profileData - Current user's profile data.
 * @param {Array} candidates - List of possible matches.
 * @returns {Array} - Sorted list of matches.
 */
const rankMatches = (profileData, candidates) => {
  return candidates
    .map((candidate) => {
      let profileVector = [
        profileData.sport === candidate.sport ? 1 : 0,
        profileData.skillLevel === candidate.preferredAthleteLevel ? 1 : 0,
        profileData.preferredMentorTraits && candidate.specialization.includes(profileData.preferredMentorTraits) ? 1 : 0,
        profileData.location === candidate.location ? 1 : 0,
      ];

      let candidateVector = [1, 1, 1, 1]; // Ideal match vector

      let score = cosineSimilarity(profileVector, candidateVector);
      return { ...candidate, score };
    })
    .sort((a, b) => b.score - a.score); // Sort by highest similarity score
};

/**
 * Cosine Similarity Calculation.
 * @param {Array} vecA - First vector.
 * @param {Array} vecB - Second vector.
 * @returns {number} - Similarity score between 0 and 1.
 */
const cosineSimilarity = (vecA, vecB) => {
  let dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  let magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  let magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));

  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
};
