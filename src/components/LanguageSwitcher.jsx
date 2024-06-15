// components/LanguageSwitcher.js
import React from "react";
import { Switch } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === "en");

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <Switch
      checked={isEnglish}
      size="lg"
      color="success"
      onChange={handleChange}
    >
      {isEnglish ? "English" : "हिन्दी"}
    </Switch>
  );
};

export default LanguageSwitcher;
