import { useEffect, useState } from "react";
import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import RelatedProductItem from "./RelatedProductItem";
import axios from "axios";

export default function RelatedProducts({id}) {
  const [products, setProducts] = useState([]);
  // console.log('category:',category);
  // console.log('search:',search);
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`http://localhost:5000/product/related-products/${id}`);
          // Set state with fetched products
          setProducts(response.data);
      } catch (error) {
        console.error('Error fetching Related-products data:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, [id]);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
  <div>
    <Container maxWidth="xl" style={{ padding: "0" }}>
      <div className="section-header text-center">
        <Typography variant="h2" align="center">Related Products</Typography>
      </div>
      <Container style={{ padding: "0" }}>
        <Grid container spacing={isXs ? 0 : 2}>
          {products.map((product, index) => (
            <Grid item xs={6} md={3} key={index}>
              <RelatedProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  </div>
  );
}
