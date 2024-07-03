import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function GetInvolved() {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const involvementOptions = [
    {
      title: "Volunteer",
      description:
        "Join us as a volunteer and make a difference in your community.",
      image: "/public/Images/help each other.png",
      link: "/volunteer",
      form: (
        <>
          <Input fullWidth color="primary" size="lg" placeholder="Name" />
          <Input fullWidth color="primary" size="lg" placeholder="Email" />
          <Textarea
            fullWidth
            color="primary"
            placeholder="Why do you want to volunteer?"
          />
        </>
      ),
    },
    {
      title: "Donate",
      description: "Support our cause by making a donation.",
      image: "/public/Images/donateinvolvement.png",
      link: "/donate",
      form: (
        <>
          <Input fullWidth color="primary" size="lg" placeholder="Name" />
          <Input fullWidth color="primary" size="lg" placeholder="Email" />
          <Input fullWidth color="primary" size="lg" placeholder="Amount" />
        </>
      ),
    },
    {
      title: "Partner",
      description: "Partner with us to achieve greater impact.",
      image: "/public/Images/partner.png",
      link: "/partner",
      form: (
        <>
          <Input fullWidth color="primary" size="lg" placeholder="Name" />
          <Input fullWidth color="primary" size="lg" placeholder="Email" />
          <Textarea
            fullWidth
            color="primary"
            placeholder="How can we collaborate?"
          />
        </>
      ),
    },
  ];

  const openModal = (option) => {
    setSelectedOption(option);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedOption(null);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className={title()}>Get Involved</h1>
            <img
              src="/public/Images/volunteering.gif"
              alt="Resources Icon"
              className="ml-5 w-20 rounded-3xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {involvementOptions.map((option, index) => (
            <Card key={index} className="rounded-lg shadow-lg">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h2 className="font-bold text-xl mb-2">{option.title}</h2>
                <p className="text-default-500">{option.description}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="flex justify-center items-center mb-4">
                  <Image
                    alt="Program Image"
                    className="object-cover rounded-xl"
                    src={option.image}
                    width={300}
                  />
                </div>
                <Button
                  className="w-full bg-blue-500 text-white"
                  onClick={() => openModal(option)}
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        {selectedOption && (
          <Modal
            isOpen={visible}
            onOpenChange={setVisible}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {selectedOption.title}
                  </ModalHeader>
                  <ModalBody>{selectedOption.form}</ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Submit
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </section>
    </DefaultLayout>
  );
}
