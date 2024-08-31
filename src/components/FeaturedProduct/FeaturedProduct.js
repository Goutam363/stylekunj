import { useEffect, useState } from "react";
import { Carousel } from 'antd';
import FeatureProductCard from './FeatureProductCard';
import { Container, Typography } from '@mui/material';
import axios from "axios";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  const [featuredpd1, setFeaturedpd1] = useState([]);
  const [featuredpd2, setFeaturedpd2] = useState([]);
  const [featuredpd3, setFeaturedpd3] = useState([]);
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

  const distributeProducts = () => {
    const shuffledProducts = shuffleArray([...products]);
    const pd1 = [];
    const pd2 = [];
    const pd3 = [];

    console.log(shuffledProducts.length);

    for (let i = 0; i < shuffledProducts.length; i++) {
      if (pd1.length < 9) {
        pd1.push(shuffledProducts[i]);
      } else if (pd2.length < 9) {
        pd2.push(shuffledProducts[i]);
      } else if (pd3.length < 9) {
        pd3.push(shuffledProducts[i]);
      } else {
        break;
      }
    }

    setFeaturedpd1(pd1);
    setFeaturedpd2(pd2);
    setFeaturedpd3(pd3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if featuredProducts exist in localStorage
        const storedProducts = localStorage.getItem('featuredProducts');
        if (storedProducts) {
          const parsedProducts = JSON.parse(storedProducts);
          const timestamp = parseInt(parsedProducts.timestamp);
          const currentTime = Date.now();
          const duration = (currentTime - timestamp) / (1000 * 60 * 60); // Duration in hours

          // If duration is greater than 3 hours, fetch data from API
          if (duration > 3) {
            const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product/featured-products`);
            const fetchedProducts = response.data;
            // Update localStorage with new products and timestamp
            localStorage.setItem('featuredProducts', JSON.stringify({ products: fetchedProducts, timestamp: Date.now() }));
            // Set state with fetched products
            setProducts(fetchedProducts);
          } else {
            // If duration is less than or equal to 3 hours, use products from localStorage
            setProducts(parsedProducts.products);
          }
        } else {
          // If no products in localStorage, fetch from API
          const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product/featured-products`);
          const fetchedProducts = response.data;
          // Update localStorage with fetched products and timestamp
          const currentTime = Date.now();
          localStorage.setItem('featuredProducts', JSON.stringify({ products: fetchedProducts, timestamp: currentTime }));
          // Set state with fetched products
          setProducts(fetchedProducts);
        }
        // Partitioning featured products into 3 arrays
        // distributeProducts();
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      distributeProducts(products);
    }
  }, [products]);

  return (
    <>
    <Container maxWidth="xl" style={{ marginBottom: '16px', marginTop: "3rem", padding: "0" }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <Typography variant="h4">Trending Ornaments</Typography>
      </div>
    <Carousel autoplay autoplaySpeed={2300} responsive={responsiveSettings}>
      {featuredpd1.map((featuredpd, index) => (
        <div className="carousel-item" key={index}>
          <FeatureProductCard productId={featuredpd.id} productName={featuredpd.product_name} productPhoto={featuredpd.image} mrp={featuredpd.mrp} price={featuredpd.price}/>
        </div>
      ))}
    </Carousel>
    <Carousel autoplay autoplaySpeed={2500} responsive={responsiveSettings}>
      {featuredpd2.map((featuredpd, index) => (
        <div className="carousel-item" key={index}>
          <FeatureProductCard productId={featuredpd.id} productName={featuredpd.product_name} productPhoto={featuredpd.image} mrp={featuredpd.mrp} price={featuredpd.price}/>
        </div>
      ))}
    </Carousel>
    <Carousel autoplay responsive={responsiveSettings}>
      {featuredpd3.map((featuredpd, index) => (
        <div className="carousel-item" key={index}>
          <FeatureProductCard productId={featuredpd.id} productName={featuredpd.product_name} productPhoto={featuredpd.image} mrp={featuredpd.mrp} price={featuredpd.price}/>
        </div>
      ))}
    </Carousel>
  </Container>
  </>
  );
}
