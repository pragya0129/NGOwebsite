import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Law from "./Law";
import Women from "./Women";
import Voilence from "./VoilenceSupport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export default function App() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  let tabs = [
    {
      id: "legal",
      label: "Legal",
      icon: Law,
      content: [
        {
          image: "https://via.placeholder.com/150",
          heading: "Photo 1",
          description: "This is the description for photo 1.",
          buttonLabel: "View More",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Photo 2",
          description: "This is the description for photo 2.",
          buttonLabel: "View More",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Photo 3",
          description: "This is the description for photo 3.",
          buttonLabel: "View More",
        },
      ],
    },
    {
      id: "womensrights",
      label: "Women’s Rights",
      icon: Women,
      content: [
        {
          image: "https://via.placeholder.com/150",
          heading: "Music 1",
          description: "This is the description for music 1.",
          buttonLabel: "Listen Now",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Music 2",
          description: "This is the description for music 2.",
          buttonLabel: "Listen Now",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Music 3",
          description: "This is the description for music 3.",
          buttonLabel: "Listen Now",
        },
      ],
    },
    {
      id: "domestic",
      label: "Violence Support",
      icon: Voilence,
      content: [
        {
          image: "https://via.placeholder.com/150",
          heading: "Video 1",
          description: "This is the description for video 1.",
          buttonLabel: "Watch Now",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Video 2",
          description: "This is the description for video 2.",
          buttonLabel: "Watch Now",
        },
        {
          image: "https://via.placeholder.com/150",
          heading: "Video 3",
          description: "This is the description for video 3.",
          buttonLabel: "Watch Now",
        },
      ],
    },
  ];

  const handleTabSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(event.target.value || null);
  };

  return (
    <div className="flex flex-col items-center w-full px-8">
      {/* Render dropdown on smaller screens */}
      <div className="w-full sm:hidden">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          value={selectedTab || ""}
          onChange={handleTabSelect}
        >
          <option value="">Select an option...</option>
          {tabs.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        {selectedTab && (
          <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto mt-4">
            {tabs
              .find((tab) => tab.id === selectedTab)
              ?.content.map((cardContent, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-4/5 m-4"
                >
                  <img
                    src={cardContent.image}
                    alt={cardContent.heading}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      {cardContent.heading}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {cardContent.description}
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      {cardContent.buttonLabel}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Render tabs on larger screens */}
      <div className="flex flex-col items-center w-full px-8 hidden sm:block">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          items={tabs}
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee] ",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          {(item) => (
            <Tab
              key={item.id}
              title={<TabTitle icon={item.icon} label={item.label} />}
            >
              <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
                {item.content.map((cardContent, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-4/5 m-4"
                  >
                    <img
                      src={cardContent.image}
                      alt={cardContent.heading}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        {cardContent.heading}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {cardContent.description}
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        {cardContent.buttonLabel}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}

const TabTitle: React.FC<{ icon: IconComponent; label: string }> = ({
  icon: Icon,
  label,
}) => (
  <div className="flex items-center space-x-2">
    <Icon /> {/* Render the icon component */}
    <span>{label}</span>
  </div>
);
