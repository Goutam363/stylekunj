import './RightSideBanner.css';
import { Grid, Box } from "@mui/material";

export default function RightSideBanner() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className="banner-box">
          <img
            src="img/category-1.jpg"
            alt="Summer Collection"
            className="banner-image"
          />
          <a href="#" className="banner-overlay">
            <p className="banner-text">
              Adult Collection
            </p>
          </a>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className="banner-box">
          <img
            src="img/category-2.jpg"
            alt="Winter Collection"
            className="banner-image"
          />
          <a href="#" className="banner-overlay">
            <p className="banner-text">
              Kids Collection
            </p>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}
