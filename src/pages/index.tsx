//@ts-ignore
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleProgramBtn = () => {
    navigate("/programs");
  };

  const handleGetInvolvedBtn = () => {
    navigate("/getInvolved");
  };

  const handleResourcesBtn = () => {
    navigate("/resources");
  };

  const handleAboutBtn = () => {
    navigate("/about");
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
                  <h1 className="tracking-tight inline from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
                    {t("ngoName")}
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
                  src="assets/Images/ngoVideo.gif"
                  alt="NextUI Album Cover"
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
                        src="assets/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          {t("highlights")}
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
                      <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="assets/Images/donatehigh.png"
                      />
                      <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                          <p className="text-white text-tiny">
                            {t("donationmsg")}
                          </p>
                          <p className="text-black text-tiny">&#10084;</p>
                        </div>
                        <Button
                          className="text-tiny"
                          color="default"
                          variant="shadow"
                          radius="full"
                          size="sm"
                          onClick={handleGetInvolvedBtn}
                        >
                          {t("learnmore")}
                        </Button>
                      </CardFooter>
                    </Card>
                    {/*Volunteer*/}
                    <Card
                      isFooterBlurred
                      className="w-[300px] md:w-2/3 h-[300px] col-span-12 sm:col-span-5 mb-5 mr-2"
                    >
                      <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-black font-medium text-2xl">
                          {t("volunteer")}
                        </h4>
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-fit"
                        src="assets/Images/test1.png"
                      />
                      <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                          <p className="text-white text-tiny">
                            {t("volunteertext")}
                          </p>
                        </div>
                        <Button
                          className="text-tiny"
                          color="default"
                          variant="shadow"
                          radius="full"
                          size="sm"
                          onClick={handleGetInvolvedBtn}
                        >
                          {t("learnmore")}
                        </Button>
                      </CardFooter>
                    </Card>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* programs section
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
                        src="assets/Images/cube-in-circle.gif"
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
                        size="ld"
                        variant="ghost"
                        className="mt-5 mb-5"
                        endContent={
                          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        }
                        onClick={handleProgramBtn}
                      >
                        Know More
                      </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="assets/Images/collaboration (1).png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </AnimatedSection> */}

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
                        src="assets/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          {t("getInvolved")}
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="assets/Images/job.png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>{t("getInvolvedDesc")}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="ghost"
                        className="mt-5 mb-5"
                        endContent={
                          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        }
                        onClick={handleGetInvolvedBtn}
                      >
                        {t("knowMore")}
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
                <Card className="min-w-[100%] min-h-[215px] sm:min-h-[700px] bg-[url('/assets/Images/women.png')] bg-contain bg-no-repeat bg-center"></Card>
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
                        src="assets/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          {t("resources")}
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>{t("resourcesDesc")}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="ghost"
                        className="mt-5 mb-5"
                        endContent={
                          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        }
                        onClick={handleResourcesBtn}
                      >
                        {t("knowMore")}
                      </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="assets/Images/resource.png"
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
                        src="assets/Images/cube-in-circle.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          {t("about")}
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="assets/Images/about.png"
                        className="object-cover rounded-xl mb-5"
                        width={270}
                        height={180}
                      />
                    </div>
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>{t("aboutDesc")}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="md"
                        variant="ghost"
                        className="mt-5 mb-5"
                        endContent={
                          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        }
                        onClick={handleAboutBtn}
                      >
                        {t("knowMore")}
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
            <h2 className="text-2xl font-bold mb-5">{t("testimonials")}</h2>
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="1x"
                  className="mr-2"
                />
                <Card>
                  <CardBody>
                    <p>{t("testimonial1")}</p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name={t("testimonial1name")}
                  description={t("volunteer")}
                  avatarProps={{
                    src: "assets/Images/user.gif",
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
                    <p>{t("testimonial2")}</p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name={t("testimonial2name")}
                  description={t("donor")}
                  avatarProps={{
                    src: "assets/Images/user.gif",
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
