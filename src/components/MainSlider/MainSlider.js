import { Grid } from "@mui/material";
import BannerCategory from "./BannerCategory";
import CarouselAd from "./CarouselAd";
import RightSideBanner from "./RightSideBanner";

export default function MainSlider() {
    const img1="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-1.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-1.jpg";
    const img2="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-2.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-2.jpg";
    const img3="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-3.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-3.jpg";
    const img4="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-4.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-4.jpg";
    const img5="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-5.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-5.jpg";
    const img6="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-6.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-6.jpg";
    const img7="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-7.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-7.jpg";
    const img8="https://firebasestorage.googleapis.com/v0/b/stylekunj-cdd6c.appspot.com/o/Slider%2Fslider-8.jpg?alt=media&token=e9d3b487-b3a4-4d2a-a6ae-78b07ef561a4" || "img/slider-8.jpg";
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
