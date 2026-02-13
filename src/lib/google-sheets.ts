import { google } from "googleapis";

// Authenticate with Service Account
// Supports both local file (dev) and Env Var (prod/Vercel)
const auth = new google.auth.GoogleAuth({
  credentials: process.env.GOOGLE_SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
    : undefined,
  keyFile: !process.env.GOOGLE_SERVICE_ACCOUNT_JSON
    ? "service-account.json"
    : undefined,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

/**
 * Appends a row to the specified sheet.
 * @param spreadsheetId The ID of the Google Sheet
 * @param range The range/sheet name (e.g., "Sheet1!A:A")
 * @param values The row data to append
 */
export async function appendRow(
  spreadsheetId: string,
  range: string,
  values: string[],
) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error appending to Sheet:", error);
    throw error;
  }
}

/**
 * Reads all values from a specified range.
 * @param spreadsheetId The ID of the Google Sheet
 * @param range The range to read (e.g., "Sheet1!A:Z")
 */
export async function readSheet(spreadsheetId: string, range: string) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    return response.data.values || [];
  } catch (error) {
    console.error("Error reading Sheet:", error);
    throw error;
  }
}
