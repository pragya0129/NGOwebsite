import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import sendEmail from "@/pages/Email/email-contact";

const ContactForm = ({ onFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
          label="Name"
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
          label="Email"
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
          label="Phone Number"
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
          label="Message"
          rows={6}
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
      </div>
      <Button className="w-full bg-blue-500 text-white" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
