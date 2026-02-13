import { KNOWLEDGE_BASE } from "./knowledge-base";

// Interface for Knowledge Base Items
interface KBItem {
  keywords: string[];
  answer: string;
}

/**
 * Processes the user message using Local Knowledge Base (Instant).
 * @param message User's input
 * @param _kbSpreadsheetId Ignored (we use local file now)
 */
export async function processMessage(
  message: string,
  _kbSpreadsheetId?: string,
) {
  const lowerMsg = message.toLowerCase();

  // 1. Search in Local Knowledge Base
  const match = KNOWLEDGE_BASE.find((item) =>
    item.keywords.some((k) => lowerMsg.includes(k)),
  );

  if (match) {
    return match.answer;
  }

  // 2. Fallback / Default
  return "Entiendo tu interés. Soy una IA entrenada para ventas rápidas. ¿Te gustaría hablar directamente con un experto por WhatsApp para resolver tus dudas específicas?";
}
