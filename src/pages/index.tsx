import React, { useState } from "react";
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

export default function IndexPage() {
  const [visitedSections, setVisitedSections] = useState(new Set());

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
                  Welcome to Our{" "}
                  <h1 className={title({ color: "violet" })}>NGO&nbsp;</h1>
                </h1>
                <p className="text-lg text-center md:text-left">
                  We are dedicated to making the world a better place through
                  our various programs and initiatives. Join us in our mission
                  to bring positive change.
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <Image
                  isBlurred
                  width={300}
                  src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
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
                <Card className="min-w-[100%]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="/public/Images/arrows.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          About Us
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        At [Your Organization Name], we are dedicated to
                        empowering individuals and communities through a diverse
                        range of programs designed to foster growth, learning,
                        and development. Our programs are tailored to meet the
                        needs of various age groups and interests, ensuring that
                        there is something for everyone. Explore our offerings
                        below and find the perfect fit for you or your loved
                        ones.x``
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
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/about.png"
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

          {/* programs section */}
          <AnimatedSection
            id="programs"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="/public/Images/connection.gif"
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
                      <p>
                        At [Your Organization Name], we are dedicated to
                        empowering individuals and communities through a diverse
                        range of programs designed to foster growth, learning,
                        and development. Our programs are tailored to meet the
                        needs of various age groups and interests, ensuring that
                        there is something for everyone. Explore our offerings
                        below and find the perfect fit for you or your loved
                        ones.
                      </p>
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
                        src="../../public/Images/collaboration.png"
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
                <Card className="min-w-[100%]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="/public/Images/arrows.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          Get Involved
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        At [Your Organization Name], we are dedicated to
                        empowering individuals and communities through a diverse
                        range of programs designed to foster growth, learning,
                        and development. Our programs are tailored to meet the
                        needs of various age groups and interests, ensuring that
                        there is something for everyone. Explore our offerings
                        below and find the perfect fit for you or your loved
                        ones.
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

          {/* About section */}
          <AnimatedSection
            id="about-us"
            setVisitedSections={setVisitedSections}
          >
            <div className="mb-5 mt-5">
              <div className="flex items-center mb-2">
                <Card className="min-w-[100%]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="/public/Images/arrows.gif"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h1 className="text-2xl font-bold leading-none text-default-600">
                          About Us
                        </h1>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left text-large text-default-400 lg:ml-10">
                      <p>
                        At [Your Organization Name], we are dedicated to
                        empowering individuals and communities through a diverse
                        range of programs designed to foster growth, learning,
                        and development. Our programs are tailored to meet the
                        needs of various age groups and interests, ensuring that
                        there is something for everyone. Explore our offerings
                        below and find the perfect fit for you or your loved
                        ones.x``
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
                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                      <Image
                        alt="Programs image"
                        src="/public/Images/about.png"
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
                      Make beautiful websites regardless of your design
                      experience.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name="Jane Doe"
                  description="Product Designer"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
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
                      Volunteering here has been an incredibly rewarding
                      experience. I highly recommend it to anyone looking to
                      make a difference.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <p className="text-right">
                <User
                  name="Jane Doe"
                  description="Volunteer"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
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
