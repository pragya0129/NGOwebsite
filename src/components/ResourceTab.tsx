import React, { useState } from "react";
import { Tabs, Tab, Button, Link } from "@nextui-org/react";
import Law from "./Law";
import Women from "./Women";
import Voilence from "./VoilenceSupport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HealthIcon from "./HealthIcon";

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
          image: "assets/Images/legal.png",
          heading: "Legal Information Institute (LII)",
          description:
            "Provides free access to comprehensive legal information, including federal and state statutes, case law, and regulations, to help users better understand their legal rights and responsibilities.",
          buttonLabel: "View More",
          src: "https://www.law.cornell.edu/",
        },
        {
          image: "assets/Images/womens law.png",
          heading: "Women’s Law",
          description:
            "Offers legal information, resources, and support specifically for women dealing with domestic violence and other legal issues, empowering them to take action and protect their rights.",
          buttonLabel: "View More",
          src: "https://www.womenslaw.org/",
        },
      ],
    },
    {
      id: "womensrights",
      label: "Women’s Rights",
      icon: Women,
      content: [
        {
          image: "assets/Images/womenrights.png",
          heading: "National Organization for Women (NOW)",
          description:
            "Advocates for women’s rights and equality through grassroots activism, legal reform, and public education, focusing on issues such as reproductive rights, violence against women, and economic justice.",
          buttonLabel: "View More",
          src: "https://now.org/",
        },
        {
          image: "assets/Images/leanin.png",
          heading: "Lean In",
          description:
            "Supports women’s leadership and empowerment through a global community, offering resources, mentorship, and networking opportunities to help women achieve their professional and personal goals.",
          buttonLabel: "View More",
          src: "https://leanin.org/",
        },
      ],
    },
    {
      id: "domestic",
      label: "Violence Support",
      icon: Voilence,
      content: [
        {
          image: "assets/Images/DomesticViolence.png",
          heading: "National Domestic Violence Hotline",
          description:
            "Offers 24/7 confidential support and resources for individuals experiencing domestic violence, including crisis intervention, safety planning, and referrals to local services.",
          buttonLabel: "View More",
          src: "https://www.thehotline.org/",
        },
        {
          image: "assets/Images/rainn.png",
          heading: "RAINN (Rape, Abuse & Incest National Network)",
          description:
            "Provides support for sexual assault survivors through a national hotline, online chat, and extensive resources on prevention, recovery, and legal options.",
          buttonLabel: "View More",
          src: "https://www.rainn.org/",
        },
      ],
    },
    {
      id: "health",
      label: "Health",
      icon: HealthIcon,
      content: [
        {
          image: "assets/Images/womenhealth.png",
          heading: "Office on Women’s Health (OWH)",
          description:
            "Offers health resources and information specifically for women, focusing on physical, mental, and reproductive health to promote overall well-being.",
          buttonLabel: "View More",
          src: "https://www.womenshealth.gov/",
        },
        {
          image: "assets/Images/plannedparenthood.png",
          heading: "Planned Parenthood",
          description:
            "Provides reproductive health care, education, and advocacy, offering services such as birth control, cancer screenings, and STD testing to support women’s health and rights.",
          buttonLabel: "View More",
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
