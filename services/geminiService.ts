import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists to prevent immediate crashes in environments without keys set yet
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Erreur de configuration : Clé API manquante. Veuillez configurer process.env.API_KEY.";
  }

  try {
    const model = ai.models;
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Tu es "Ada", une assistante virtuelle experte en histoire de l'informatique et militante pour la place des femmes dans le numérique. 
        Ton but est d'éduquer, d'inspirer et d'informer sur les contributions des femmes à la technologie.
        Sois concise, encourageante et utilise un ton moderne. Si on te pose une question hors sujet, ramène gentiment la conversation vers la technologie ou les femmes dans les sciences.`,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA. Veuillez réessayer plus tard.";
  }
};
