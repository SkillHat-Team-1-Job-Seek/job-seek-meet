import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useQuery } from "@tanstack/react-query";
import Header from "../DashboardHeader";
import { BookOpen, Bookmark, ChevronDown, Loader2 } from "lucide-react";
import { useToast } from "../../hook/useToast";
import { useAuth } from "../../hook/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Progress } from "../../components/ui/progress";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Mock data for the new sections
// const stats = [
//   { label: "Profile Views", value: "24" },
//   { label: "Connections", value: "12" },
//   { label: "Matches", value: "8" },
//   { label: "Interview Requests", value: "3" },
// ];

const resources = [
  {
    title: "How to Ace Your Technical Interview",
    category: "Career Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
  },
  {
    title: "Networking in the Digital Age",
    category: "Professional Development",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
  },
  {
    title: "Building Your Professional Brand",
    category: "Career Growth",
    imageUrl:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=500&h=300&fit=crop",
  },
];

const savedJobs = [
  {
    title: "Senior Software Engineer",
    company: "Google",
    location: "Remote",
    posted: "2 days ago",
  },
  {
    title: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    posted: "1 week ago",
  },
  {
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    posted: "3 days ago",
  },
];

// Your existing API functions
const fetchUserConnections = async () => {
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

  return response.json();
};

const fetchUserGroups = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/groups/my`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user groups");
  }
  return response.json();
};

const fetchAllGroups = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/groups/all`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch groups");
  }

  return response.json();
};

