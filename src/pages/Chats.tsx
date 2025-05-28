import React, { useState } from "react";

interface Message {
  id: number;
  sender: string;
  username: string;
  content: string;
  timestamp: string;
  isRead?: boolean;
}

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

const MessagingInterface: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string>("Andi Lane");
  const [newMessage, setNewMessage] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const messages: Message[] = [
    {
      id: 1,
      sender: "Phoenix Baker",
      username: "@phoenix",
      content:
        "Hey Olivia, The product galaxy A12 you have shared on the for sale free page is still availabl...",
      timestamp: "5min ago",
      isRead: false,
    },
    {
      id: 2,
      sender: "Andi Lane",
      username: "@andi",
      content: "Sure, 5PM works?",
      timestamp: "20min ago",
      isRead: true,
    },
    {
      id: 3,
      sender: "Mollie Hall",
      username: "@mollie",
      content:
        "I've just published the site again. Looks like it fixed it. How weird! I'll keep an eye on it...",
      timestamp: "1hr ago",
      isRead: true,
    },
    {
      id: 4,
      sender: "Rosalee Melvin",
      username: "@rosalee",
      content:
        "Hey Liv — just wanted to say thanks for chasing up the release for me. Really...",
      timestamp: "2hr ago",
      isRead: true,
    },
    {
      id: 5,
      sender: "Analah Whitten",
      username: "@analah",
      content:
        "Good news!! Jack accepted the offer. I've sent over a contract for him to review but...",
      timestamp: "2hr ago",
      isRead: true,
    },
    {
      id: 6,
      sender: "Mollie Hall",
      username: "@mollie",
      content:
        "I've just published the site again. Looks like it fixed it. How weird! I'll keep an eye on it...",
      timestamp: "1hr ago",
      isRead: true,
    },
  ];

  const chatMessages: ChatMessage[] = [
    {
      id: 1,
      sender: "You",
      content: "Hi Andi Lane, is the phone still available?",
      timestamp: "Thursday 11:41am",
      isOwn: true,
    },
    {
      id: 2,
      sender: "Andi Lane",
      content: "Yes, it is. Used for 6 months, still works great.",
      timestamp: "Thursday, 11:44 AM",
      isOwn: false,
    },
    {
      id: 3,
      sender: "Andi Lane",
      content: "Can we meet at City Mall today?",
      timestamp: "Today 2:20pm",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      content: "Sure, 5PM works?",
      timestamp: "Just now",
      isOwn: true,
    },
  ];

  const ProfilePicture: React.FC<{
    name: string;
    isOnline?: boolean;
    size?: "sm" | "md" | "lg";
  }> = ({ name, isOnline = false, size = "md" }) => {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    };

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    };

    const getBackgroundColor = (name: string) => {
      const colors = [
        "bg-[#6556FE0F]",
        "bg-green-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-yellow-500",
        "bg-red-500",
      ];
      const index = name.length % colors.length;
      return colors[index];
    };

    return (
      <div className="relative">
        <div
          className={`${sizeClasses[size]} ${getBackgroundColor(
            name
          )} rounded-full flex items-center justify-center text-white text-sm font-medium`}
        >
          {getInitials(name)}
        </div>
        {isOnline && (
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-[90vh] bg-gray-50">
      
      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative overflow-scroll z-30 w-80 bg-white border-r border-gray-200 h-full transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">Messages</h1>
            {isMobileMenuOpen &&   <svg  onClick={() => setIsMobileMenuOpen(false)} className="w-5 h-5 absolute right-0 top-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>}
            <span className="bg-[#6556FE] text-white text-xs px-2 py-1 rounded-full">
              40
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img className="cursor-pointer" src="/images/Actions.svg" />
            <img className="cursor-pointer" src="images/dots-vertical.svg" />
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none "
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img src="/images/search.svg" />
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 p-4 hover:bg-gray-50 cursor-pointer border-l-2 ${
                selectedChat === message.sender
                  ? "border-[#6556FE0F] bg-blue-50"
                  : "border-transparent"
              }`}
              onClick={() => {
                setSelectedChat(message.sender);
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="relative flex-shrink-0">
                <ProfilePicture
                  name={message.sender}
                  isOnline={message.sender === "Andi Lane"}
                />
                {!message.isRead && (
                  <div className="absolute top-7 -right-0.5 border border-white w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {message.sender}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{message.username}</p>
                <p className="text-sm text-gray-600 truncate">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ProfilePicture name="Andi Lane" isOnline={true} size="lg" />
            <div>
              <h2 className="text-lg font-semibold">Andi Lane</h2>
              <p className="text-sm text-gray-500">@andi</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img className="cursor-pointer" src="/images/phone-chat.svg" />
            <img className="cursor-pointer" src="/images/dots.svg" />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto relative p-4 space-y-4">
          
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isOwn ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                  message.isOwn ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                {!message.isOwn && (
                  <ProfilePicture name={message.sender} size="sm" />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.isOwn
                      ? "bg-[#6556FE0F] text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Timestamp separators */}
          <div className="flex justify-center">
            <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">
              Today
            </span>
          </div>

          {/* Typing indicator */}
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <ProfilePicture name="Andi Lane" size="sm" />
              <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <textarea
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-[#FAFAFA] focus:outline-none "
              />
            </div>
          </div>
          <div className="flex flex-row  items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <img src="/images/upload-image.svg" />
              <img src="/images/emojies.svg" />
              <img src="/images/dots.svg" />
            </div>
            <button className="bg-[#6556FE] rounded-full px-8 text-white p-2">
              Send
            </button>
          </div>
          {/* Reaction buttons */}
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;
