import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, Image, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faVideo, faLink } from "@fortawesome/free-solid-svg-icons";

export default function ResourcesPage() {
  const resources = [
    {
      type: "article",
      title: "Women's Rights and Legal Protection",
      description:
        "An overview of the legal rights and protections available to women.",
      link: "/resources/womens-rights",
      icon: faFileAlt,
      imgSrc: "/public/Images/article1.jpg",
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
              className="ml-5 w-20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden">
              <Image src={resource.imgSrc} alt={resource.title} />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-default-400 mb-4">{resource.description}</p>
                <Button
                  as="a"
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={resource.icon} />
                  <span>Learn More</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
