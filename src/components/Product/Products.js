import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from './ProductCard';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { AuthContext } from "../AuthProvider";

export default function Products() {
  const { searchKeyword } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 24; // Number of products per page
  const bottomOffset = 300; // 300px from bottom

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchKeyword) {
          // Check if products exist in localStorage
          const storedProducts = localStorage.getItem('products');
          if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts);
            const timestamp = parseInt(parsedProducts.timestamp);
            const currentTime = Date.now();
            const duration = (currentTime - timestamp) / (1000 * 60); // Duration in minutes

            if (duration > 10) {
              // If duration is greater than 10 minutes, fetch data from API
              const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product`);
              const fetchedProducts = response.data;
              // Update localStorage with new products and timestamp
              localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: Date.now() }));
              // Initialize the products with the first page of data
              setProducts(fetchedProducts.slice(0, limit));
            } else {
              // If duration is less than or equal to 10 minutes, use products from localStorage
              setProducts(parsedProducts.products.slice(0, limit));
            }
          } else {
            // If no products in localStorage, fetch from API
            const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product`);
            const fetchedProducts = response.data;
            // Update localStorage with fetched products and timestamp
            localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: Date.now() }));
            // Initialize the products with the first page of data
            setProducts(fetchedProducts.slice(0, limit));
          }
        } else {
          const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product?search=${searchKeyword}`);
          const fetchedProducts = response.data;
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, [searchKeyword]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;

      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const threshold = document.documentElement.offsetHeight - bottomOffset;

      if (scrollPosition >= threshold) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, searchKeyword, loading]);

  const loadMoreProducts = async () => {
    setLoading(true);
    try {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts).products;
        const nextPage = page + 1;
        const newProducts = parsedProducts.slice((nextPage - 1) * limit, nextPage * limit);

        if (newProducts.length > 0) {
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
          setPage(nextPage);
        }
      }
    } catch (error) {
      console.error('Error loading more products:', error);
    } finally {
      setLoading(false);
    }
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="xl" style={{ marginBottom: '16px', marginTop: "5rem", padding: "0" }}>
      <Grid container spacing={isXs ? 0 : 2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              productId={product.id}
              productName={product.product_name}
              productPhoto={product.image}
              mrp={product.mrp}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
      {loading && <div>Loading...</div>}
    </Container>
  );
}
