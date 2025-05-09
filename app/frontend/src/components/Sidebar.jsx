import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  MessagesSquare,
  Users,
  BookOpen,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  User,
  UsersRound,
} from "lucide-react";
import { cn } from "../lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Matches", href: "/matchesDashboard" },
  {
    icon: Users,
    label: "Connections",
    href: "/connections",
    subItems: [
      { icon: User, label: "Peer Connections", href: "/connections/peers" },
      {
        icon: UsersRound,
        label: "Group Connections",
        href: "/connections/groups",
      },
    ],
  },
  { icon: MessagesSquare, label: "Messages", href: "/messages" },
  { icon: BookOpen, label: "Resources", href: "/resources" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (label) => {
    if (expandedMenu === label) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(label);
    }
  };

  const isActive = (href) => {
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  // Define the navigation links with their corresponding routes
  // const navLinks = [
  //   { name: "Dashboard", path: "/dashboard" },
  //   { name: "Matches", path: "/matchesDashboard" },
  //   { name: "Connections", path: "/connections" },
  //   { name: "Messages", path: "/messages" },
  //   { name: "Resources", path: "/resources" },
  //   { name: "Settings", path: "/settings" },
  // ];

  return (
    <div className="w-64 bg-light-teal text-white p-4 flex flex-col rounded-lg">
      {menuItems.map((item) => (
        <div key={item.label}>
          {item.subItems ? (
            // Menu item with submenu
            <div className="mb-1">
              <button
                onClick={() => toggleSubMenu(item.label)}
                className={cn(
                  "flex items-center justify-between w-full gap-3 px-4 py-3 text-white/90 rounded-lg transition-all duration-300",
                  "hover:bg-gradient-to-r hover:from-[#0B8B8B] hover:to-yellow-400",
                  isActive(item.href) &&
                    "bg-gradient-to-r from-[#0B8B8B] to-yellow-400"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
                {expandedMenu === item.label ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {expandedMenu === item.label && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 text-white/80 rounded-lg transition-colors",
                        "hover:bg-white/10",
                        isActive(subItem.href) && "bg-white/10 text-white"
                      )}
                    >
                      <subItem.icon className="h-4 w-4" />
                      <span className="text-sm">{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Regular menu item
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-white/90 rounded-lg transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-[#0B8B8B] hover:to-yellow-400",
                isActive(item.href) &&
                  "bg-gradient-to-r from-[#0B8B8B] to-yellow-400"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )}
        </div>
      ))}

      <div className="mt-auto">
        <a
          href="/logout"
          className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </a>

        <div className="flex items-center gap-2 px-4 py-3 mt-4">
          <span>Light</span>
          <button
            onClick={() => setIsDark(!isDark)}
            className={cn(
              "w-12 h-6 rounded-full p-1 transition-colors",
              isDark ? "bg-gray-600" : "bg-gray-400"
            )}
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full bg-white transition-transform",
                isDark ? "translate-x-6" : "translate-x-0"
              )}
            />
          </button>
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
