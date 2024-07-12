import { Grid, Box } from "@mui/material";

export default function RightSideBanner() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ borderRadius: "10px", marginBottom: "1px" }}>
          <img src="img/category-1.jpg" alt="Category Image" style={{ width: "100%", height: "auto" }} />
          <a href="#" className="img-text" style={{ textDecoration: "none" }}>
            <p>Some text goes here that describes the image</p>
          </a>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ borderRadius: "10px" }}>
          <img src="img/category-2.jpg" alt="Category Image" style={{ width: "100%", height: "auto" }} />
          <a href="#" className="img-text" style={{ textDecoration: "none" }}>
            <p>Some text goes here that describes the image</p>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}
