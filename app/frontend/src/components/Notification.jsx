import { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
const NotificationBell = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log(API_BASE_URL);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/notifications`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setNotifications(data.payload || []);
        setUnreadCount(data.payload.filter((n) => !n.isRead).length);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Fetch on load and periodically
  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60000);

    return () => clearInterval(interval);
  }, []);
  const handleAccept = async (notification) => {
    try {
      let senderId;

      if (notification.message.startsWith("[{")) {
        try {
          const jsonPart = notification.message.substring(
            0,
            notification.message.indexOf("]") + 1
          );
          const data = JSON.parse(jsonPart);
          senderId = data.senderId;
        } catch (e) {
          console.error("Failed to parse sender ID from message");
        }
      }
      if (!senderId) {
        console.error("No sender ID found in notification");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/v1/connections/accept/${senderId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        fetchNotifications();
      }
    } catch (error) {
      console.error("Error accepting connection:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full focus:outline-none focus:ring"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 w-80 mt-2 bg-white rounded-md shadow-lg z-50">
          <div className="p-2 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-b ${
                    !notification.isRead ? "bg-blue-50" : ""
                  }`}
                >
                  <p className="text-sm">{notification.message}</p>

                  {notification.type === "CONNECTION_REQUEST" && (
                    <div className="mt-2 flex space-x-2">
                      <button
                        onClick={() => handleAccept(notification)}
                        className="px-3 py-1 bg-teal-600 text-white text-xs rounded"
                      >
                        Accept
                      </button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                        Ignore
                      </button>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
