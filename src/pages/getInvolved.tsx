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
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import VolunteerForm from "@/components/VolunteerForm";
import ReviewConfirmation from "@/components/ReviewConfirmation";
import PartnerForm from "@/components/PartnerForm";
import { useTranslation } from "react-i18next";

export default function GetInvolved() {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    onOpen();
  };

  const involvementOptions = [
    {
      title: t("volunteer"),
      description: t("volunteerDesc"),
      image: "assets/Images/help each other.png",
      link: "/volunteer",
      form: <VolunteerForm onFormSubmit={handleFormSubmit} />,
    },
    {
      title: t("donate"),
      description: t("donateDesc"),
      image: "assets/Images/donateinvolvement.png",
      link: "/donate",
      form: (
        <div className="text-center my-5">
          <img
            src="assets/Images/qr.jpeg"
            alt="QR Code"
            className="w-36 h-36 mx-auto mb-4"
          />
          <p>{t("qrText")}</p>
        </div>
      ),
    },
    {
      title: t("partner"),
      description: t("partnerDesc"),
      image: "assets/Images/partner.png",
      link: "/partner",
      form: <PartnerForm onFormSubmit={handleFormSubmit} />,
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
            <h1 className={title()}>{t("getInvolved")}</h1>
            <img
              src="assets/Images/volunteering.gif"
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
                  {t("learnMore")}
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
                      {t("close")}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {t("success")}
                </ModalHeader>
                <ModalBody className="flex flex-col items-center">
                  <ReviewConfirmation />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    {t("close")}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </DefaultLayout>
  );
}
