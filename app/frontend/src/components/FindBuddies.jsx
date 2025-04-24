
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Tag, X, RefreshCw } from "lucide-react";
import BuddyCard from "@/components/BuddyCard";

// Sample mock data
const mockBuddies = [
  // your same buddy objects
];

const FindBuddies = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buddies, setBuddies] = useState(mockBuddies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const addFilter = () => {
    if (filterInput && !filters.includes(filterInput)) {
      const updatedFilters = [...filters, filterInput];
      setFilters(updatedFilters);
      setFilterInput("");
      applyFilters(updatedFilters);
    }
  };

  const removeFilter = (filterToRemove) => {
    const updatedFilters = filters.filter((f) => f !== filterToRemove);
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const clearFilters = () => {
    setFilters([]);
    setSearchTerm("");
    setBuddies(mockBuddies);
  };

  const applyFilters = (currentFilters = filters) => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = mockBuddies;

      if (searchTerm) {
        filtered = filtered.filter((b) =>
          [b.name, b.title, b.location, b.bio].some((text) =>
            text.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      if (currentFilters.length > 0) {
        filtered = filtered.filter((b) =>
          currentFilters.some((filter) =>
            b.tags.some((tag) =>
              tag.toLowerCase().includes(filter.toLowerCase())
            )
          )
        );
      }

      setBuddies(filtered);
      setIsLoading(false);
    }, 500);
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Find Your Job Buddies</h1>
        <p className="text-gray-600 mb-8">
          Connect with like-minded professionals on similar career paths.
        </p>
        <div className="bg-white rounded-lg shadow p-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Sign In to Get Started</h2>
          <p className="text-gray-600 mb-6">
            Sign in or create an account to explore job buddies and connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Sign In
            </Link>
            <Link to="/signup" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Find Job Buddies</h1>
      <p className="text-gray-600 mb-8">
        Connect with like-minded professionals. Find mentors, collaborators, or job search partners.
      </p>

      {/* Search + Filter */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, title, or location..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>

          <div className="relative flex-1">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addFilter();
                }
              }}
              placeholder="Filter by skill or interest..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>

          <button type="button" onClick={addFilter} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Filter
          </button>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Search
          </button>
        </form>

        {filters.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center mt-4">
            <span className="text-sm text-gray-500">Active Filters:</span>
            {filters.map((filter, index) => (
              <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {filter}
                <button onClick={() => removeFilter(filter)} className="ml-2 text-gray-400 hover:text-gray-600">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button
              onClick={clearFilters}
              className="ml-2 text-xs flex items-center border px-2 py-1 rounded-md hover:bg-gray-100"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="text-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Finding buddies for you...</p>
        </div>
      ) : buddies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buddies.map((buddy) => (
            <BuddyCard key={buddy.id} {...buddy} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">No buddies found matching your criteria.</p>
          <button onClick={clearFilters} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FindBuddies;
