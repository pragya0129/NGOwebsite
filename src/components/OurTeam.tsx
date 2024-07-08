import React, { useState } from "react";
import { Card, CardBody, Avatar, Divider } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };
  const team = [
    {
      name: t("team1.name"),
      position: t("team1.position"),
      bio: t("team1.bio"),
      avatar: "assets/Images/profile-user.png",
    },
    {
      name: t("team2.name"),
      position: t("team2.position"),
      bio: t("team2.bio"),
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
