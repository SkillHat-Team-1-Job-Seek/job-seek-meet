import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

import DashboardHeader from "./DashboardHeader";

// Mock API functions - Simulate fetching conversations

const fetchConversations = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,

      type: "individual",

      name: "Flora Zoe",

      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150",

      lastMessage:
        "Nice to meet you! Always great to connect with someone in the same field.",

      timestamp: "02:06 PM, Sat",

      unread: true,
    },

    {
      id: 2,

      type: "group",

      name: "Frontend Developers",

      avatar:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=150&h=150",

      participants: 18,

      lastMessage: "Alex: I just pushed the new component library",

      timestamp: "Yesterday",

      unread: false,
    },

    {
      id: 3,

      type: "individual",

      name: "David Johnson",

      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",

      lastMessage: "Thanks for the recommendation!",

      timestamp: "Yesterday",

      unread: false,
    },
  ];
};

// Mock API functions - Simulate fetching messages for a conversation

const fetchMessages = async (conversationId) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const messages = [
    {
      id: 1,

      sender: { id: 1, name: "Malik", avatar: "" },

      content:
        "Hey! Looks like we're both in the Business Analysis track — I'm Malik. Just joined JobBuddies last week 😊",

      timestamp: "02:06 PM, Sat",

      isMe: true,
    },

    {
      id: 2,

      sender: { id: 2, name: "Flora Zoe", avatar: "" },

      content:
        "Hi Malik! I'm Flora. Nice to meet you! Always great to connect with someone in the same field.",

      timestamp: "02:06 PM, Sat",

      isMe: false,
    },

    {
      id: 3,

      sender: { id: 1, name: "Malik", avatar: "" },

      content:
        "Totally! I've been deep in job apps lately — it's a bit of a grind. How's your search going?",

      timestamp: "02:06 PM, Sat",

      isMe: true,
    },

    {
      id: 4,

      sender: { id: 2, name: "Flora Zoe", avatar: "" },

      content:
        "Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this! 💪",

      timestamp: "02:06 PM, Sat",

      isMe: false,
    },

    {
      id: 5,

      sender: { id: 1, name: "Malik", avatar: "" },

      content:
        "Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?",

      timestamp: "02:06 PM, Sat",

      isMe: true,
    },

    {
      id: 6,

      sender: { id: 2, name: "Flora Zoe", avatar: "" },

      content:
        "Yes, please! I've been using a messy Google Sheet so I'd love a better system 😅",

      timestamp: "02:06 PM, Sat",

      isMe: false,
    },

    {
      id: 7,

      sender: { id: 1, name: "Malik", avatar: "" },

      content:
        "Here you go: [Notion link] Also, not sure if you've seen this, but SkillHat is offering free Masterclasses for Business Analysts; looks like a great fit for you.",

      timestamp: "02:06 PM, Sat",

      isMe: true,
    },

    {
      id: 8,

      sender: { id: 2, name: "Flora Zoe", avatar: "" },

      content: "Ahhh, I love SkillHat. Thank you! I'll apply tonight! 🙌",

      timestamp: "02:06 PM, Sat",

      isMe: false,
    },
  ];

  return messages;
};

