import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Tooltip } from "@nextui-org/react";

const FloatingButtons = () => {
  const handleButton2Click = () => {
    // Handle button 2 click action
    console.log("Button 2 clicked");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <Tooltip color="primary" showArrow={true} content="Take Quiz">
        <Button
          color="primary"
          variant="shadow"
          isIconOnly
          className="m-2"
          onClick={handleButton2Click}
        >
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default FloatingButtons;
