import { useEffect, useState, useContext } from "react";
import { Grid, Typography, Container, Button, Box } from '@mui/material';
import CartCard from "./CartCard";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "../cookieUtils";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart({ onDeleteProduct }) {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(0);
  const { loggedin, cart, setCart, crtQty, setCrtQty } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (loggedin) {
        const token = getTokenFromCookie();
        const username = localStorage.getItem("username");

        try {
          // Make GET request to retrieve user profile data
          const profileResponse = await axios.get(
            `http://localhost:5000/auth/${username}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userProfile = profileResponse.data;
          const cartTemp = userProfile.cart.split("|");

          // Get products from local storage
          const storedProductsObj = JSON.parse(
            localStorage.getItem("products")
          );
          const storedProducts = storedProductsObj.products;

          let outOfStock = false;
          // Iterate over the cartTemp array
          for (let i = 0; i < cartTemp.length; i++) {
            const productId = cartTemp[i];
            // Find the corresponding product in the storedProducts array
            const product = storedProducts.find(
              (item) => item.id === productId
            );
            // If product is found and its stock is less than 1
            if (product && product.stock < 1) {
              // Remove the corresponding string from the cartTemp array
              cartTemp.splice(i, 1);
              outOfStock = true;
              // Decrement i to account for the removed item
              i--;
            }
          }

          // Join the remaining items in the cartTemp array using '|'
          const cartString = cartTemp.join("|");

          if (outOfStock) {
            try {
              await axios.post(
                `http://localhost:5000/auth/cart`,
                {
                  username: username,
                  cart: cartString,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            } catch (error) {
              console.log("Error on updating cart", error);
            }
          }

          await setCart(cartString);

          // Initialize crtQty with product IDs from cart and quantity 1 for items not already present in crtQty
          if (userProfile.cart !== "") {
            const cartIds = userProfile.cart.split("|");
            const initialCrtQty = {};
            cartIds.forEach((id) => {
              // Check if the product ID is not already present in crtQty before initializing it
              if (!crtQty[id]) {
                initialCrtQty[id] = 1;
              }
            });
            await setCrtQty((prevCrtQty) => ({
              ...prevCrtQty,
              ...initialCrtQty,
            }));
          }
        } catch (error) {
          console.error("Error fetching cart ids:", error);
        }

        if (cart) {
          const cartIds = cart.split("|");
          // Get products from local storage
          const storedProductsObj = JSON.parse(
            localStorage.getItem("products")
          );
          const storedProducts = storedProductsObj.products;
          // Filter products based on cart IDs
          const filteredProducts = storedProducts.filter((product) =>
            cartIds.includes(product.id)
          );
          // Set filtered products to state
          setProducts(filteredProducts);
        }
      } else {
        navigate("/login");
      }
    };
    fetchData();
  }, [cart, reload]);

  const handleProceed = () => {
    if (!crtQty || Object.keys(crtQty).length === 0) {
      toast.warn(`Seems like your cart is either empty or maybe you reloaded the page in between`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setReload(reload + 1);
    } else {
      navigate("/billing");
    }
  };

  return (
    <>
      {loggedin && cart === "" ? (
        <Typography variant="h4" align="center" color="textSecondary">
          Cart is Empty!
        </Typography>
      ) : (
        <div>
          <Container sx={{ my: 5, mt: '5.5rem' }}>
            <Grid container spacing={4} justifyContent="center">
              {products.map((product, index) => (
                <Grid item key={index} lg={4} md={6}>
                  <CartCard product={product} onDelete={onDeleteProduct} />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Box
            sx={{
              position: 'fixed',
              top: '90px',
              right: '20px',
              zIndex: 999,
            }}
          >
            <Button variant="contained" color="primary" onClick={handleProceed}>
              Proceed to Buy
            </Button>
          </Box>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
