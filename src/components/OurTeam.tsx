import React from "react";
import { Card, CardBody, Avatar, Divider } from "@nextui-org/react";

const TeamMember = ({ name, position, bio, avatar }) => {
  return (
    <Card className="w-full max-w-[300px] bg-transparent mb-6 mr-4">
      <CardBody className="p-4">
        <Avatar
          src={avatar}
          alt={`${name}'s Avatar`}
          size="lg"
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
        <Divider className="mb-4" />
        <p className="text-sm text-gray-600 mb-4 text-center">{position}</p>

        <p className="text-sm text-gray-800 text-center">{bio}</p>
      </CardBody>
    </Card>
  );
};

const OurTeam = () => {
  const team = [
    {
      name: "S.D. Taj (Aftab Taj)",
      position: "President",
      bio: "Aftab Women Welfare Society",
      avatar: "assets/Images/profile-user.png",
    },
    {
      name: "Syeda Taskeen Chishty",
      position: "Secretary",
      bio: "Aftab Women Welfare Society",
      avatar: "assets/Images/profile-user.png",
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
