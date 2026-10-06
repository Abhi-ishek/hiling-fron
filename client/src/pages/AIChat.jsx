
import React, { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 How can I help you today?",
    },
    {
        sender: "user",
        text: " yes good morning ji "
    },
    {
        sender: "ai",
        text: "Bol na ji "  
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/ai/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("AI Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, I'm unable to respond right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/50"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <FaWhatsapp size={32} />

            <Sparkles
              size={14}
              className="absolute -right-3 -top-3 animate-pulse"
            />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[370px] flex-col overflow-hidden rounded-2xl border border-yellow-500/20 bg-white shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500 to-yellow-700 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot size={23} />
              </div>

              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-yellow-100">
                  Online • Ready to help
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "user"
                      ? "rounded-br-none bg-yellow-600 text-white"
                      : "rounded-bl-none bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-none bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                  <div className="flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    >
                      ●
                    </span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    >
                      ●
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-yellow-500">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-sm outline-none"
                disabled={loading}
              />

              <button
                onClick={sendMessage}
                disabled={!message.trim() || loading}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-600 text-white transition hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;