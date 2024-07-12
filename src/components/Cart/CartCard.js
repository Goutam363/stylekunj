import React, { useState, useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../AuthProvider";
import { updateQuantity } from "../cartUtils";
import axios from "axios";
import { getTokenFromCookie } from "../cookieUtils";

export default function CartCard({ product, onDelete }) {
  const { crtQty, setCrtQty, cart, setCart } = useContext(AuthContext);
  // Initialize quantity with quantity from crtQty if available
  const initialQuantity = crtQty[product.id] || 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  // const [quantity, setQuantity] = useState(1);
  const [mrp, setMrp] = useState(product.mrp);
  const [price, setPrice] = useState(product.price);

  const productImages = product.image.split('|');

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 20) {
      const updatedMrp = product.mrp * newQuantity;
      const updatedPrice = product.price * newQuantity;
      setQuantity(newQuantity);
      setMrp(updatedMrp);
      setPrice(updatedPrice);
      updateQuantity(product.id, newQuantity, setCrtQty);
    }
  };

  const handleDelete = async () => {
    const updatedCrtQty = { ...crtQty };
    delete updatedCrtQty[product.id];
    await setCrtQty(updatedCrtQty);

    const updatedCartArr = cart.split('|').filter(id => id !== product.id);
    const updatedCartStr = updatedCartArr.join('|');
    const token = getTokenFromCookie();
    const username = localStorage.getItem('username');

    try {
      await axios.post(
        `http://localhost:5000/auth/cart`,
        {
          username: username,
          cart: updatedCartStr,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      await setCart(updatedCartStr);
      await onDelete();
    } catch(error) {
      console.log('Error while updating the cart!', error);
    }
  };

  return (
    <Card sx={{ mt: 3, borderRadius: '16px' }}>
      <Grid container noGutters>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={productImages[0]}
            alt="Product"
            sx={{ mx: 1, my: 1, maxHeight: 'auto', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h5">{product.product_name}</Typography>
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textDecoration: 'line-through', color: 'red' }}
              >
                ₹{mrp}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                ₹{price} Only
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="success.main">
                Save: ₹{mrp - price}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} justifyContent="center" sx={{ mx: 3, mt: 3 }}>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ mr: 2, mb: 3 }}
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <TextField
            disabled
            size="small"
            sx={{ backgroundColor: 'white', color: 'black', mr: 2 }}
            value={quantity}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ mr: 2, mb: 3 }}
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 20}
          >
            +
          </Button>
          <IconButton
            color="secondary"
            size="small"
            sx={{ mb: 3 }}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
        </Grid>
      </Grid>
    </Card>
  );
}