import emailjs from "emailjs-com";

const sendEmailP = (formValues) => {
  const serviceId = "service_aenpcsh";
  const templateId = "template_74saa2n";
  const userId = "pK5XJbv6nvMdb_ydx";

  const templateParams = {
    name: formValues.name,
    email: formValues.email,
    reason: formValues.reason,
    application: formValues.application,
  };

  return emailjs.send(serviceId, templateId, templateParams, userId);
};

export default sendEmailP;
