import { streamText, tool as createTool } from "ai";
import { primaryModel, secondaryModel } from "@/lib/ai/model-rotation";
import { saveLeadTool } from "@/lib/ai/tools";
import { readFileSync } from "fs";
import path from "path";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  console.log("--- Chat API Request Started ---");
  try {
    const { messages } = await req.json();
    console.log(`Received ${messages.length} messages`);

    // 1. Load Knowledge Base
    const kbPath = path.join(process.cwd(), "conocimiento_empresa.md");
    const knowledgeBase = readFileSync(kbPath, "utf-8");
    console.log("Knowledge Base loaded successfully");

    // 2. Define System Prompt
    const systemPrompt = `
      Eres el asistente virtual de "Rueda La Rola Media". 
      Tu objetivo principal es asistir al usuario y, si muestra interés, obtener su Nombre, Teléfono, Correo y Asunto.
      
      BASE DE CONOCIMIENTO (La Biblia):
      ${knowledgeBase}
      
      INSTRUCCIONES:
      - Responde siempre basándote en la "La Biblia". No inventes información.
      - Si la respuesta no está en el texto, ofrece contactar a un humano.
      - Sé amable, persuasivo y profesional.
      - Si el usuario te da sus datos (Nombre, Teléfono, Email, Asunto), usa la herramienta "saveLeadTool" inmediatamente para guardarlos.
      - IMPORTANTE: Si falla el modelo principal, no lo menciones, solo sigue conversando.
    `;

    // 3. Attempt with Primary Model (Gemini)
    try {
      console.log("Attempting Primary Model (Gemini)...");
      const result = await streamText({
        model: primaryModel,
        system: systemPrompt,
        messages,
        tools: {
          saveLead: saveLeadTool,
        },
        maxRetries: 0,
        onFinish: ({ text, toolCalls, toolResults, finishReason, usage }) => {
          console.log("Primary Model Finish:", {
            text,
            toolCalls,
            toolResults,
            finishReason,
            usage,
          });
        },
      });
      console.log("Primary Model responded successfully");

      // Falling back to toUIMessageStreamResponse (standard data stream)
      return result.toUIMessageStreamResponse();
    } catch (primaryError) {
      console.error(
        "Primary Model Failed, switching to Secondary:",
        primaryError,
      );

      // 4. Fallback to Secondary Model (Groq/Llama)
      console.log("Attempting Secondary Model (Groq)...");
      const result = await streamText({
        model: secondaryModel,
        system: systemPrompt,
        messages,
        tools: {
          saveLead: saveLeadTool,
        },
        onFinish: ({ text, toolCalls, toolResults, finishReason, usage }) => {
          console.log("Secondary Model Finish:", {
            text,
            toolCalls,
            toolResults,
            finishReason,
            usage,
          });
        },
      });
      console.log("Secondary Model responded successfully");

      return result.toUIMessageStreamResponse();
    }
  } catch (error) {
    console.error("Chat API Fatal Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  } finally {
    console.log("--- Chat API Request Ended ---");
  }
}
