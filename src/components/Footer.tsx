import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import RevolverMapsWidget from "./RevolverMapsWidget";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Aftab Women Welfare Society
            </Typography>
            <Typography variant="body1">
              Empowering women through legal support and awareness.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Mail Us
              <IconButton color="inherit" aria-label="mail us">
                <Email />
              </IconButton>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Call Us
              <IconButton color="inherit" aria-label="call us">
                <Phone />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Find Us
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" gutterBottom>
            Aftab Women Welfare © 2024
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2" mr={1}>
              Website by - Pragya Gaur
            </Typography>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="www.linkedin.com/in/pragyagaur12"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
