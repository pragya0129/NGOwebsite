import emailjs from "emailjs-com";

const sendEmail = (formValues) => {
  const serviceId = "service_aenpcsh";
  const templateId = "template_yb1xq87";
  const userId = "pK5XJbv6nvMdb_ydx";

  const templateParams = {
    name: formValues.name,
    email: formValues.email,
    phone: formValues.phone,
    message: formValues.message,
  };

  return emailjs.send(serviceId, templateId, templateParams, userId);
};

export default sendEmail;
