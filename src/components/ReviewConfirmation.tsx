import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const ReviewConfirmation = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return <p className="text-center mt-4">{t("confirmation")}</p>;
};

export default ReviewConfirmation;
