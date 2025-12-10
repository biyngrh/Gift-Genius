import { GoogleGenAI, Type } from "@google/genai";
import { GiftRecommendation, Language } from "../types";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface GenerateOptions {
  description: string;
  imageBase64?: string; // Optional base64 image string
  occasion: string;
  budget: string;
  language: Language;
}

export const generateGiftIdeas = async ({ 
  description, 
  imageBase64, 
  occasion, 
  budget,
  language
}: GenerateOptions): Promise<GiftRecommendation[]> => {
  try {
    const model = "gemini-2.5-flash";

    const isId = language === 'id';
    
    // Construct the prompt context based on language
    let promptText = "";

    if (isId) {
      promptText = `
      Bertindaklah sebagai Orakel Kado (Gift Oracle).
      
      KONTEKS:
      - Acara: ${occasion}
      - Batas Anggaran: ${budget}
      - Deskripsi Penerima: "${description}"
      - Bahasa Output: Bahasa Indonesia
      
      TUGAS:
      Analisis input (dan gambar jika ada) untuk mendeteksi "Aura" atau estetika penerima.
      Berikan TEPAT 3 rekomendasi kado yang spesifik.
      
      KENDALA:
      - Jika acaranya 'Permintaan Maaf', saran harus sentimental/penuh usaha.
      - Jika anggaran 'Mode Sultan', sarankan barang mewah.
      - Jika ada gambar, gunakan isyarat visual (warna, objek, gaya) untuk mencocokkan kado.
      - Gunakan Bahasa Indonesia yang luwes dan sedikit puitis/ajaib untuk alasannya.
      `;
    } else {
      promptText = `
      Act as a Gift Oracle.
      
      CONTEXT:
      - Occasion: ${occasion}
      - Budget Limit: ${budget}
      - Recipient Description: "${description}"
      - Output Language: English
      
      TASK:
      Analyze inputs (and image if present) to detect the recipient's "Aura" or aesthetic.
      Provide EXACTLY 3 specific gift recommendations.
      
      CONSTRAINTS:
      - If occasion is 'Apology', suggestions must be sentimental/effortful.
      - If budget is 'Sultan Mode', suggest luxury items.
      - If image exists, use visual cues (colors, objects, style) to match gifts.
      - Use fluent, slightly poetic/magical English for the reasoning.
      `;
    }

    const parts: any[] = [{ text: promptText }];

    if (imageBase64) {
      const base64Data = imageBase64.split(',')[1] || imageBase64;
      parts.push({
        inlineData: {
          mimeType: "image/jpeg", 
          data: base64Data
        }
      });
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts },
      config: {
        systemInstruction: isId 
          ? "Kamu adalah asisten belanja yang empatik dan ajaib. Berikan rekomendasi spesifik dalam format JSON."
          : "You are an empathetic and magical shopping assistant. Provide specific recommendations in JSON format.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: isId ? "Nama spesifik produk (Bahasa Indonesia)." : "Specific product name (English)."
              },
              reason: {
                type: Type.STRING,
                description: isId 
                  ? "Penjelasan emosional menghubungkan kado dengan aura (Bahasa Indonesia)." 
                  : "Emotional explanation connecting the gift to the aura (English)."
              },
              price_range: {
                type: Type.STRING,
                description: isId ? "Estimasi harga dalam IDR." : "Estimated price in USD/Local Currency."
              }
            },
            required: ["name", "reason", "price_range"],
            propertyOrdering: ["name", "reason", "price_range"]
          }
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as GiftRecommendation[];
      return data;
    } else {
      throw new Error("No data returned from AI");
    }

  } catch (error) {
    console.error("Error generating gifts:", error);
    throw error;
  }
};