import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import sendEmail from "@/pages/Email/email-contact";
import { useTranslation } from "react-i18next";

const ContactForm = ({ onFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formValues)
      .then((result) => {
        console.log(result.text);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        onFormSubmit();
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <form className="w-full mt-6 max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          fullWidth
          variant="bordered"
          label={t("name")}
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          isRequired
        />
      </div>
      <div className="mb-4">
        <Input
          fullWidth
          variant="bordered"
          label={t("email")}
          id="email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          isRequired
        />
      </div>
      <div className="mb-4">
        <Input
          fullWidth
          variant="bordered"
          label={t("phone")}
          type="tel"
          id="number"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Textarea
          fullWidth
          variant="bordered"
          label={t("message")}
          rows={6}
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
      </div>
      <Button className="w-full bg-blue-500 text-white" type="submit">
        {t("submit")}
      </Button>
    </form>
  );
};

export default ContactForm;
