import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Aftab Women Welfare Society
            </Typography>
            <Typography variant="body1">About</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
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
            <Typography variant="h6" gutterBottom>
              Find Us
              <IconButton color="inherit" aria-label="find us">
                <LocationOn />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" gutterBottom>
            Aftab Women Welfare © 2024
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2">
              Website by - Pragya Gaur
            </Typography>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
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
