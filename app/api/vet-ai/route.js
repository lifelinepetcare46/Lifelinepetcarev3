// app/api/vet-ai/route.js
import { NextResponse } from "next/server";
import { buildVetPrompt } from "@/lib/VetPrompt";

/* 👉 FREE & WORKING OPTION */
const HF_API = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

export async function POST(req) {
  try {
    const body = await req.json();
    const prompt = buildVetPrompt(body);

    const response = await fetch(HF_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HF_API_KEY}`, // free key
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.7,
          return_full_text: false
        }
      }),
    });

    const data = await response.json();

    const reply =
      data?.[0]?.generated_text ||
      "Samajh aa raha hai aap concern me ho. Safe side ke liye vet ko dikhana best rahega.";

    return NextResponse.json({ reply });

  } catch (err) {
    console.error("Vet AI Error:", err);
    return NextResponse.json({
      reply:
        "Abhi system thoda busy hai. Agar pet uncomfortable lag raha ho to please vet ko call karein.",
    });
  }
}
