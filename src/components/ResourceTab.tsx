import React, { useState } from "react";
import { Tabs, Tab, Button, Link } from "@nextui-org/react";
import Law from "./Law";
import Women from "./Women";
import Voilence from "./VoilenceSupport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HealthIcon from "./HealthIcon";
import { useTranslation } from "react-i18next";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export default function App() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  let tabs = [
    {
      id: "legal",
      label: t("legal"),
      icon: Law,
      content: [
        {
          image: "assets/Images/legal.png",
          heading: t("legal1.heading"),
          description: t("legal1.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.law.cornell.edu/",
        },
        {
          image: "assets/Images/womens law.png",
          heading: t("legal2.heading"),
          description: t("legal2.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.womenslaw.org/",
        },
      ],
    },
    {
      id: "womensrights",
      label: t("womenrights"),
      icon: Women,
      content: [
        {
          image: "assets/Images/womenrights.png",
          heading: t("women1.heading"),
          description: t("women1.desc"),
          buttonLabel: t("viewMore"),
          src: "https://now.org/",
        },
        {
          image: "assets/Images/leanin.png",
          heading: t("women2.heading"),
          description: t("women2.desc"),
          buttonLabel: t("viewMore"),
          src: "https://leanin.org/",
        },
      ],
    },
    {
      id: "domestic",
      label: t("domestic"),
      icon: Voilence,
      content: [
        {
          image: "assets/Images/DomesticViolence.png",
          heading: t("domestic1.heading"),
          description: t("domestic1.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.thehotline.org/",
        },
        {
          image: "assets/Images/rainn.png",
          heading: t("domestic2.heading"),
          description: t("domestic2.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.rainn.org/",
        },
      ],
    },
    {
      id: "health",
      label: t("health"),
      icon: HealthIcon,
      content: [
        {
          image: "assets/Images/womenhealth.png",
          heading: t("health1.heading"),
          description: t("health1.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.womenshealth.gov/",
        },
        {
          image: "assets/Images/plannedparenthood.png",
          heading: t("health2.heading"),
          description: t("health2.desc"),
          buttonLabel: t("viewMore"),
          src: "https://www.plannedparenthood.org/",
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
          <option value="">{t("select")}</option>
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
                    <Link isExternal href={cardContent.src}>
                      <Button color="primary">{cardContent.buttonLabel}</Button>
                    </Link>
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
                      className="w-full h-48 object-fit rounded-t-lg"
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
                      <Link isExternal href={cardContent.src}>
                        <Button color="primary">
                          {cardContent.buttonLabel}
                        </Button>
                      </Link>
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
