import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from './ProductCard';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { AuthContext } from "../AuthProvider";

export default function Products() {
  const { searchKeyword, setSearchKeyword } = useContext(AuthContext);
  // console.log(searchKeyword);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(searchKeyword==="" || searchKeyword===undefined){
        // Check if products exist in localStorage
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          const parsedProducts = JSON.parse(storedProducts);
          const timestamp = parseInt(parsedProducts.timestamp);
          const currentTime = Date.now();
          const duration = (currentTime - timestamp) / (1000 * 60); // Duration in minutes

          // If duration is greater than 3 minute, fetch data from API
          if (duration > 3) {
            const response = await axios.get('http://localhost:5000/product');
            const fetchedProducts = response.data;
            // Update localStorage with new products and timestamp
            localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: Date.now() }));
            // Set state with fetched products
            setProducts(fetchedProducts);
          } else {
            // If duration is less than or equal to 3 minute, use products from localStorage
            setProducts(parsedProducts.products);
          }
        } else {
          // If no products in localStorage, fetch from API
          const response = await axios.get('http://localhost:5000/product');
          const fetchedProducts = response.data;
          // Update localStorage with fetched products and timestamp
          const currentTime = Date.now();
          localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: currentTime }));
          // Set state with fetched products
          setProducts(fetchedProducts);
        }
      } else {
          const response = await axios.get(`http://localhost:5000/product?search=${searchKeyword}`);
          const fetchedProducts = response.data;
          setProducts(fetchedProducts);
          // setSearchKeyword("");    // will do later
      }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, [searchKeyword]);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
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
    </Container>
    </>
  );
}
