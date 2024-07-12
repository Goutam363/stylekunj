import './FooterBottom.css'
import { Link } from 'react-router-dom';
import { Container, Typography } from "@mui/material";
export default function FooterBottom() {
  return (
    <div>
      {/* <!-- Footer Bottom Start --> */}
      <div className="footer-bottom" style={{color: "white"}}>
      <Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Typography variant="body1" className="text-white">
            Copyright &copy; <Link to="https://github.com/Goutam363" target="_blank" style={{textDecoration: "none", color: "white"}}>Goutam363</Link>. All Rights Reserved
          </Typography>
        </div>
      </Container>
    </div>
        {/* <!-- Footer Bottom End -->    */}
    </div>
  )
}
