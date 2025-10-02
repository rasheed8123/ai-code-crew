import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
  agents?: string[];
}

const AIPanel = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI code assistant. I can help you understand, refactor, debug, document, and test your code. What would you like to do?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const agentColors: Record<string, string> = {
    debugger: "bg-red-500/20 text-red-500 border-red-500/50",
    refactor: "bg-blue-500/20 text-blue-500 border-blue-500/50",
    doc: "bg-green-500/20 text-green-500 border-green-500/50",
    test: "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
    summarizer: "bg-purple-500/20 text-purple-500 border-purple-500/50",
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const agents = ["refactor", "doc", "summarizer"];
      const aiMessage: Message = {
        role: "assistant",
        content: "I've analyzed your code and here are my suggestions:\n\n1. Consider extracting the API call logic into a custom hook for reusability\n2. Add proper error boundaries around async operations\n3. Implement loading states with skeleton components\n\nWould you like me to show you the refactored code?",
        agents,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
      toast.success("Analysis complete!");
    }, 2000);
  };

  return (
    <div className="w-96 border-l border-border bg-card flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Multi-agent code analysis</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={`flex-1 ${message.role === "user" ? "flex justify-end" : ""}`}>
              <Card
                className={`p-3 ${
                  message.role === "user"
                    ? "bg-primary/20 border-primary/30 max-w-[80%]"
                    : "bg-secondary border-border"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                {message.agents && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.agents.map((agent) => (
                      <Badge
                        key={agent}
                        variant="outline"
                        className={agentColors[agent]}
                      >
                        {agent}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <Card className="p-3 bg-secondary border-border">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about the code..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="bg-secondary border-border"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gradient-primary hover:opacity-90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIPanel;
