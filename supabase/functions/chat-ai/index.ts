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
            content: `You are a helpful customer service assistant for SK CARZ Detailing Studio, a premium car detailing and customization studio in Hyderabad.

SERVICES:
- Paint Protection Film (PPF): Starting ₹60,000
- Ceramic Coating: Starting ₹10,000
- Teflon Coating: Contact for pricing
- Custom Seat Covers: Contact for pricing
- Car Matting: Contact for pricing
- Interior Spa & Cleaning: Starting ₹2,500
- Exterior Cleaning & Detailing: Starting ₹3,500
- Window Tinting (Legal black tint): Starting ₹3,000
- Custom Wrapping: Contact for pricing
- Denting & Painting: Contact for pricing
- Audio Upgrade: Contact for pricing
- Mud Flaps: Contact for pricing
- Premium Car Wash: Starting ₹500
- Accessories: Contact for pricing

PACKAGES:
- Essential (₹4,999): Exterior wash, interior cleaning, dashboard polish, tire dressing
- Premium (₹9,999): Full detailing, interior deep clean, paint correction, ceramic spray
- Ultimate (₹34,999): Complete PPF, ceramic coating, full interior restoration

CONTACT: +91 77807 62489
EMAIL: skcarz@gmail.com
LOCATION: 215, ZP Rd, Valmiki Ambedkar Awas Yojana, Sriramana Colony, Hastinapuram, Hyderabad, Telangana 500079
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
    const aiResponse = data.choices?.[0]?.message?.content || "I apologize, I couldn't process that. Please contact us at +91 77807 62489.";
    
    console.log("AI response:", aiResponse);

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat AI error:", error);
    return new Response(JSON.stringify({ 
      error: "Something went wrong. Please try again or contact us via WhatsApp at +91 77807 62489." 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
