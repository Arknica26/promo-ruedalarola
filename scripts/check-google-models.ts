import fs from "fs";
import path from "path";

// Load env manually to avoid dotenv dependency issues if possible,
// though dotenv is likely installed.
function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      content.split("\n").forEach((line) => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          const value = match[2].trim().replace(/^["']|["']$/g, "");
          process.env[key] = value;
        }
      });
    }
  } catch (e) {
    console.error("Error loading .env.local", e);
  }
}

loadEnv();

async function checkModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ No GEMINI_API_KEY found in .env.local");
    return;
  }

  console.log("Checking Google AI Models via REST API...");

  // 1. List Models
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
    );
    if (!response.ok) {
      console.error(
        `❌ List Models Failed: ${response.status} ${response.statusText}`,
      );
      const errText = await response.text();
      console.error(errText);
    } else {
      const data = await response.json();
      console.log("\n--- Available Gemini Models ---");
      const models = data.models || [];
      const geminiModels = models.filter((m: any) => m.name.includes("gemini"));
      if (geminiModels.length === 0) {
        console.log("No models with 'gemini' in the name found.");
        console.log(
          "All models:",
          models.map((m: any) => m.name),
        );
      } else {
        geminiModels.forEach((m: any) => {
          console.log(`✅ ${m.name}`);
        });
      }
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }

  // 2. Test Specific Generation (Standard Flash)
  // Testing gemini-2.0-flash-exp (likely dead), gemini-1.5-flash (deprecated?), and the user suggested gemini-2.5-flash
  const modelsToTest = [
    "gemini-2.5-flash",
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-2.0-flash-exp",
  ];

  console.log("\n--- Testing Generation ---");

  for (const modelName of modelsToTest) {
    console.log(`\nTesting: ${modelName}`);
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Hello" }] }],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ SUCCESS: ${modelName} responded!`);
        // console.log(JSON.stringify(data, null, 2));
      } else {
        console.log(
          `❌ FAILED: ${modelName} - ${response.status} ${response.statusText}`,
        );
      }
    } catch (e) {
      console.log(`❌ ERROR: ${modelName}`, e);
    }
  }
}

checkModels();
