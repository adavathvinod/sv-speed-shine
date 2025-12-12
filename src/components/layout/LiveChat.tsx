import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! 👋 Welcome to SV CARZ SPA. I'm your AI assistant. Ask me about:\n\n• Services & Pricing\n• PPF / Ceramic / Graphene Coating\n• Booking appointments\n• Service duration\n• Our packages", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: { message: userInput }
      });

      if (error) throw error;

      const botMessage: Message = { 
        id: Date.now() + 1, 
        text: data.response || data.error || "I couldn't process that. Please try again.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Unable to connect. Please try WhatsApp at +91 80191 30798."
      });
      const errorMessage: Message = { 
        id: Date.now() + 1, 
        text: "I'm having trouble connecting. Please try again or contact us via WhatsApp at +91 80191 30798.", 
        isBot: true 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
              <h3 className="font-bold">SV CARZ AI Assistant</h3>
              <p className="text-xs opacity-80">Powered by AI • Always ready</p>
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
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-card text-card-foreground rounded-2xl rounded-tl-none p-3">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
            placeholder="Ask about services, pricing..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button onClick={sendMessage} size="icon" className="shrink-0" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;