import { z } from "zod";
import { tool } from "ai";
import { appendRow } from "@/lib/google-sheets";

// 1. Define the Lead Schema
const leadSchema = z.object({
  name: z.string().describe("The full name of the user."),
  phone: z.string().describe("The phone number of the user."),
  email: z.string().email().describe("The email address of the user."),
  subject: z.string().describe("The main interest or subject of the inquiry."),
});

// 2. Define the Tool
export const saveLeadTool = tool({
  description:
    "Save a qualified lead to the database (Google Sheets). Use this ONLY when you have collected the Name, Phone, Email, and Subject from the user.",
  parameters: leadSchema,
  execute: async ({
    name,
    phone,
    email,
    subject,
  }: {
    name: string;
    phone: string;
    email: string;
    subject: string;
  }) => {
    try {
      const sheetId = process.env.GOOGLE_SHEET_LOGS_ID;
      if (!sheetId) throw new Error("Missing Sheet ID");

      // Append to the "Leads" or a specific sheet
      // Format: [Date, Name, Phone, Email, Subject]
      await appendRow(sheetId, "Leads!A:E", [
        new Date().toISOString(),
        name,
        phone,
        email,
        subject,
      ]);

      return { success: true, message: "Lead saved successfully." };
    } catch (error) {
      console.error("Failed to save lead:", error);
      return { success: false, message: "Failed to save lead." };
    }
  },
});
