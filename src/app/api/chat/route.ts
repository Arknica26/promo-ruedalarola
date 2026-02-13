import { NextResponse } from "next/server";
import { processMessage } from "@/lib/ai-logic";
import { appendRow } from "@/lib/google-sheets";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1. Validate Input
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // 1. Basic Logging (Fire and Forget)
    const logsSheetId = process.env.GOOGLE_SHEET_LOGS_ID;
    if (logsSheetId) {
      // Append row: [Date, Role, Message]
      // We log the User message first
      try {
        await appendRow(logsSheetId, "Sheet1!A:C", [
          new Date().toISOString(),
          "USER",
          message,
        ]);
      } catch (e) {
        console.error("Failed to log user message", e);
      }
    }

    // 2. Process Message (Get Answer - Instant Local)
    const answer = await processMessage(message);

    // 3. Log Interaction (Async - we don't block response strictly on this success,
    // but in serverless we must await to ensure execution.
    // We run log calls in parallel to speed up.)
    if (logsSheetId) {
      const logUser = appendRow(logsSheetId, "Hoja 1!A:C", [
        new Date().toISOString(),
        "USER",
        message,
      ]);
      const logBot = appendRow(logsSheetId, "Hoja 1!A:C", [
        new Date().toISOString(),
        "BOT",
        answer,
      ]);

      // Best effort: wait for both but catch errors so we don't fail request
      Promise.all([logUser, logBot]).catch((err) =>
        console.error("Logging failed", err),
      );
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        answer:
          "Lo siento, tuve un problema de conexión. ¿Puedes intentar de nuevo?",
      },
      { status: 500 },
    );
  }
}
