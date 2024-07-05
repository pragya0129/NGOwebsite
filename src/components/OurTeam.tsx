import React from "react";
import { Card, CardBody, Avatar, Divider } from "@nextui-org/react";

const TeamMember = ({ name, position, bio, avatar }) => {
  return (
    <Card className="w-full max-w-[300px] bg-transparent mb-6 mr-4">
      <CardBody className="p-4">
        <Avatar
          src={avatar}
          alt={`${name}'s Avatar`}
          size="large"
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">{position}</p>
        <Divider className="mb-4" />
        <p className="text-sm text-gray-800">{bio}</p>
      </CardBody>
    </Card>
  );
};

const OurTeam = () => {
  const team = [
    {
      name: "John Doe",
      position: "Founder & CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/public/Images/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      position: "Director of Operations",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/public/Images/avatar2.jpg",
    },
  ];

  return (
    <div className="flex justify-center">
      {team.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default OurTeam;