const Messages = () => {
  const [conversations, setConversations] = useState([]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const [messages, setMessages] = useState([]);

  const [messageInput, setMessageInput] = useState("");

  const [loadingConversations, setLoadingConversations] = useState(true);

  const [loadingMessages, setLoadingMessages] = useState(false);

  // Fetch conversations on mount

  useEffect(() => {
    const loadConversations = async () => {
      setLoadingConversations(true);

      const data = await fetchConversations();

      setConversations(data);

      setLoadingConversations(false);
    };

    loadConversations();
  }, []);

  // Fetch messages when a conversation is selected

  useEffect(() => {
    if (selectedConversation) {
      const loadMessages = async () => {
        setLoadingMessages(true);

        const data = await fetchMessages(selectedConversation.id);

        setMessages(data);

        setLoadingMessages(false);
      };

      loadMessages();
    }
  }, [selectedConversation]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!messageInput.trim()) return;

    console.log(
      `Sending message: ${messageInput} to conversation ${selectedConversation.id}`
    );

    setMessages([
      ...messages,

      {
        id: messages.length + 1,

        sender: { id: 1, name: "Malik", avatar: "" },

        content: messageInput,

        timestamp:
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) +
          ", " +
          new Date().toLocaleDateString("en-US", { weekday: "short" }),

        isMe: true,
      },
    ]);

    setMessageInput("");
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <DashboardHeader />

      <div className="flex h-screen bg-gray-100 gap-8">
        {/* Sidebar */}

        <Sidebar className="w-80 flex flex-col bg-gray-50" />

        {/* Main Content */}

        <div className="flex-1 flex p-0 rounded-lg border-2 border-custom-primary-teal shadow-md overflow-y-auto gap-8">
          {/* Conversations Sidebar */}

          <div className="w-80 flex flex-col h-full">
            <div className="p-4 border-b bg-white">
              <h2 className="text-lg font-semibold mb-2">Messages</h2>
            </div>

            {loadingConversations ? (
              <div className="flex items-center justify-center h-full">
                <svg
                  className="animate-spin h-8 w-8 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            ) : conversations.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center text-gray-500">
                <svg
                  className="h-12 w-12 text-gray-400 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <p>No conversations found</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center p-3 gap-3 hover:bg-gray-100 cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate text-sm">
                          {conversation.name}
                        </p>

                        <span className="text-xs text-gray-500">
                          {conversation.timestamp}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 truncate mt-0.5">
                        {conversation.lastMessage}
                      </p>
                    </div>

                    {conversation.unread && (
                      <div className="h-2 w-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Window */}

          <div className="flex-1 flex flex-col h-full">
            {selectedConversation ? (
              <>
                {/* Chat Header */}

                <div className="p-4 bg-custom-primary-teal text-center">
                  <h2 className="text-xl font-bold text-white outline outline-2 outline-yellow-400">
                    Chat with Buddy ({selectedConversation.name})
                  </h2>
                </div>

                {/* Messages */}

                <div className="flex-1 p-4 bg-white overflow-y-auto">
                  {loadingMessages ? (
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="animate-spin h-8 w-8 text-teal-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`p-3 rounded-lg ${
                            message.isMe
                              ? "bg-yellow-50 ml-2"
                              : "bg-yellow-100 mr-2"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>

                          <div className="flex justify-end mt-1">
                            <span className="text-xs text-gray-500">
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Input */}

                <div className="p-4 bg-white border-t flex items-center">
                  <input
                    type="text"
                    placeholder="Type your Message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 p-2 bg-purple-50 text-gray-700 rounded-lg focus:outline-none"
                  />

                  <button
                    type="submit"
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className="ml-2 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500">
                <svg
                  className="h-16 w-16 text-gray-300 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <h3 className="text-xl font-medium text-gray-800">
                  Your Messages
                </h3>

                <p className="mt-2 max-w-md">
                  Select a conversation to start chatting.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // return (

  // <div className="flex-1 p-8 overflow-y-auto">

  // <DashboardHeader />

  // <div className="flex h-screen bg-gray-100 gap-8">

  // {/* Sidebar */}

  // <Sidebar className="w-80 flex flex-col bg-gray-50" />

  // {/* Main Content */}

  // <div className="flex-1 p-8 rounded-lg border-2 border-green-500 shadow-md overflow-y-auto">

  // {/* Conversations Sidebar */}

  // <div className="w-80 flex flex-col">

  // <div className="p-4 border-b bg-white">

  // <h2 className="text-lg font-semibold mb-2">Messages</h2>

  // </div>

  // {loadingConversations ? (

  // <div className="flex items-center justify-center h-full">

  // <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

  // <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

  // <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>

  // </svg>

  // </div>

  // ) : conversations.length === 0 ? (

  // <div className="flex flex-col items-center justify-center h-full p-4 text-center text-gray-500">

  // <svg className="h-12 w-12 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

  // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />

  // </svg>

  // <p>No conversations found</p>

  // </div>

  // ) : (

  // <div className="flex-1 overflow-y-auto">

  // {conversations.map((conversation) => (

  // <div

  // key={conversation.id}

  // className={`flex items-center p-3 gap-3 hover:bg-gray-100 cursor-pointer transition-colors ${

  // selectedConversation?.id === conversation.id ? "bg-gray-100" : ""

  // }`}

  // onClick={() => setSelectedConversation(conversation)}

  // >

  // <img

  // src={conversation.avatar}

  // alt={conversation.name}

  // className="h-10 w-10 rounded-full object-cover flex-shrink-0"

  // />

  // <div className="flex-1 min-w-0">

  // <div className="flex items-center justify-between">

  // <p className="font-medium truncate text-sm">{conversation.name}</p>

  // <span className="text-xs text-gray-500">{conversation.timestamp}</span>

  // </div>

  // <p className="text-xs text-gray-600 truncate mt-0.5">{conversation.lastMessage}</p>

  // </div>

  // {conversation.unread && (

  // <div className="h-2 w-2 bg-teal-500 rounded-full flex-shrink-0"></div>

  // )}

  // </div>

  // ))}

  // </div>

  // )}

  // </div>

  // {/* Chat Window */}

  // <div className="flex-1 flex flex-col">

  // {selectedConversation ? (

  // <>

  // {/* Chat Header */}

  // <div className="p-4 bg-custom-primary-teal text-center">

  // <h2 className="text-xl font-bold text-white outline outline-2 outline-yellow-400">

  // Chat with Buddy ({selectedConversation.name})

  // </h2>

  // </div>

  // {/* Messages */}

  // <div className="flex-1 p-4 bg-white overflow-y-auto">

  // {loadingMessages ? (

  // <div className="flex items-center justify-center h-full">

  // <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

  // <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

  // <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>

  // </svg>

  // </div>

  // ) : (

  // <div className="space-y-4">

  // {messages.map((message) => (

  // <div

  // key={message.id}

  // className={`p-3 rounded-lg ${

  // message.isMe ? "bg-yellow-50 ml-2" : "bg-yellow-100 mr-2"

  // }`}

  // >

  // <p className="text-sm">{message.content}</p>

  // <div className="flex justify-end mt-1">

  // <span className="text-xs text-gray-500">{message.timestamp}</span>

  // </div>

  // </div>

  // ))}

  // </div>

  // )}

  // </div>

  // {/* Message Input */}

  // <div className="p-4 bg-white border-t flex items-center">

  // <input

  // type="text"

  // placeholder="Type your Message..."

  // value={messageInput}

  // onChange={(e) => setMessageInput(e.target.value)}

  // className="flex-1 p-2 bg-purple-50 text-gray-700 rounded-lg focus:outline-none"

  // />

  // <button

  // type="submit"

  // onClick={handleSendMessage}

  // disabled={!messageInput.trim()}

  // className="ml-2 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"

  // >

  // Send

  // </button>

  // </div>

  // </>

  // ) : (

  // <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500">

  // <svg className="h-16 w-16 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

  // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />

  // </svg>

  // <h3 className="text-xl font-medium text-gray-800">Your Messages</h3>

  // <p className="mt-2 max-w-md">

  // Select a conversation to start chatting.

  // </p>

  // </div>

  // )}

  // </div>

  // </div>

  // </div>

  // </div>

  // );

  // return (

  // <div className="flex-1 p-8 overflow-y-auto">

  // <DashboardHeader />

  // <div className="flex h-screen bg-gray-100">

  // {/* Sidebar */}

  // <Sidebar />

  // {/* Main Content */}

  // <div className="flex-1 p-8 rounded-lg border-2 border-green-500 shadow-md overflow-y-auto">

  // {/* Conversations Sidebar */}

  // <div className="w-80 flex flex-col border-r bg-gray-50">

  // <div className="p-4 border-b bg-white">

  // <h2 className="text-lg font-semibold mb-2">Messages</h2>

  // </div>

  // {loadingConversations ? (

  // <div className="flex items-center justify-center h-full">

  // <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

  // <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

  // <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>

  // </svg>

  // </div>

  // ) : conversations.length === 0 ? (

  // <div className="flex flex-col items-center justify-center h-full p-4 text-center text-gray-500">

  // <svg className="h-12 w-12 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

  // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />

  // </svg>

  // <p>No conversations found</p>

  // </div>

  // ) : (

  // <div className="flex-1 overflow-y-auto">

  // {conversations.map((conversation) => (

  // <div

  // key={conversation.id}

  // className={`flex items-center p-3 gap-3 hover:bg-gray-100 cursor-pointer transition-colors ${

  // selectedConversation?.id === conversation.id ? "bg-gray-100" : ""

  // }`}

  // onClick={() => setSelectedConversation(conversation)}

  // >

  // <img

  // src={conversation.avatar}

  // alt={conversation.name}

  // className="h-10 w-10 rounded-full object-cover flex-shrink-0"

  // />

  // <div className="flex-1 min-w-0">

  // <div className="flex items-center justify-between">

  // <p className="font-medium truncate text-sm">{conversation.name}</p>

  // <span className="text-xs text-gray-500">{conversation.timestamp}</span>

  // </div>

  // <p className="text-xs text-gray-600 truncate mt-0.5">{conversation.lastMessage}</p>

  // </div>

  // {conversation.unread && (

  // <div className="h-2 w-2 bg-teal-500 rounded-full flex-shrink-0"></div>

  // )}

  // </div>

  // ))}

  // </div>

  // )}

  // </div>

  // {/* Chat Window */}

  // <div className="flex-1 flex flex-col">

  // {selectedConversation ? (

  // <>

  // {/* Chat Header */}

  // <div className="p-4 bg-green-100 text-center">

  // <h2 className="text-xl font-bold text-white outline outline-2 outline-yellow-400">

  // Chat with Buddy ({selectedConversation.name})

  // </h2>

  // </div>

  // {/* Messages */}

  // <div className="flex-1 p-4 bg-white overflow-y-auto">

  // {loadingMessages ? (

  // <div className="flex items-center justify-center h-full">

  // <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

  // <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

  // <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>

  // </svg>

  // </div>

  // ) : (

  // <div className="space-y-4">

  // {messages.map((message) => (

  // <div

  // key={message.id}

  // className={`p-3 rounded-lg ${

  // message.isMe ? "bg-yellow-50 ml-2" : "bg-yellow-100 mr-2"

  // }`}

  // >

  // <p className="text-sm">{message.content}</p>

  // <div className="flex justify-end mt-1">

  // <span className="text-xs text-gray-500">{message.timestamp}</span>

  // </div>

  // </div>

  // ))}

  // </div>

  // )}

  // </div>

  // {/* Message Input */}

  // <div className="p-4 bg-white border-t flex items-center">

  // <input

  // type="text"

  // placeholder="Type your Message..."

  // value={messageInput}

  // onChange={(e) => setMessageInput(e.target.value)}

  // className="flex-1 p-2 bg-purple-50 text-gray-700 rounded-lg focus:outline-none"

  // />

  // <button

  // type="submit"

  // onClick={handleSendMessage}

  // disabled={!messageInput.trim()}

  // className="ml-2 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"

  // >

  // Send

  // </button>

  // </div>

  // </>

  // ) : (

  // <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500">

  // <svg className="h-16 w-16 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

  // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />

  // </svg>

  // <h3 className="text-xl font-medium text-gray-800">Your Messages</h3>

  // <p className="mt-2 max-w-md">

  // Select a conversation to start chatting.

  // </p>

  // </div>

  // )}

  // </div>

  // </div>

  // </div>

  // </div>

  // );
};

export default Messages;
