import { Grid } from "@mui/material";
import BannerCategory from "./BannerCategory";
import CarouselAd from "./CarouselAd";
import RightSideBanner from "./RightSideBanner";

export default function MainSlider() {
    const img1="img/slider-1.jpg";
    const img2="img/slider-2.jpg";
    const img3="img/slider-3.jpg";
    const img4="img/slider-4.jpg";
    const img5="img/slider-5.jpg";
    const img6="img/slider-6.jpg";
    const img7="img/slider-7.jpg";
    const img8="img/slider-8.jpg";
  return (
    <div style={{ marginTop: "7rem", marginLeft: "1rem", marginRight: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <BannerCategory />
        </Grid>
        <Grid item xs={12} md={6}>
          <CarouselAd img1={img1} img2={img2} img3={img3} img4={img4} slideDuration={2000} />
          <CarouselAd img1={img5} img2={img6} img3={img7} img4={img8} slideDuration={3000} />
        </Grid>
        <Grid item xs={12} md={2}>
          <RightSideBanner />
        </Grid>
      </Grid>
    </div>
  );
}
