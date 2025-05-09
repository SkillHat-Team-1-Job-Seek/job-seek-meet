import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
import DashboardHeader from "../DashboardHeader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { Loader2 } from "lucide-react";
import { ProfileCard } from "../ProfileCard";
import { useAuth } from "../../hook/useAuth";
import { useToast } from "../../hook/useToast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import Sidebar from "../Sidebar";
import ProgressBar from "../Progress";

const sendConnectionRequest = async (recipientId) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/connections/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ recipientId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to send connection request");
  }

  console.log(response);
  return response.json();
};
// API function to fetch recommended matches
const fetchRecommendedMatches = async (page = 1, pageSize = 3) => {
  const endpoint = `${API_BASE_URL}/api/v1/users/recommended`;
  console.log("fetching from: ", endpoint);

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recommended users");
    }

    const result = await response.json();
    console.log("API response:", result);

    // Extract all users from the response
    const allUsers = result.payload || [];

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedUsers = allUsers.slice(startIndex, endIndex);

    // Format users for display
    const formattedUsers = paginatedUsers.map((user) => ({
      id: user.id,
      name: user.name || "Anonymous User",
      profession: user.profession || user.headline || "Professional",
      imageUrl: user.profileImageUrl || "https://via.placeholder.com/150",
      matchScore: user.matchScore || 0,
      location: user.location || "Remote",
      tag: user.industry || "Professional",
      // Convert tags to skills if available
      topSkills: user.tags?.map((tag) => tag.name) || [
        "Networking",
        "Career Growth",
      ],
      sharedInterests: [user.industry, user.profession].filter(Boolean),
    }));

    return {
      data: formattedUsers,
      totalPages: Math.ceil(allUsers.length / pageSize),
      totalMatches: allUsers.length,
    };
  } catch (error) {
    console.error("Error fetching recommended matches:", error);
    throw error;
  }
};

const MatchesDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const [pendingConnections, setPendingConnections] = useState(new Set());
  const { toast } = useToast();

  const connectionMutation = useMutation({
    mutationFn: sendConnectionRequest,
    onSuccess: (data, variables) => {
      // Add to pending connections set
      setPendingConnections((prev) => {
        const updated = new Set(prev);
        updated.add(variables); // variables is the profileId
        return updated;
      });
      toast({
        title: "Connection Requested",
        description: "Your connection request has been sent successfully!",
        variant: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Request Failed",
        description: error.message || "Failed to send connection request",
        variant: "destructive",
      });
    },
  });

  // Function to handle connection request
  const handleConnect = (profileId) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    connectionMutation.mutate(profileId);
  };
  // Fetch recommended matches with React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommendedMatches", currentPage],
    queryFn: () => fetchRecommendedMatches(currentPage, pageSize),
    enabled: isAuthenticated,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <DashboardHeader />
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Header */}
          <div className="bg-white p-6 rounded-lg shadow mb-6 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-black">My Matches</h1>
            <p className="text-2xl font-semibold text-black mb-16">
              Curated Matches to Elevate Your Job Search Journey
            </p>
            <ProgressBar className="mb-12" />
            <p className="text-sm text-gray-600 mb-24"></p>

            <div className="flex justify-between items-center mb-24 space-x-96">
              <div>
                <h2 className="text-4xl font-normal text-black">
                  Profile Matches
                </h2>
                <p className="text-xl font-normal text-black">
                  We found {data?.totalMatches || 0} matches based on your
                  profile
                </p>
              </div>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm mr-8">
                Meet Your Buddy
              </button>
            </div>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin h-8 w-8 text-primary" />
                <span className="ml-2 text-gray-600">
                  Finding your matches...
                </span>
              </div>
            ) : error ? (
              <Card>
                <CardContent className="py-10">
                  <div className="text-center text-red-500">
                    {error.message ||
                      "Error loading matches. Please try again later."}
                  </div>
                </CardContent>
              </Card>
            ) : data?.data?.length === 0 ? (
              <Card>
                <CardContent className="py-10">
                  <div className="text-center text-gray-500">
                    <p className="text-lg font-medium mb-2">No matches found</p>
                    <p>Complete your profile to find potential matches</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {data?.data.map((profile) => (
                    <ProfileCard
                      key={profile.id}
                      name={profile.name}
                      role={profile.profession}
                      imageUrl={profile.profileImageUrl}
                      matchScore={profile.matchScore}
                      location={profile.location}
                      tag={profile.tag}
                      profileId={profile.id}
                      onConnect={handleConnect}
                      isConnecting={
                        connectionMutation.isLoading &&
                        connectionMutation.variables === profile.id
                      }
                      connectionSent={pendingConnections.has(profile.id)}
                    />
                  ))}
                </div>

                {data?.totalPages > 1 && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            currentPage > 1 && handlePageChange(currentPage - 1)
                          }
                          className={
                            currentPage <= 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>

                      {Array.from(
                        { length: data.totalPages },
                        (_, i) => i + 1
                      ).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            isActive={currentPage === page}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            currentPage < data.totalPages &&
                            handlePageChange(currentPage + 1)
                          }
                          className={
                            currentPage >= data.totalPages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesDashboard;
