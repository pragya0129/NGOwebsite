import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, Image, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faVideo, faLink } from "@fortawesome/free-solid-svg-icons";
import ResourceTab from "@/components/ResourceTab";

export default function ResourcesPage() {
  const resources = [
    {
      type: "article",
      title: "Legal Information and Resources",
      description:
        "An overview of the legal rights and protections available to women.",
      link: "/resources/womens-rights",
      icon: faFileAlt,
      imgSrc: "/public/Images/laws.gif",
    },
    {
      type: "video",
      title: "Understanding Legal Procedures",
      description:
        "A video guide to help women understand common legal procedures.",
      link: "https://youtube.com/video",
      icon: faVideo,
      imgSrc: "/public/Images/video1.jpg",
    },
    {
      type: "external",
      title: "Legal Aid Society",
      description:
        "Access external resources for additional support and information.",
      link: "https://legalaid.org",
      icon: faLink,
      imgSrc: "/public/Images/external1.jpg",
    },
    // Add more resources as needed
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <div className="flex items-center justify-center">
            <h1 className={title()}>Resources</h1>
            <img
              src="/public/Images/folder.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full max-w-6xl">
          <ResourceTab />
        </div>
      </section>
    </DefaultLayout>
  );
}
