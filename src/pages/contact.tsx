import React from "react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Input, Textarea, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Got a query? Connect with us...
          </h2>
        </div>
        <div className="w-full md:w-1/2 inline-block max-w-lg w-full px-4 text-center">
          <h1 className={title()}>Contact Us</h1>
          <form className="w-full mt-6 max-w-md mx-auto">
            <div className="mb-4">
              <Input
                fullWidth
                clearable
                label="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <Input
                fullWidth
                clearable
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <Input
                fullWidth
                clearable
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="mb-4">
              <Textarea
                fullWidth
                label="Message"
                placeholder="Enter your message"
                rows={6}
              />
            </div>
            <Button className="w-full bg-blue-500 text-white" type="submit">
              Submit
            </Button>
          </form>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-blue-600 text-2xl"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-400 text-2xl"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-500 text-2xl"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-blue-700 text-2xl"
              />
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
