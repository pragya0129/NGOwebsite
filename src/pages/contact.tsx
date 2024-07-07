import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ReviewConfirmation from "@/components/ReviewConfirmation";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    onOpen();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Got a query? Connect with us...
          </h2>
        </div>
        <div className="w-full md:w-1/2 inline-block max-w-lg w-full px-4 text-center">
          <div className="flex items-center justify-center">
            <h1 className={title()}>Contact Us</h1>
            <img
              src="assets/Images/tech-support.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
          <ContactForm onFormSubmit={handleFormSubmit} />
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
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success</ModalHeader>
              <ModalBody className="flex flex-col items-center">
                <ReviewConfirmation />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
