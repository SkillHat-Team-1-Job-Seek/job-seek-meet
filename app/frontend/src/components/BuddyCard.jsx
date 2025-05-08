import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import {
  User,
  MapPin,
  Briefcase,
  Tag,
  UserPlus,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import ChatComponent from "./ChatComponent";

const BuddyCard = ({
  id,
  name,
  title,
  location,
  tags,
  bio,
  photoUrl,
}) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected((prev) => !prev);
    toast({
      title: isConnected ? "Connection removed" : "Connection added",
      description: `You are ${isConnected ? "no longer" : "now"} connected with ${name}`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header Background */}
      <div className="bg-custom-dark h-24 relative" />

      <CardContent className="p-6 -mt-12">
        <div className="flex flex-col items-center">
          {/* Profile Image or Icon */}
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name}
              className="h-20 w-20 rounded-full border-4 border-white mb-4"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-buddies-light-purple flex items-center justify-center border-4 border-white mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
          )}

          {/* Name and Details */}
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <div className="flex items-center text-custom-gray-medium mb-1">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{title}</span>
          </div>
          <div className="flex items-center text-custom-gray-medium mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-buddies-soft-purple text-buddies-purple border-0"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Bio */}
          <p className="text-custom-gray-medium text-center line-clamp-3 mb-4">
            {bio}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-6 pt-0">
        {/* Connect Button */}
        <Button
          variant={isConnected ? "outline" : "default"}
          className={isConnected ? "border-primary text-primary" : "bg-primary"}
          onClick={handleConnect}
        >
          {isConnected ? (
            <>
              <UserCheck className="h-4 w-4 mr-2" />
              Connected
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4 mr-2" />
              Connect
            </>
          )}
        </Button>

        {/* Chat Button if connected */}
        {isConnected && (
          <ChatComponent buddyName={name} buddyImage={photoUrl} />
        )}
      </CardFooter>
    </Card>
  );
};

export default BuddyCard;
