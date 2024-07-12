import { Carousel } from 'antd';
import FeatureProductCard from './FeatureProductCard';
import { Container, Typography } from '@mui/material';

export default function FeaturedProduct() {
  const responsiveSettings = [
    {
        breakpoint: 10000,
        settings: {
          slidesToShow: 8,
        },
      },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ];
  return (
    <>
    <Container maxWidth="xl" style={{ marginBottom: '16px', marginTop: "3rem", padding: "0" }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <Typography variant="h4">Featured Products</Typography>
      </div>
    <Carousel autoplay autoplaySpeed={2300} responsive={responsiveSettings}>
      <div className="carousel-item">
        <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
        <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
    </Carousel>
    <Carousel autoplay autoplaySpeed={2500} responsive={responsiveSettings}>
    <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
        <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
  </Carousel>
  <Carousel autoplay responsive={responsiveSettings}>
    <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
    <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
    </div>
    <div className="carousel-item">
        <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
      <div className="carousel-item">
      <FeatureProductCard productName="Product Name" productPhoto="img/product-5.jpg" mrp="500" price="200"/>
      </div>
  </Carousel>
  </Container>
  </>
  );
}
