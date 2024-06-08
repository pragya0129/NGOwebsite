import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon.jsx";

import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandsHelping,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-10">
        <div className="inline-block justify-center text-center">
          {/* Overview Section */}
          <section className="flex flex-col md:flex-row items-center justify-center mb-10">
            <div className="flex-1 md:mr-5 mb-5 md:mb-0 flex flex-col items-center md:items-start">
              <h1 className="text-4xl font-bold mb-5 text-center md:text-left">
                Welcome to Our{" "}
                <h1 className={title({ color: "violet" })}>NGO&nbsp;</h1>
              </h1>
              <p className="text-lg text-center md:text-left">
                We are dedicated to making the world a better place through our
                various programs and initiatives. Join us in our mission to
                bring positive change.
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
          </section>

          {/* Highlights Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-5">Highlights</h2>
            <div className="flex flex-col items-start mb-5">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faBullhorn} size="2x" className="mr-3" />
                <h3 className="text-xl font-semibold">Upcoming Event</h3>
              </div>
              <p className="text-lg">
                Join us for our annual fundraiser to support our education
                program.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon
                  icon={faHandsHelping}
                  size="2x"
                  className="mr-3"
                />
                <h3 className="text-xl font-semibold">
                  Volunteer Opportunities
                </h3>
              </div>
              <p className="text-lg">
                Become a volunteer and help us make a difference in the
                community.
              </p>
            </div>
          </section>

          {/* Testimonials Section */}
          <section>
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
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
