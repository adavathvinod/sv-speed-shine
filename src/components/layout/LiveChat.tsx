import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickResponses: Record<string, string> = {
  "pricing": "Our pricing varies by vehicle size:\n• Hatchback: Starting ₹3,999\n• Sedan: Starting ₹5,999\n• SUV: Starting ₹7,999\n\nVisit our Services page for detailed packages!",
  "ppf": "PPF (Paint Protection Film) protects your car from scratches, stone chips & UV damage. Prices start at ₹15,000 for partial coverage. Full car PPF starts at ₹45,000.",
  "ceramic": "Ceramic Coating provides 3-5 years of protection with hydrophobic properties. Prices: ₹8,999 - ₹24,999 depending on your vehicle size.",
  "booking": "You can book an appointment through our Booking page or WhatsApp us at +91 80191 30798. We're available 7 days a week!",
  "location": "We're located in Hyderabad. Click the location button on the right side of the screen for Google Maps directions!",
  "time": "Service times vary:\n• Basic wash: 1-2 hours\n• Detailing: 4-6 hours\n• Ceramic Coating: 1-2 days\n• PPF: 2-4 days",
  "default": "Thanks for reaching out! For immediate assistance, please WhatsApp us at +91 80191 30798 or call directly. Our team will be happy to help!"
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) return quickResponses.pricing;
  if (lower.includes("ppf") || lower.includes("protection film")) return quickResponses.ppf;
  if (lower.includes("ceramic") || lower.includes("coating")) return quickResponses.ceramic;
  if (lower.includes("book") || lower.includes("appointment")) return quickResponses.booking;
  if (lower.includes("where") || lower.includes("location") || lower.includes("address")) return quickResponses.location;
  if (lower.includes("time") || lower.includes("long") || lower.includes("duration")) return quickResponses.time;
  return quickResponses.default;
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! 👋 Welcome to SV CARZ SPA. How can I help you today?\n\nAsk about:\n• Pricing & Packages\n• PPF / Ceramic Coating\n• Booking appointments\n• Service duration", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = { id: Date.now() + 1, text: getResponse(input), isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed left-4 bottom-20 z-50 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      <div className={`fixed left-4 bottom-4 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">SV CARZ Support</h3>
              <p className="text-xs opacity-80">Usually replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/30">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                msg.isBot 
                  ? 'bg-card text-card-foreground rounded-tl-none' 
                  : 'bg-primary text-primary-foreground rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={sendMessage} size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;