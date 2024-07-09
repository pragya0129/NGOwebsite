import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import QuizComponent from "./Quiz";

const FloatingButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButton2Click = () => {
    onOpen();
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Tooltip color="primary" showArrow content="Take Quiz">
          <Button
            color="primary"
            variant="faded"
            isIconOnly
            className="m-2"
            onClick={handleButton2Click}
          >
            <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
          </Button>
        </Tooltip>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} placement="bottom-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Quiz</ModalHeader>
          <ModalBody>
            <QuizComponent />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FloatingButtons;