const joinGroup = async (groupId) => {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/groups/${groupId}/join`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Failed to join group");
  }

  return response.json();
};

const fetchRecommendedMatches = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/users/recommended`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recommended matches");
  }

  const result = await response.json();
  return result;
};

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [joiningGroupId, setJoiningGroupId] = useState(null);

  const handleLogout = () => {
    navigate("/login");
  };

  // Fetch user connections
  const {
    data: connectionsData,
    isLoading: connectionsLoading,
    error: connectionsError,
  } = useQuery({
    queryKey: ["userConnections"],
    queryFn: fetchUserConnections,
  });

  // Fetch user groups
  const {
    data: userGroupsData,
    isLoading: userGroupsLoading,
    error: userGroupsError,
    refetch: refetchUserGroups,
  } = useQuery({
    queryKey: ["userGroups"],
    queryFn: fetchUserGroups,
  });

  // Fetch recommended matches
  const {
    data: recommendedMatchesData,
    isLoading: matchesLoading,
    error: matchesError,
  } = useQuery({
    queryKey: ["recommendedMatches"],
    queryFn: fetchRecommendedMatches,
  });

  // Fetch all groups to join
  const {
    data: allGroupsData,
    isLoading: allGroupsLoading,
    error: allGroupsError,
  } = useQuery({
    queryKey: ["allGroups"],
    queryFn: fetchAllGroups,
  });

  const handleJoinGroup = async (groupId) => {
    setJoiningGroupId(groupId);
    try {
      await joinGroup(groupId);
      toast({
        title: "Success",
        description: "You have joined the group successfully!",
        variant: "success",
      });
      refetchUserGroups();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to join group",
        variant: "destructive",
      });
    } finally {
      setJoiningGroupId(null);
    }
  };

  // Extract data for UI
  const previewMatches = recommendedMatchesData?.payload?.slice(0, 3) || [];
  const userConnections = connectionsData?.data?.slice(0, 3) || [];
  const userGroups = userGroupsData?.data?.slice(0, 3) || [];

  // Get groups to join (filter out groups user is already in)
  const userGroupIds = new Set(userGroups.map((group) => group.id));
  const groupsToJoin =
    allGroupsData?.data
      ?.filter((group) => !userGroupIds.has(group.id))
      .slice(0, 3) || [];
  const stats = [
    {
      label: "Potential matches",
      value: recommendedMatchesData?.payload?.length || 0,
    },
    {
      label: "1 on 1 peer(s)",
      value: connectionsData?.data?.length || 0,
    },
    {
      label: "Group joined",
      value: userGroupsData?.data?.length || 0,
    },
    {
      label: "Saved Jobs",
      value: "5", // mock data
    },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <Header />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar onLogout={handleLogout} />
        <div className="flex-1 px-8">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back {user?.name || "there"}!
            </h1>
            <p className="text-gray-600 mb-4">
              Here's what's new for you today
            </p>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Profile Completion
                </span>
                <span className="text-sm font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-4 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#0B8B8B]/20 to-yellow-400/20"
                >
                  <div className="text-2xl font-bold text-[#0B8B8B]">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Profile Matches</h2>
              <Link
                to="/matches"
                className="bg-yellow-400 px-6 py-2 rounded-lg font-medium"
              >
                Meet Your Buddy
              </Link>
            </div>

            {matchesLoading ? (
              <div className="flex justify-center items-center h-48">
                <Loader2 className="animate-spin h-8 w-8 text-primary" />
                <span className="ml-2 text-gray-600">
                  Finding your matches...
                </span>
              </div>
            ) : matchesError ? (
              <div className="bg-white p-6 rounded-lg shadow text-center text-red-500">
                Failed to load matches
              </div>
            ) : previewMatches.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
                No matches found. Complete your profile to find potential
                matches.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {previewMatches.map((profile) => (
                  <div
                    key={profile.id}
                    className="bg-white p-6 rounded-lg shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1">
                      {profile.matchScore}% Match
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={
                          profile.profileImageUrl ||
                          "https://via.placeholder.com/150"
                        }
                        alt={profile.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{profile.name}</h3>
                        <p className="text-gray-600 mb-1">
                          {profile.profession || "Professional"}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {profile.tags?.map((tag) => tag.name).join(", ") ||
                            "No tags"}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <Link
                        to="/matches"
                        className="inline-block bg-yellow-400 px-4 py-2 rounded-lg text-sm"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  Peer-to-Peer Connection
                </h2>
                <p className="text-gray-600">
                  Engage in one and one chats and group discussion
                </p>
              </div>
              <Link
                to="/connections"
                className="bg-yellow-400 px-6 py-2 rounded-lg font-medium"
              >
                Connect
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 mb-4 font-bold hover:text-[#0B8B8B]">
                    1-on-1 matches
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>1-on-1 matches</DropdownMenuItem>
                    <DropdownMenuItem>Groups Connection</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {connectionsLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <Loader2 className="h-6 w-6 animate-spin text-[#0B8B8B]" />
                  </div>
                ) : connectionsError ? (
                  <div className="text-center text-red-500 py-4">
                    Failed to load connections
                  </div>
                ) : userConnections.length === 0 ? (
                  <div className="text-center text-gray-500 py-4">
                    No connections found. Start connecting with peers!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userConnections.map((connection) => (
                      <div
                        key={connection.connectionId}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              connection.user.profileImageUrl ||
                              "/default-avatar.png"
                            }
                            alt={connection.user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">
                              {connection.user.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {connection.user.profession}
                            </div>
                          </div>
                        </div>
                        <button className="border border-[#0B8B8B] text-[#0B8B8B] px-4 py-1 rounded-lg text-sm">
                          Chat
                        </button>
                      </div>
                    ))}

                    {userConnections.length > 0 && (
                      <div className="text-center mt-4">
                        <Link
                          to="/connections"
                          className="text-[#0B8B8B] font-medium text-sm hover:underline"
                        >
                          View all connections
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold mb-4">Community Groups</h3>

                {allGroupsLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <Loader2 className="h-6 w-6 animate-spin text-[#0B8B8B]" />
                  </div>
                ) : allGroupsError ? (
                  <div className="text-center text-red-500 py-4">
                    Failed to load groups
                  </div>
                ) : groupsToJoin.length === 0 ? (
                  <div className="text-center text-gray-500 py-4">
                    No groups available to join at this time.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groupsToJoin.map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={group.groupImageUrl || "/default-group.png"}
                            alt={group.name}
                            className="w-10 h-10 rounded-full object-cover bg-gray-200"
                          />
                          <div>
                            <div className="font-medium">{group.name}</div>
                            <div className="text-sm text-gray-600">
                              {group._count?.members || 0} members
                            </div>
                          </div>
                        </div>
                        <button
                          className="border border-[#0B8B8B] text-[#0B8B8B] px-4 py-1 rounded-lg text-sm flex items-center"
                          onClick={() => handleJoinGroup(group.id)}
                          disabled={joiningGroupId === group.id}
                        >
                          {joiningGroupId === group.id ? (
                            <>
                              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                              Joining...
                            </>
                          ) : (
                            "Join"
                          )}
                        </button>
                      </div>
                    ))}

                    <div className="text-center mt-4">
                      <Link
                        to="/groups"
                        className="text-[#0B8B8B] font-medium text-sm hover:underline"
                      >
                        View all groups
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">My Groups</h2>
              <Link
                to="/groups"
                className="bg-yellow-400 px-6 py-2 rounded-lg font-medium"
              >
                View All
              </Link>
            </div>

            {userGroupsLoading ? (
              <div className="flex items-center justify-center h-32 bg-white rounded-lg">
                <Loader2 className="h-6 w-6 animate-spin text-[#0B8B8B]" />
              </div>
            ) : userGroupsError ? (
              <div className="text-center text-red-500 py-4 bg-white rounded-lg">
                Failed to load your groups
              </div>
            ) : userGroups.length === 0 ? (
              <div className="text-center text-gray-500 py-8 bg-white rounded-lg">
                You haven't joined any groups yet. Join groups to connect with
                peers!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userGroups.map((group) => (
                  <div
                    key={group.id}
                    className="bg-white p-6 rounded-lg shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={group.groupImageUrl || "/default-group.png"}
                        alt={group.name}
                        className="w-12 h-12 rounded-full object-cover bg-gray-200"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{group.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {group._count?.members || 0} members
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {group.description || "No description available."}
                    </p>
                    <Link
                      to={`/groups/${group.id}`}
                      className="inline-block bg-[#0B8B8B] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0a7a7a] transition-colors"
                    >
                      View Group
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* NEW SECTIONS FROM REQUESTED UI */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Resources</h2>
                <p className="text-gray-600">
                  Explore our curated resources to help you grow
                </p>
              </div>
              <Link
                to="/resources"
                className="flex items-center gap-2 bg-yellow-400 px-6 py-2 rounded-lg font-medium"
              >
                <BookOpen className="h-5 w-5" />
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 mb-2">
                      {resource.category}
                    </span>
                    <h3 className="font-medium text-lg">{resource.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Saved Jobs</h2>
                <p className="text-gray-600">
                  Jobs you've bookmarked for later
                </p>
              </div>
              <button className="flex items-center gap-2 bg-yellow-400 px-6 py-2 rounded-lg font-medium">
                <Bookmark className="h-5 w-5" />
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {savedJobs.map((job) => (
                <div
                  key={job.title}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-lg mb-1">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.company}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span>{job.posted}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
