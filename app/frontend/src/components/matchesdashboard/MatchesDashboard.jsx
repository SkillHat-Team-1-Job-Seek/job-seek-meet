import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Matches</h1>
          <p className="text-gray-600 mt-2">
            We found {data?.totalMatches || 0} matches based on your profile
          </p>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
          Meet Your Buddy
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
          <span className="ml-2 text-gray-600">Finding your matches...</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

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
  );
};

export default MatchesDashboard;

// import { Link, useNavigate } from "react-router-dom";
// // import DashboardHeader from "./DashboardHeader";
// // import StatsCards from "./StatsCards";
// // import Matches from "./Matches";
// // import PeerConnections from "./PeerConnections";
// // import Sidebar from "./Sidebar";
// // import ProfileCard from "./BuddyProfileCard";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "./ui/card";
// import { Button } from "./ui/button";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "./ui/pagination";
// import { Loader2 } from "lucide-react";
// import { ProfileCard } from "./ProfileCard";

// // Mock API function - Replace with actual API call
// const fetchMatches = async (page = 1) => {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const mockMatches = [
//     {
//       id: 1,
//       name: "Flora Zoe",
//       role: "Business Analyst",
//       imageUrl:
//         "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150",
//       matchScore: 97,
//       location: "Remote (Based in London, ON)",
//       tag: "Business",
//       topSkills: ["SQL", "Tableau", "User Research"],
//       sharedInterests: ["Product Thinking", "Remote Roles"],
//     },
//     {
//       id: 2,
//       name: "Samir Patel",
//       role: "Frontend Developer",
//       imageUrl:
//         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&h=150",
//       matchScore: 92,
//       location: "Toronto, Canada",
//       tag: "Tech",
//       topSkills: ["React", "Tailwind", "Accessibility"],
//       sharedInterests: ["Remote Work", "Open Source"],
//     },
//     {
//       id: 3,
//       name: "Linda Okafor",
//       role: "Product Manager in HealthTech",
//       imageUrl:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
//       matchScore: 90,
//       location: "Saint John, New Brunswick",
//       tag: "Health",
//       topSkills: ["Agile", "Roadmapping", "Jira"],
//       sharedInterests: ["Tech for Impact", "Women in Tech"],
//     },
//     {
//       id: 4,
//       name: "James King",
//       role: "Frontend Developer",
//       imageUrl:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
//       matchScore: 88,
//       location: "Toronto, Canada",
//       tag: "Tech",
//       topSkills: ["React", "Tailwind", "Accessibility"],
//       sharedInterests: ["Remote Work", "Open Source"],
//     },
//     {
//       id: 5,
//       name: "Rita Daniels",
//       role: "Product Designer",
//       imageUrl:
//         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150",
//       matchScore: 86,
//       location: "Remote (Based in London, ON)",
//       tag: "Design",
//       topSkills: ["Figma", "Wireframing", "User Interviews"],
//       sharedInterests: ["Design Mentorship", "Tech for Good"],
//     },
//     {
//       id: 6,
//       name: "Jayden Brooks",
//       role: "Analyst | Pivoting into Product",
//       imageUrl:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
//       matchScore: 81,
//       location: "London, UK (Remote-Preferred)",
//       tag: "Business",
//       topSkills: ["SQL", "Tableau", "User Research"],
//       sharedInterests: ["Product Thinking", "Remote Roles"],
//     },
//     {
//       id: 6,
//       name: "Jayden Brooks",
//       role: "Analyst | Pivoting into Product",
//       imageUrl:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
//       matchScore: 81,
//       location: "London, UK (Remote-Preferred)",
//       tag: "Business",
//       topSkills: ["SQL", "Tableau", "User Research"],
//       sharedInterests: ["Product Thinking", "Remote Roles"],
//     },
//   ];

//   // Return 2x3 grid items per page
//   const itemsPerPage = 6;
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   return {
//     data: mockMatches.slice(startIndex, endIndex),
//     totalPages: Math.ceil(mockMatches.length / itemsPerPage),
//   };
// };

// const MatchesDashboard = () => {
//   const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   // Add logout logic here (e.g., clear auth token)
//   //   navigate("/login");
//   // };
//   const [currentPage, setCurrentPage] = useState(1);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["matches", currentPage],
//     queryFn: () => fetchMatches(currentPage),
//   });

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // return {
//   //   data: mockMatches.slice(startIndex, endIndex),
//   //   totalPages: Math.ceil(mockMatches.length / 3),
//   // };
//   // const MatchesDashboard = () => {
//   //   const [currentPage, setCurrentPage] = useState(1);

//   //   const { data, isLoading, error } = useQuery({
//   //     queryKey: ["matches", currentPage],
//   //     queryFn: () => fetchMatches(currentPage),
//   //   });

//   //   const handlePageChange = (page) => {
//   //     setCurrentPage(page);
//   //   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Profile Matches</h1>
//           <p className="text-gray-600 mt-2">Find your perfect Match here</p>
//         </div>
//         <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
//           Meet Your Buddy
//         </Button>
//       </div>

//       {isLoading ? (
//         <div className="flex justify-center items-center h-64">
//           <Loader2 className="animate-spin h-8 w-8 text-primary" />
//           <span className="ml-2 text-gray-600">Finding your matches...</span>
//         </div>
//       ) : error ? (
//         <Card>
//           <CardContent className="py-10">
//             <div className="text-center text-red-500">
//               Error loading matches. Please try again later.
//             </div>
//           </CardContent>
//         </Card>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data?.data.map((profile) => (
//               <ProfileCard
//                 key={profile.id}
//                 name={profile.name}
//                 role={profile.role}
//                 imageUrl={profile.imageUrl}
//                 matchScore={profile.matchScore}
//                 location={profile.location}
//                 tag={profile.tag}
//                 profileId={profile.id}
//               />
//             ))}
//           </div>

//           {data?.totalPages && data.totalPages > 1 && (
//             <Pagination className="mt-8">
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationPrevious
//                     onClick={() =>
//                       currentPage > 1 && handlePageChange(currentPage - 1)
//                     }
//                     className={
//                       currentPage <= 1
//                         ? "pointer-events-none opacity-50"
//                         : "cursor-pointer"
//                     }
//                   />
//                 </PaginationItem>

//                 {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
//                   (page) => (
//                     <PaginationItem key={page}>
//                       <PaginationLink
//                         isActive={currentPage === page}
//                         onClick={() => handlePageChange(page)}
//                       >
//                         {page}
//                       </PaginationLink>
//                     </PaginationItem>
//                   )
//                 )}

//                 <PaginationItem>
//                   <PaginationNext
//                     onClick={() =>
//                       currentPage < data.totalPages &&
//                       handlePageChange(currentPage + 1)
//                     }
//                     className={
//                       currentPage >= data.totalPages
//                         ? "pointer-events-none opacity-50"
//                         : "cursor-pointer"
//                     }
//                   />
//                 </PaginationItem>
//               </PaginationContent>
//             </Pagination>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default MatchesDashboard;
