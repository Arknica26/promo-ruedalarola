const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

async function test() {
  try {
    const keyPath = path.join(__dirname, "service-account.json");
    if (!fs.existsSync(keyPath)) {
      console.error("❌ Error: service-account.json not found.");
      process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 1. Test Write to Logs
    const logsId = "1Q1VveJEsQLsxEYdEilBFFIlrZlattbknHdHUzPB808g";
    console.log(`Testing WRITE to Logs (${logsId.substr(0, 10)}...)...`);
    await sheets.spreadsheets.values.append({
      spreadsheetId: logsId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [new Date().toISOString(), "SYSTEM", "✅ API Enabled & Connected"],
        ],
      },
    });
    console.log("✅ WRITE Success.");

    // 2. Test Read from Info
    const infoId = "1HxdqVzfl4xZdnAxsFmMMXFzlW8QvFddxwWCLrCBY-A8";
    console.log(`Testing READ from Info (${infoId.substr(0, 10)}...)...`);
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: infoId,
      range: "Sheet1!A:B",
    });
    console.log(
      "✅ READ Success. Rows found:",
      readRes.data.values ? readRes.data.values.length : 0,
    );
  } catch (error) {
    console.error("❌ Test Failed:");
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(
        `Message: ${JSON.stringify(error.response.data.error, null, 2)}`,
      );
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
}

test();
