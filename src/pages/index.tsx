import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon.jsx";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  Card,
  CardBody,
  Button,
  Avatar,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faBullhorn,
  faHandsHelping,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import DefaultLayout from "@/layouts/default";
import MarqueeComponent from "@/components/ImageSlider.js";
import AnimatedSection from "./AnimatedSection"; // Import the AnimatedSection component
import HorizontalScrollableCards from "@/components/HighlightsCards.js";
import { TailwindCard } from "@/components/TailwindCard.js";
import FloatingButtons from "@/components/FloatingButton.js";

export default function IndexPage() {
  const [visitedSections, setVisitedSections] = useState(new Set());
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="inline-block justify-center text-center">
          {/* Overview Section */}
          <AnimatedSection
            id="overview"
            setVisitedSections={setVisitedSections}
          >
            <div className="flex flex-col md:flex-row items-center justify-center mb-10">
              <div className="flex-1 md:mr-5 mb-5 md:mb-0 flex flex-col items-center md:items-start">
                <h1 className="text-4xl font-bold mb-5 text-center md:text-left">
                  <h1 className="tracking-tight inline font-display from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
                    Aftab Women Welfare Society
                  </h1>
                </h1>
                <p className="text-lg text-center md:text-left">
                  {t("description")}
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <Image
                  isBlurred
                  width={300}
                  src="https://placehold.co/300x300"
                  alt="NextUI Album Cover"
                  className="m-5"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="marquee" setVisitedSections={setVisitedSections}>
            <section>
              <MarqueeComponent />
            </section>
          </AnimatedSection>

          {/* Highlights section */}
          <AnimatedSection
            id="highlights"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] bg-transparent">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        radius="full"
                        size="md"
                        src="/public/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          Highlights
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-8 py-0 flex flex-col md:flex-row items-center justify-center">
                    {/*Donation */}
                    <Card
                      isFooterBlurred
                      className="w-[300px] h-[300px] col-span-12 sm:col-span-5 mb-5 mr-2"
                    >
                      <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-sm text-white/60 uppercase font-bold">
                          &nbsp;$
                        </p>
                        <h4 className="text-black font-medium text-2xl">
                          Donate
                        </h4>
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="/public/Images/donation.jpg"
                      />
                      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                          <p className="text-black text-tiny">
                            If you are able to, please consider donating.
                          </p>
                          <p className="text-black text-tiny">&#x1F603;</p>
                        </div>
                        <Button
                          className="text-tiny"
                          color="primary"
                          radius="full"
                          size="sm"
                        >
                          Notify Me
                        </Button>
                      </CardFooter>
                    </Card>
                    {/*Volunteer*/}
                    <Card
                      isFooterBlurred
                      className="w-[300px] md:w-2/3 h-[300px] col-span-12 sm:col-span-5 mb-5 mr-2"
                    >
                      <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-sm text-white/60 uppercase font-bold">
                          &nbsp;
                        </p>
                        <h4 className="text-black font-medium text-2xl">
                          Volunteer
                        </h4>
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-fit"
                        src="/public/Images/volunteeringposter.png"
                      />
                      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                          <p className="text-black text-tiny">
                            If you are able to, please consider donating.
                          </p>
                          <p className="text-black text-tiny">&#x1F603;</p>
                        </div>
                        <Button
                          className="text-tiny"
                          color="primary"
                          radius="full"
                          size="sm"
                        >
                          Notify Me
                        </Button>
                      </CardFooter>
                    </Card>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* programs section */}
          <AnimatedSection
            id="programs"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] bg-transparent">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        radius="full"
                        size="md"
                        src="/public/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          Programs
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>{t("programs.description")}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="solid"
                        className="mt-5"
                      >
                        Know More
                      </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/collaboration (1).png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* getInvolved section */}
          <AnimatedSection
            id="get-involved"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] bg-transparent">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        radius="full"
                        size="md"
                        src="/public/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          Get Involved
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/job.png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        Join us in making a difference! Your support can help us
                        empower communities, advocate for change, and provide
                        essential resources to those in need. Whether through
                        donations, volunteering, or spreading the word, every
                        action counts. Get involved today and be a part of our
                        mission to create a better world.
                      </p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="solid"
                        className="mt-5 mb-5"
                      >
                        Know More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* Image section */}
          <AnimatedSection
            id="get-involved"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] min-h-[215px] sm:min-h-[700px] bg-[url('/public/Images/women.png')] bg-contain bg-no-repeat bg-center"></Card>
              </div>
            </div>
          </AnimatedSection>

          {/* Resources section */}
          <AnimatedSection
            id="resources"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] bg-transparent">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        radius="full"
                        size="md"
                        src="/public/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          Resources
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        Explore our Resources section for valuable information
                        and tools to support our cause. Find research reports,
                        educational materials, and guides on how you can help
                        make a difference. Stay informed and get the resources
                        you need to join our mission effectively.
                      </p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="solid"
                        className="mt-5 mb-5"
                      >
                        Know More
                      </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/resource.png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* About section */}
          <AnimatedSection
            id="about-us"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%] bg-transparent">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        radius="full"
                        size="md"
                        src="/public/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          About Us
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/about.png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        Learn more about our mission, vision, and the impact we
                        strive to make every day. Discover how we address
                        pressing social issues, empower communities, and drive
                        sustainable change. Click to explore our journey,
                        achievements, and the dedicated team behind our efforts.
                        Join us in making a difference.
                      </p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="ghost"
                        className="mt-5 mb-5"
                        endContent={
                          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        }
                      >
                        Know More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonials Section */}
          <AnimatedSection
            id="testimonials"
            setVisitedSections={setVisitedSections}
          >
            <h2 className="text-2xl font-bold mb-5">Testimonials</h2>
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="1x"
                  className="mr-2"
                />
                <Card>
                  <CardBody>
                    <p>
                      Volunteering at [NGO Name] has been an incredibly
                      rewarding experience. Seeing the smiles on the faces of
                      the elderly residents and knowing we are making a real
                      difference in their lives fills my heart with joy. The
                      medical assistance we provide ensures they live
                      comfortably and with dignity.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name="Rajesh Sharma"
                  description="Volunteer"
                  avatarProps={{
                    src: "/public/Images/user.gif",
                  }}
                />
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="1x"
                  className="mr-2"
                />
                <Card>
                  <CardBody>
                    <p>
                      Supporting [NGO Name] has been one of the best decisions
                      I've made. Knowing that my contributions help provide
                      essential medical care and a loving home for the elderly
                      is truly fulfilling. The dedication and compassion of the
                      staff are truly inspiring.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name="Priya Desai"
                  description="Donor"
                  avatarProps={{
                    src: "/public/Images/user.gif",
                  }}
                />
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </DefaultLayout>
  );
}
