import './Footer.css'
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
      <div className="footer mt-5" style={{color: "white", marginTop: "2rem"}}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6}>
            <div className="footer-widget">
              <Typography variant="h2" className="text-white">Get in Touch</Typography>
              <div className="contact-info text-white">
                <p><RoomIcon />123 E Store, Los Angeles, USA</p>
                <p><EmailIcon />email@example.com</p>
                <p><PhoneIcon />+123-456-7890</p>
              </div>
            </div>
          </Grid>

          <Grid item lg={3} md={6}>
            <div className="footer-widget">
              <Typography variant="h2" className="text-white">Follow Us</Typography>
              <div className="contact-info">
                <div className="social">
                  <IconButton href="#"><TwitterIcon /></IconButton>
                  <IconButton href="#"><FacebookIcon /></IconButton>
                  <IconButton href="#"><LinkedInIcon /></IconButton>
                  <IconButton href="#"><InstagramIcon /></IconButton>
                  <IconButton href="#"><YouTubeIcon /></IconButton>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={3} md={6}>
            <div className="footer-widget">
              <Typography variant="h2" className="text-white">Company Info</Typography>
              <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Condition</Link></li>
              </ul>
            </div>
          </Grid>

          <Grid item lg={3} md={6}>
            <div className="footer-widget">
              <Typography variant="h2" className="text-white">Purchase Info</Typography>
              <ul>
                <li><Link href="#">Payment Policy</Link></li>
                <li><Link href="#">Shipping Policy</Link></li>
                <li><Link href="#">Return Policy</Link></li>
              </ul>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={3} className="payment align-items-center">
          <Grid item lg={6} md={6}>
            <div className="payment-method">
              <Typography variant="h2" className="text-white">We Accept:</Typography>
              <img src="img/payment-method.png" alt="Payment Method" />
            </div>
          </Grid>
          <Grid item lg={6} md={6}>
            <div className="payment-security">
              <Typography variant="h2" className="text-white">Secured By:</Typography>
              <img src="img/godaddy.svg" alt="Payment Security" />
              <img src="img/norton.svg" alt="Payment Security" />
              <img src="img/ssl.svg" alt="Payment Security" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
