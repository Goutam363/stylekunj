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
  const { loggedin, setProfile, cart, setCart, crtQty, setCrtQty, tokenContext, username } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (loggedin) {
        const token = tokenContext;
        // const username = localStorage.getItem("username");

        try {
          // Make GET request to retrieve user profile data
          const profileResponse = await axios.get(
            `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/auth/${username}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userProfile = profileResponse.data;
          setProfile(userProfile);
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
                `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/auth/cart`,
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

  const handleAddProducts = async () => {
    navigate("/products");
  };

  return (
    <>
      {loggedin && cart === "" ? (
        <div>
        <Typography sx={{mt: "5rem"}} variant="h4" align="center" color="textSecondary">
          Cart is Empty!
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: "10rem",
          }}
        >
          <div>
            <svg viewBox="0 0 1024 1024" className="emptyBox">
              <path
                d="M660 103.2l-149.6 76 2.4 1.6-2.4-1.6-157.6-80.8L32 289.6l148.8 85.6v354.4l329.6-175.2 324.8 175.2V375.2L992 284.8z"
                fill="#FFFFFF"
              />
              <path
                d="M180.8 737.6c-1.6 0-3.2 0-4-0.8-2.4-1.6-4-4-4-7.2V379.2L28 296c-2.4-0.8-4-4-4-6.4s1.6-5.6 4-7.2l320.8-191.2c2.4-1.6 5.6-1.6 8 0l154.4 79.2L656 96c2.4-1.6 4.8-0.8 7.2 0l332 181.6c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2l-152.8 88v350.4c0 3.2-1.6 5.6-4 7.2-2.4 1.6-5.6 1.6-8 0l-320-174.4-325.6 173.6c-1.6 0.8-2.4 0.8-4 0.8zM48 289.6L184.8 368c2.4 1.6 4 4 4 7.2v341.6l317.6-169.6c2.4-1.6 5.6-1.6 7.2 0l312.8 169.6V375.2c0-3.2 1.6-5.6 4-7.2L976 284.8 659.2 112.8 520 183.2c0 0.8-0.8 0.8-0.8 1.6-2.4 4-7.2 4.8-11.2 2.4l-1.6-1.6h-0.8l-152.8-78.4L48 289.6z"
                fill="#6A576D"
              />
              <path
                d="M510.4 179.2l324.8 196v354.4L510.4 554.4z"
                fill="#121519"
              />
              <path
                d="M510.4 179.2L180.8 375.2v354.4l329.6-175.2z"
                fill="#121519"
              />
              <path
                d="M835.2 737.6c-1.6 0-2.4 0-4-0.8l-324.8-176c-2.4-1.6-4-4-4-7.2V179.2c0-3.2 1.6-5.6 4-7.2 2.4-1.6 5.6-1.6 8 0L839.2 368c2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2h-4zM518.4 549.6l308.8 167.2V379.2L518.4 193.6v356z"
                fill="#6A576D"
              />
              <path
                d="M180.8 737.6c-1.6 0-3.2 0-4-0.8-2.4-1.6-4-4-4-7.2V375.2c0-3.2 1.6-5.6 4-7.2l329.6-196c2.4-1.6 5.6-1.6 8 0 2.4 1.6 4 4 4 7.2v375.2c0 3.2-1.6 5.6-4 7.2l-329.6 176h-4z m8-358.4v337.6l313.6-167.2V193.6L188.8 379.2z"
                fill="#6A576D"
              />
              <path
                d="M510.4 550.4L372 496 180.8 374.4v355.2l329.6 196 324.8-196V374.4L688.8 483.2z"
                fill="#D6AB7F"
              />
              <path
                d="M510.4 933.6c-1.6 0-3.2 0-4-0.8L176.8 736.8c-2.4-1.6-4-4-4-7.2V374.4c0-3.2 1.6-5.6 4-7.2 2.4-1.6 5.6-1.6 8 0L376 488.8l135.2 53.6 174.4-66.4L830.4 368c2.4-1.6 5.6-2.4 8-0.8 2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2l-324.8 196s-1.6 0.8-3.2 0.8z m-321.6-208l321.6 191.2 316.8-191.2V390.4L693.6 489.6c-0.8 0.8-1.6 0.8-1.6 0.8l-178.4 68c-1.6 0.8-4 0.8-5.6 0L369.6 504c-0.8 0-0.8-0.8-1.6-0.8L188.8 389.6v336z"
                fill="#6A576D"
              />
              <path
                d="M510.4 925.6l324.8-196V374.4L665.6 495.2l-155.2 55.2z"
                fill="#121519"
              />
              <path
                d="M510.4 933.6c-1.6 0-2.4 0-4-0.8-2.4-1.6-4-4-4-7.2V550.4c0-3.2 2.4-6.4 5.6-7.2L662.4 488l168-120c2.4-1.6 5.6-1.6 8-0.8 2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2l-324.8 196s-1.6 0.8-3.2 0.8z m8-377.6v355.2l308.8-185.6V390.4L670.4 501.6c-0.8 0.8-1.6 0.8-1.6 0.8l-150.4 53.6z"
                fill="#6A576D"
              />
              <path
                d="M252.8 604l257.6 145.6V550.4l-147.2-49.6-182.4-126.4z"
                fill="#121519"
              />
              <path
                d="M32 460l148.8-85.6 329.6 176L352 640.8z"
                fill="#FFFFFF"
              />
              <path
                d="M659.2 693.6l176-90.4V375.2L692 480.8l-179.2 68-2.4 1.6z"
                fill="#121519"
              />
              <path
                d="M510.4 550.4l148.8 85.6L992 464.8l-156.8-89.6z"
                fill="#FFFFFF"
              />
              <path
                d="M352 648.8c-1.6 0-2.4 0-4-0.8l-320-180.8c-2.4-1.6-4-4-4-7.2s1.6-5.6 4-7.2L176.8 368c2.4-1.6 5.6-1.6 8 0l329.6 176c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2L356 648c-0.8 0.8-2.4 0.8-4 0.8zM48 460L352 632l141.6-80.8L180.8 384 48 460z"
                fill="#6A576D"
              />
              <path
                d="M659.2 644c-1.6 0-2.4 0-4-0.8L506.4 557.6c-2.4-1.6-4-4-4-7.2s1.6-5.6 4-7.2l324.8-176c2.4-1.6 5.6-1.6 8 0l156.8 90.4c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2L663.2 643.2c-1.6 0.8-2.4 0.8-4 0.8zM527.2 550.4l132.8 76L976 464l-141.6-80-307.2 166.4z"
                fill="#6A576D"
              />
            </svg>
            <h3 style={{ textAlign: "center" }}>
              You don't have any product in your cart yet! Please add one!
            </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "grey",
                  "&:hover": {
                    backgroundColor: "darkgrey",
                  },
                  "&:active": {
                    backgroundColor: "darkgrey",
                  },
                }}
                onClick={handleAddProducts}
              >
                Add products
              </Button>
            </div>
          </div>
        </div>
        </div>
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
