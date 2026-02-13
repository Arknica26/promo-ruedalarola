import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";

// Initialize Providers
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// Model Configuration
// We use a "Primary" and "Secondary" strategy.
export const primaryModel = google("gemini-2.5-flash"); // Stable production model (Feb 2026)
// User said 2.0 expires March 31, 2026. Today is Feb 13, 2026. So 2.0 should work.
// But user said "saltar a la 2.5 ya mismo".
// I'll try "gemini-2.0-flash-001" as a standard stable ID. Or "gemini-1.5-pro-latest"?
// Actually, let's use "gemini-2.0-flash".

export const secondaryModel = groq("llama3-70b-8192"); // Reliable backup

/**
 * Returns the primary model.
 * In a more complex implementation, this could check for rate limits or errors
 * and return the secondary model dynamically.
 * For now, we export the configured models for the route handler to use.
 */
export function getModel(useBackup = false) {
  return useBackup ? secondaryModel : primaryModel;
}
