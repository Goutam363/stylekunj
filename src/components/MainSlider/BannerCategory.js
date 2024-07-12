import "./MainSlider.css";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

const ZoomableImage = styled("img")({
  width: "100%",
  height: "auto",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export default function BannerCategory() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category1.jpg" alt="Banner Image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category2.jpg" alt="Banner Image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category3.jpg" alt="Banner Image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category4.jpg" alt="Banner Image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category5.jpg" alt="Banner Image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <ZoomableImage src="img/Banner_Category6.jpg" alt="Banner Image" />
        </Box>
      </Grid>
    </Grid>
  );
}
