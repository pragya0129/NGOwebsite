import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";

    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              {t("ngoName")}
            </Typography>
            <Typography variant="body1">{t("footerdesc")}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link className="text-white" href="mailto:aftabwws@gmail.com">
              <Typography variant="h6" gutterBottom>
                <IconButton color="inherit" aria-label="mail us">
                  <Email className="mr-2 mb-1" />
                </IconButton>
                aftabwws@gmail.com
              </Typography>
            </Link>
            <Link className="text-white" href="tel:+918094017674">
              <Typography variant="h6" gutterBottom>
                <IconButton color="inherit" aria-label="call us">
                  <Phone />
                </IconButton>
                +91-8094017674
              </Typography>
            </Link>
            <Link className="text-white" href="tel:+919999786093">
              <Typography variant="h6" gutterBottom>
                <IconButton color="inherit" aria-label="call us">
                  <Phone />
                </IconButton>
                +91-9999786093
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link
              isExternal
              className="text-white"
              href="https://m.facebook.com/100066699160202/"
            >
              <Typography variant="h6" gutterBottom>
                <IconButton color="inherit" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="mb-1" />
                </IconButton>
                {t("follow")}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              <LocationOn className="mb-1 mr-2" />
              {t("find")}
              <Typography variant="body1">{t("address")}</Typography>
            </Typography>
            <iframe
              title="abc"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.991114871467!2d74.62645098860067!3d26.456301744230544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be710af9b245b%3A0xb909fb300a73a8a3!2sKhadim%20Mohalla%2C%20Diggi%20Bazaar%2C%20Ajmer%2C%20Rajasthan%20305001!5e0!3m2!1sen!2sin!4v1720260730962!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={15}>
          <Typography variant="body2" gutterBottom>
            {t("ngoName")} © 2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
