import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageSquare, Search, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Real API function to fetch connected users
const fetchPeerConnections = async (search = "") => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/connections`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch connections");
    }

    const result = await response.json();
    console.log("Connections API response:", result);

    // Filter the connections to only include accepted ones
    const connectedUsers = result.payload
      .filter((connection) => connection.status === "ACCEPTED")
      .map((connection) => ({
        id: connection.connectionId || connection.id,
        name: connection.user.name,
        role: connection.user.profession || "Professional",
        imageUrl:
          connection.user.profileImageUrl || "https://via.placeholder.com/150",
        lastActive: formatDate(connection.connectedSince),
        connectionCount: connection.user.connections?.length || 0,
        userId: connection.user.id, // Add user ID for messaging
      }));

    // Filter by search term if provided
    const filtered = search
      ? connectedUsers.filter(
          (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.role.toLowerCase().includes(search.toLowerCase())
        )
      : connectedUsers;

    return {
      data: filtered,
      hasMore: false,
    };
  } catch (error) {
    console.error("Error fetching connections:", error);
    throw error;
  }
};
const formatDate = (dateString) => {
  if (!dateString) return "Recently";

  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays < 1) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;

    return date.toLocaleDateString();
  } catch {
    return "Recently";
  }
};

const PeerConnections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(5);

  const { data, isLoading } = useQuery({
    queryKey: ["peerConnections", searchTerm],
    queryFn: () => fetchPeerConnections(searchTerm),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const loadMore = () => {
    setDisplayCount((prev) => prev + 5);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setDisplayCount(5); // Reset display count when searching
  };

  const handleMessage = (userId) => {
    console.log(`Opening chat with user ID: ${userId}`);
    // Implement chat functionality here
    // You might want to route to a chat page or open a chat modal
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Peer Connections</h1>
          <p className="text-gray-600 mt-2">
            Your professional network of individual connections
          </p>
        </div>
        <Button variant="outline" onClick={() => history.back()}>
          Back to Connections
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input
          placeholder="Search connections by name or role..."
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
          <span className="ml-2 text-gray-600">
            Loading your connections...
          </span>
        </div>
      ) : data?.data.length === 0 ? (
        <Card>
          <CardContent className="py-10">
            <div className="text-center text-gray-500">
              <User className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No connections found</h3>
              <p className="mt-2">
                You don't have any accepted connections yet. Try reaching out to
                more people.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="space-y-4">
            {data?.data.slice(0, displayCount).map((connection) => (
              <Card
                key={connection.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img
                        src={connection.imageUrl}
                        alt={connection.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{connection.name}</h3>
                        <p className="text-sm text-gray-600">
                          {connection.role}
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => handleMessage(connection.userId)}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Active {connection.lastActive}
                  </p>
                </CardContent>
              </Card>
            ))}

            {data && displayCount < data.data.length && (
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={loadMore}
              >
                Load More
              </Button>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default PeerConnections;
