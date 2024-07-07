import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import sendEmailP from "@/pages/Email/email-partner";

const PartnerForm = ({ onFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    reason: "",
    application: "Partner",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailP(formValues)
      .then((result) => {
        console.log(result.text);
        setFormValues({
          name: "",
          email: "",
          reason: "",
          application: "Partner",
        });
        onFormSubmit();
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        fullWidth
        color="primary"
        size="lg"
        placeholder="Name"
        name="name"
        className="mb-2"
        value={formValues.name}
        onChange={handleChange}
      />
      <Input
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
        name="email"
        className="mb-2"
        value={formValues.email}
        onChange={handleChange}
      />
      <Textarea
        fullWidth
        color="primary"
        placeholder="How can we collaborate?"
        name="reason"
        className="mb-2"
        value={formValues.reason}
        onChange={handleChange}
      />
      <Button className="w-full bg-blue-500 text-white" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default PartnerForm;
