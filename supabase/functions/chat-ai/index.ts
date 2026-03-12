import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received message:", message);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a helpful customer service assistant for SV CARZ SPA, a premium car detailing studio in Hyderabad.

SERVICES & PRICING:
- PPF (Paint Protection Film): ₹15,000 - ₹1,20,000 depending on coverage
- Ceramic Coating: ₹8,999 - ₹24,999 based on vehicle size
- Graphene Coating: ₹12,999 - ₹29,999
- Interior Detailing: ₹2,999 - ₹7,999
- Exterior Detailing: ₹1,999 - ₹5,999
- Car Decor: ₹999 - ₹15,000

VEHICLE PRICING TIERS:
- Hatchback: Base price
- Sedan: +20% from base
- SUV/MUV: +40% from base
- Luxury/Sports: +60% from base

PACKAGES:
- Essential (₹9,999): Exterior wash, interior cleaning, basic ceramic
- Premium (₹19,999): Full detailing, premium ceramic, engine bay
- Ultimate (₹39,999): Complete PPF, graphene coating, full interior

CONTACT: +91 80191 30798
LOCATION: Hyderabad
HOURS: 9 AM - 8 PM, 7 days a week

Be friendly, professional, and helpful. Keep responses concise but informative. Encourage booking appointments for detailed consultations.`
          },
          { role: "user", content: message }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: "We're experiencing high demand. Please try again in a moment." 
        }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          error: "Service temporarily unavailable. Please contact us via WhatsApp." 
        }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "I apologize, I couldn't process that. Please contact us at +91 80191 30798.";
    
    console.log("AI response:", aiResponse);

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat AI error:", error);
    return new Response(JSON.stringify({ 
      error: "Something went wrong. Please try again or contact us via WhatsApp at +91 80191 30798." 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});