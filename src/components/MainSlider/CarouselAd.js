import { Carousel } from "antd";
import { styled } from "@mui/system";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ZoomableImage = styled("img")({
  width: "100%",
  // height: "auto",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export default function CarouselAd({img1,img2,img3,img4,slideDuration}) {
  return (
    <div style={{marginTop: "1rem", marginBottom: "1rem", borderRadius: "15px", overflow: "hidden"}}>
    <Carousel autoplay autoplaySpeed={slideDuration}>
      <div>
        <ZoomableImage src={img1} alt="Image 1" />
      </div>
      <div>
        <ZoomableImage src={img2} alt="Image 2" />
      </div>
      <div>
        <ZoomableImage src={img3} alt="Image 3" />
      </div>
      <div>
        <ZoomableImage src={img4} alt="Image 4" />
      </div>
  </Carousel>
  </div>
  );
}
