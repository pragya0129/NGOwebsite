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
              Name
            </Typography>
            <Typography variant="body1">About</Typography>
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
      </Container>
    </Box>
  );
};

export default Footer;
