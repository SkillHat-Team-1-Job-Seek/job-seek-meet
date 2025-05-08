import React, { useState, useEffect } from 'react';

// Mock API functions - Simulate fetching conversations
const fetchConversations = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { 
      id: 1, 
      type: "individual", 
      name: "Flora Zoe", 
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150", 
      lastMessage: "Nice to meet you! Always great to connect with someone in the same field.", 
      timestamp: "02:06 PM, Sat",
      unread: true
    },
    { 
      id: 2, 
      type: "group", 
      name: "Frontend Developers", 
      avatar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=150&h=150", 
      participants: 18, 
      lastMessage: "Alex: I just pushed the new component library", 
      timestamp: "Yesterday",
      unread: false
    },
    { 
      id: 3, 
      type: "individual", 
      name: "David Johnson", 
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150", 
      lastMessage: "Thanks for the recommendation!", 
      timestamp: "Yesterday",
      unread: false
    },
  ];
};

// Mock API functions - Simulate fetching messages for a conversation
const fetchMessages = async (conversationId) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const messages = [
    {
      id: 1,
      sender: { id: 1, name: "Malik", avatar: "" },
      content: "Hey! Looks like we're both in the Business Analysis track — I'm Malik. Just joined JobBuddies last week 😊",
      timestamp: "02:06 PM, Sat",
      isMe: true
    },
    {
      id: 2,
      sender: { id: 2, name: "Flora Zoe", avatar: "" },
      content: "Hi Malik! I'm Flora. Nice to meet you! Always great to connect with someone in the same field.",
      timestamp: "02:06 PM, Sat",
      isMe: false
    },
    {
      id: 3,
      sender: { id: 1, name: "Malik", avatar: "" },
      content: "Totally! I've been deep in job apps lately — it's a bit of a grind. How's your search going?",
      timestamp: "02:06 PM, Sat",
      isMe: true
    },
    {
      id: 4,
      sender: { id: 2, name: "Flora Zoe", avatar: "" },
      content: "Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this! 💪",
      timestamp: "02:06 PM, Sat",
      isMe: false
    },
    {
      id: 5,
      sender: { id: 1, name: "Malik", avatar: "" },
      content: "Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?",
      timestamp: "02:06 PM, Sat",
      isMe: true
    },
    {
      id: 6,
      sender: { id: 2, name: "Flora Zoe", avatar: "" },
      content: "Yes, please! I've been using a messy Google Sheet so I'd love a better system 😅",
      timestamp: "02:06 PM, Sat",
      isMe: false
    },
    {
      id: 7,
      sender: { id: 1, name: "Malik", avatar: "" },
      content: "Here you go: [Notion link] Also, not sure if you've seen this, but SkillHat is offering free Masterclasses for Business Analysts; looks like a great fit for you.",
      timestamp: "02:06 PM, Sat",
      isMe: true
    },
    {
      id: 8,
      sender: { id: 2, name: "Flora Zoe", avatar: "" },
      content: "Ahhh, I love SkillHat. Thank you! I'll apply tonight! 🙌",
      timestamp: "02:06 PM, Sat",
      isMe: false
    },
  ];
  return messages;
};

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
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
    console.log(`Sending message: ${messageInput} to conversation ${selectedConversation.id}`);
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: { id: 1, name: "Malik", avatar: "" },
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", " + new Date().toLocaleDateString('en-US', { weekday: 'short' }),
        isMe: true,
      },
    ]);
    setMessageInput('');
  };

  return (
    <div className="flex h-[calc(100vh-120px)] rounded-lg border-2 border-green-500 shadow-md overflow-hidden">
      {/* Conversations Sidebar */}
      <div className="w-80 flex flex-col border-r bg-gray-50">
        <div className="p-4 border-b bg-white">
          <h2 className="text-lg font-semibold mb-2">Messages</h2>
        </div>
        {loadingConversations ? (
          <div className="flex items-center justify-center h-full">
            <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          </div>
        ) : conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center text-gray-500">
            <svg className="h-12 w-12 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>No conversations found</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center p-3 gap-3 hover:bg-gray-100 cursor-pointer transition-colors ${
                  selectedConversation?.id === conversation.id ? "bg-gray-100" : ""
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
                    <p className="font-medium truncate text-sm">{conversation.name}</p>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate mt-0.5">{conversation.lastMessage}</p>
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
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-green-100 text-center">
              <h2 className="text-xl font-bold text-white outline outline-2 outline-yellow-400">
                Chat with Buddy ({selectedConversation.name})
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 bg-white overflow-y-auto">
              {loadingMessages ? (
                <div className="flex items-center justify-center h-full">
                  <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg ${
                        message.isMe ? "bg-yellow-50 ml-2" : "bg-yellow-100 mr-2"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
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
            <svg className="h-16 w-16 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-800">Your Messages</h3>
            <p className="mt-2 max-w-md">
              Select a conversation to start chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;




// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { 
//   MessageSquare, 
//   Search, 
//   Send, 
//   User, 
//   Users, 
//   Clock, 
//   Image, 
//   Paperclip,
//   Loader2,
//   LayoutList,
//   UsersRound
// } from "lucide-react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // Mock API functions - Replace with actual API calls
// const fetchConversations = async () => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // Mock data
//   return [
//     { 
//       id: 1, 
//       type: "individual", 
//       name: "Jane Smith", 
//       avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150", 
//       lastMessage: "Do you have time to chat about the project tomorrow?", 
//       timestamp: "10:23 AM",
//       unread: true
//     },
//     { 
//       id: 2, 
//       type: "group", 
//       name: "Frontend Developers", 
//       avatar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=150&h=150", 
//       participants: 18, 
//       lastMessage: "Alex: I just pushed the new component library", 
//       timestamp: "Yesterday",
//       unread: false
//     },
//     { 
//       id: 3, 
//       type: "individual", 
//       name: "David Johnson", 
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150", 
//       lastMessage: "Thanks for the recommendation!", 
//       timestamp: "Yesterday",
//       unread: false
//     },
//     { 
//       id: 4, 
//       type: "group", 
//       name: "UX Design Professionals", 
//       avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=150&h=150", 
//       participants: 24, 
//       lastMessage: "Maria: Does anyone have experience with user testing tools?", 
//       timestamp: "Wed",
//       unread: true
//     },
//     { 
//       id: 5, 
//       type: "individual", 
//       name: "Sophia Lee", 
//       avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150", 
//       lastMessage: "Let's schedule a call to discuss the details", 
//       timestamp: "Tue",
//       unread: false
//     },
//     { 
//       id: 6, 
//       type: "individual", 
//       name: "Michael Wilson", 
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150", 
//       lastMessage: "Are you going to the conference next month?", 
//       timestamp: "Mon",
//       unread: false
//     },
//     { 
//       id: 7, 
//       type: "group", 
//       name: "AI & Machine Learning", 
//       avatar: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=150&h=150", 
//       participants: 42, 
//       lastMessage: "James: Here's a great article on new NLP techniques", 
//       timestamp: "Sun",
//       unread: false
//     },
//   ];
// };

// const fetchMessages = async (conversationId: number) => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 800));
  
//   // Mock messages for the selected conversation
//   const messages = [
//     {
//       id: 1,
//       sender: { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150" },
//       content: "Hi there! How's your day going?",
//       timestamp: "10:15 AM",
//       isMe: false
//     },
//     {
//       id: 2,
//       sender: { id: 1, name: "Me", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&h=150" },
//       content: "Hey Jane! It's going well, thanks for asking. Just finishing up some work on the design project.",
//       timestamp: "10:17 AM",
//       isMe: true
//     },
//     {
//       id: 3,
//       sender: { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150" },
//       content: "That's great to hear! How's the project coming along? I saw some of your updates in the shared folder.",
//       timestamp: "10:19 AM",
//       isMe: false
//     },
//     {
//       id: 4,
//       sender: { id: 1, name: "Me", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&h=150" },
//       content: "It's coming together nicely! I think we're on track to finish by the deadline. I've made some adjustments to the color scheme based on your feedback.",
//       timestamp: "10:20 AM",
//       isMe: true
//     },
//     {
//       id: 5,
//       sender: { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150" },
//       content: "That sounds promising! I'm curious to see the changes. Do you have time to chat about the project tomorrow?",
//       timestamp: "10:23 AM",
//       isMe: false
//     }
//   ];
  
//   return messages;
// };

// const Messages = () => {
//   const [selectedConversation, setSelectedConversation] = useState<any>(null);
//   const [messageInput, setMessageInput] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
  
//   const { data: conversations = [], isLoading: loadingConversations } = useQuery({
//     queryKey: ['conversations'],
//     queryFn: fetchConversations,
//   });
  
//   const { data: messages = [], isLoading: loadingMessages } = useQuery({
//     queryKey: ['messages', selectedConversation?.id],
//     queryFn: () => (selectedConversation ? fetchMessages(selectedConversation.id) : Promise.resolve([])),
//     enabled: !!selectedConversation,
//   });
  
//   const filteredConversations = conversations.filter(convo => {
//     // Filter by search term
//     const matchesSearch = convo.name.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Filter by type based on active tab
//     const matchesType = 
//       activeTab === "all" ? true : 
//       activeTab === "direct" ? convo.type === "individual" : 
//       activeTab === "groups" ? convo.type === "group" : 
//       true;
    
//     return matchesSearch && matchesType;
//   });
  
//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!messageInput.trim()) return;
    
//     // In a real app, this would send the message to the API
//     console.log(`Sending message: ${messageInput} to conversation ${selectedConversation.id}`);
//     setMessageInput("");
//   };
  
//   return (
//     <div className="flex h-[calc(100vh-120px)] rounded-lg border shadow-sm overflow-hidden">
//       {/* Conversations Sidebar */}
//       <div className="w-80 flex flex-col border-r bg-gray-50">
//         <div className="p-4 border-b bg-white">
//           <h2 className="text-lg font-semibold mb-2">Messages</h2>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//             <Input
//               placeholder="Search conversations..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//         </div>
        
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col h-full">
//           <TabsList className="grid grid-cols-3 px-4 py-2 bg-background border-b">
//             <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
//             <TabsTrigger value="direct" className="text-xs">Direct</TabsTrigger>
//             <TabsTrigger value="groups" className="text-xs">Groups</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value={activeTab} className="flex-1 data-[state=active]:flex flex-col h-full">
//             {loadingConversations ? (
//               <div className="flex items-center justify-center h-full">
//                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
//               </div>
//             ) : filteredConversations.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-full p-4 text-center text-gray-500">
//                 {activeTab === "all" ? (
//                   <MessageSquare className="h-12 w-12 text-gray-400 mb-2" />
//                 ) : activeTab === "direct" ? (
//                   <User className="h-12 w-12 text-gray-400 mb-2" />
//                 ) : (
//                   <UsersRound className="h-12 w-12 text-gray-400 mb-2" />
//                 )}
//                 <p>No {activeTab === "all" ? "conversations" : activeTab === "direct" ? "direct messages" : "group chats"} found</p>
//               </div>
//             ) : (
//               <ScrollArea className="flex-1">
//                 <div className="divide-y">
//                   {filteredConversations.map((conversation) => (
//                     <div
//                       key={conversation.id}
//                       className={`flex items-center p-3 gap-3 hover:bg-gray-100 cursor-pointer transition-colors ${
//                         selectedConversation?.id === conversation.id ? "bg-gray-100" : ""
//                       }`}
//                       onClick={() => setSelectedConversation(conversation)}
//                     >
//                       <Avatar className="h-10 w-10 flex-shrink-0">
//                         <AvatarImage src={conversation.avatar} />
//                         <AvatarFallback>{conversation.name.slice(0, 2).toUpperCase()}</AvatarFallback>
//                       </Avatar>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center justify-between">
//                           <p className="font-medium truncate text-sm">{conversation.name}</p>
//                           <span className="text-xs text-gray-500">{conversation.timestamp}</span>
//                         </div>
//                         {conversation.type === "group" && (
//                           <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
//                             <Users className="h-3 w-3" />
//                             <span>{conversation.participants} members</span>
//                           </div>
//                         )}
//                         <p className="text-xs text-gray-600 truncate mt-0.5">{conversation.lastMessage}</p>
//                       </div>
//                       {conversation.unread && (
//                         <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </ScrollArea>
//             )}
//           </TabsContent>
//         </Tabs>
//       </div>
      
//       {/* Chat Window */}
//       <div className="flex-1 flex flex-col">
//         {selectedConversation ? (
//           <>
//             {/* Chat Header */}
//             <div className="p-4 border-b flex items-center justify-between bg-white">
//               <div className="flex items-center gap-3">
//                 <Avatar className="h-10 w-10">
//                   <AvatarImage src={selectedConversation.avatar} />
//                   <AvatarFallback>{selectedConversation.name.slice(0, 2).toUpperCase()}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h2 className="font-semibold">{selectedConversation.name}</h2>
//                   {selectedConversation.type === "group" ? (
//                     <p className="text-xs text-gray-500">{selectedConversation.participants} members</p>
//                   ) : (
//                     <p className="text-xs text-gray-500">Active now</p>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {/* Messages */}
//             <ScrollArea className="flex-1 p-4">
//               {loadingMessages ? (
//                 <div className="flex items-center justify-center h-full">
//                   <Loader2 className="h-8 w-8 animate-spin text-primary" />
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {messages.map((message) => (
//                     <div
//                       key={message.id}
//                       className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
//                     >
//                       <div className={`flex gap-2 max-w-[80%] ${message.isMe ? "flex-row-reverse" : ""}`}>
//                         {!message.isMe && (
//                           <Avatar className="h-8 w-8 mt-1">
//                             <AvatarImage src={message.sender.avatar} />
//                             <AvatarFallback>{message.sender.name.slice(0, 2).toUpperCase()}</AvatarFallback>
//                           </Avatar>
//                         )}
//                         <div>
//                           <div
//                             className={`p-3 rounded-lg ${
//                               message.isMe
//                                 ? "bg-primary text-primary-foreground"
//                                 : "bg-gray-100 text-gray-800"
//                             }`}
//                           >
//                             <p className="text-sm">{message.content}</p>
//                           </div>
//                           <div
//                             className={`flex text-xs text-gray-500 mt-1 ${
//                               message.isMe ? "justify-end" : ""
//                             }`}
//                           >
//                             <span className="flex items-center">
//                               <Clock className="h-3 w-3 inline mr-1" />
//                               {message.timestamp}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </ScrollArea>
            
//             {/* Message Input */}
//             <div className="p-4 border-t bg-white">
//               <form onSubmit={handleSendMessage} className="flex items-center gap-2">
//                 <Button type="button" size="icon" variant="ghost">
//                   <Paperclip className="h-5 w-5 text-gray-500" />
//                 </Button>
//                 <Button type="button" size="icon" variant="ghost">
//                   <Image className="h-5 w-5 text-gray-500" />
//                 </Button>
//                 <Input
//                   placeholder="Type your message..."
//                   value={messageInput}
//                   onChange={(e) => setMessageInput(e.target.value)}
//                   className="flex-1"
//                 />
//                 <Button type="submit" size="icon" disabled={!messageInput.trim()}>
//                   <Send className="h-5 w-5" />
//                 </Button>
//               </form>
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500">
//             <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
//             <h3 className="text-xl font-medium text-gray-800">Your Messages</h3>
//             <p className="mt-2 max-w-md">
//               Select a conversation to start chatting, or connect with more professionals to expand your network.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Messages;







// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import StatsCards from './maindashboard/StatsCards';
// import Matches from './Matches';
// import PeerConnections from './PeerConnections';
// import DashboardHeader from './DashboardHeader';

// const Messages = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Add logout logic here (e.g., clear auth token)
//     navigate('/login');
//   };

//   return (
//     <div className="flex-1 p-8 overflow-y-auto">
//                   {/* Header */}
//                   <DashboardHeader />
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar onLogout={handleLogout} />

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-y-auto">

//         {/* Centered Welcome Section */}
//         <div className="bg-white p-6 rounded-lg shadow mb-6 flex flex-col items-center">
//           <h1 className="text-5xl font-bold font-['Poppins'] text-gray-800 mb-6">
//           My Messages / Chats
//           </h1>
//           <p className="text-2xl font-normal font-['Poppins'] text-gray-800 mb-8">
//           Real Talk with Real People on the Same Path.
//                     </p>

//                     <p className="text-3xl font-bold font-['Poppins'] text-slate-800 mb-8 text-left self-start">
//                     Chat with Buddy (Name)                    </p>

//                     <div data-layer="Frame 1686562766" className="Frame1686562766 self-stretch px-6 pt-6 pb-40 rounded-tr-[32px] rounded-bl-[32px] outline outline-[5px] outline-offset-[-5px] outline-teal-600 inline-flex justify-center items-center gap-40 flex-wrap content-center">
   
//     <div data-layer="Frame 1686562767" className="Frame1686562767 size- flex justify-start items-center gap-40">
//         <div data-layer="Comment/Left" className="CommentLeft w-80 px-8 py-6 bg-sky-100 rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Hey! Looks like we’re both in the marketing track — I’m Malik. Just joined JobBuddies last week 😊" className="HeyLooksLikeWeReBothInTheMarketingTrackIMMalikJustJoinedJobbuddiesLastWeek self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Hey! Looks like we’re both in the Business Analysis track — I’m Malik. Just joined JobBuddies last week 😊</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Hi Malik! I’m Priya. Nice to meet you! Always great to connect with someone in the same field." className="HiMalikIMPriyaNiceToMeetYouAlwaysGreatToConnectWithSomeoneInTheSameField self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Hi Malik! I’m Priya. Nice to meet you! Always great to connect with someone in the same field.</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//     </div>
//     <div data-layer="Frame 1686562768" className="Frame1686562768 size- flex justify-start items-center gap-40">
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Totally! I’ve been deep in job apps lately — it's a bit of a grind. How's your search going?" className="TotallyIVeBeenDeepInJobAppsLatelyItSABitOfAGrindHowSYourSearchGoing self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Totally! I’ve been deep in job apps lately — it's a bit of a grind. How's your search going?</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//         <div data-layer="Comment/Left" className="CommentLeft w-80 px-8 py-6 bg-sky-100 rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this 💪" className="PrettyMuchTheSameHadACoupleOfRejectionsLastWeekButTryingToStayFocusedWeGotThis self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this 💪</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//     </div>
//     <div data-layer="Frame 1686562769" className="Frame1686562769 size- flex justify-start items-center gap-40">
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-gray-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?" className="AbsolutelyOhICameAcrossThisGreatNotionTemplateForTrackingJobAppsWantMeToSendIt self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Yes, please! I’ve been using a messy Google Sheet so I’d love a better system 😅" className="YesPleaseIVeBeenUsingAMessyGoogleSheetSoIDLoveABetterSystem self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Yes, please! I’ve been using a messy Google Sheet so I’d love a better system 😅</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//     </div>
//     <div data-layer="Frame 1686562770" className="Frame1686562770 size- flex justify-start items-center gap-40">
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-sky-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Here you go: [Notion link]       Also, not sure if you’ve seen this, but SkillHat is offering free Masterclasses for Digital Content Strategist; looks like a great fit for you." className="HereYouGoNotionLinkAlsoNotSureIfYouVeSeenThisButSkillhatIsOfferingFreeMasterclassesForDigitalContentStrategistLooksLikeAGreatFitForYou self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Here you go: [Notion link]       Also, not sure if you’ve seen this, but SkillHat is offering free Masterclasses for Digital Content Strategist; looks like a great fit for you.</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//         <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
//             <div data-layer="Ahhh, I love SkillHat. Thank you! I’ll apply tonight 🙌" className="AhhhILoveSkillhatThankYouILlApplyTonight self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Ahhh, I love SkillHat. Thank you! I’ll apply tonight 🙌</div>
//             <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
//         </div>
//     </div>
// </div>

//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Messages;
