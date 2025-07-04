import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  avatar?: string;
}

interface ChatConversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  online: boolean;
}

export const ChatPage = (): JSX.Element => {
  const [newMessage, setNewMessage] = useState("");

  const conversations: ChatConversation[] = [
    {
      id: "1",
      name: "HR Team - Google",
      lastMessage: "Thank you for your application. We'll be in touch soon.",
      timestamp: "2 min ago",
      unread: 2,
      avatar: "G",
      online: true
    },
    {
      id: "2",
      name: "Recruiter - Microsoft",
      lastMessage: "Can we schedule a call for tomorrow?",
      timestamp: "1 hour ago",
      unread: 0,
      avatar: "M",
      online: true
    },
    {
      id: "3",
      name: "JobRaker Support",
      lastMessage: "Your premium subscription is about to expire.",
      timestamp: "3 hours ago",
      unread: 1,
      avatar: "JR",
      online: false
    },
    {
      id: "4",
      name: "Career Coach",
      lastMessage: "I've reviewed your resume. Here are my suggestions...",
      timestamp: "Yesterday",
      unread: 0,
      avatar: "CC",
      online: false
    }
  ];

  const messages: ChatMessage[] = [
    {
      id: "1",
      sender: "System",
      message: "Your application for the role of UI/UX designer at Google LLC requires your current street address.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: "2",
      sender: "System",
      message: "Your application for the role of UI/UX designer at Google LLC requires your current street address. Click on the button to fill in the form",
      timestamp: "10:35 AM",
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-black min-h-screen">
      {/* Main Chat Content */}
      <div className="flex-1 flex flex-col min-w-0 max-w-full mx-auto w-full sm:w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-black">
          {/* System Message 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="max-w-xs sm:max-w-md md:max-w-lg">
              <div className="bg-[#ffffff1a] text-white p-3 sm:p-4 rounded-2xl border border-[#ffffff33]">
                <p className="text-xs sm:text-sm leading-relaxed">
                  Your application for the role of UI/UX designer at Google LLC requires your current street address.
                </p>
              </div>
            </div>
          </motion.div>

          {/* System Message 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <div className="max-w-xs sm:max-w-md md:max-w-lg">
              <div className="bg-[#ffffff1a] text-white p-3 sm:p-4 rounded-2xl border border-[#ffffff33]">
                <p className="text-xs sm:text-sm leading-relaxed">
                  Your application for the role of UI/UX designer at Google LLC requires your current street address. Click on the button to fill in the form
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Message Input */}
        <div className="p-3 sm:p-4 md:p-6 bg-black">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex-1 relative">
              <Input
                placeholder="Type in a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="bg-[#ffffff1a] border-[#ffffff33] text-white placeholder:text-[#ffffff60] focus:border-[#1dff00] pr-10 sm:pr-12 py-2 sm:py-3 rounded-full text-xs sm:text-sm"
              />
              <Button
                onClick={handleSendMessage}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200 rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};