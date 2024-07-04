import { useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ProgramsPage() {
  useEffect(() => {
    // Change the URL without reloading the page
    window.history.pushState({}, "", "/");
  }, []);
  const programs = [
    {
      title: "Education Program",
      description: "Providing quality education to underprivileged children.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Healthcare Program",
      description: "Ensuring access to essential healthcare services.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Environmental Program",
      description: "Promoting sustainable environmental practices.",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-3xl text-center px-4 mb-10">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold mb-5">Our Programs</h1>
            <img
              src="assets/Images/balloons.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
          <p className="text-lg text-gray-700">
            We are committed to making a difference through our comprehensive
            programs that address various community needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="w-full">
              <Card className="py-4 h-full">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-sm text-default-500">
                    {program.description}
                  </p>
                  <h4 className="font-bold text-lg mt-2">{program.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Program Image"
                    className="object-cover rounded-xl"
                    src={program.image}
                    width={300}
                  />
                </CardBody>
                <div className="px-4 pt-2">
                  <Button
                    className="w-full bg-blue-500 text-white"
                    variant="shadow"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
