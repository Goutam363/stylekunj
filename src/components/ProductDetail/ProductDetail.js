import { useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import PDCarousel from "./PDCarousel";
import { Carousel, Button } from 'antd';
import { styled } from "@mui/system";
import { useState, useEffect, useContext } from 'react';
import { getTokenFromCookie } from "../cookieUtils";
import { AuthContext } from "../AuthProvider";
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import "./ProductDetail.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetail() {
  const {id} = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  const { loggedin, setCart } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ stock, setStock ] = useState(true);
  const [productImg1, setProductImg1] = useState(null);
  const [productImg2, setProductImg2] = useState(null);
  const [productImg3, setProductImg3] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        if(response.data.stock < 1) {
          setStock(false);
        }
        const image = response.data.image.split('|')
          if(image.length>0){
            setProductImg1(image[0])
          }
          if(image.length>1){
            setProductImg2(image[1])
          }
          if(image.length>2){
            setProductImg3(image[2])
          }
        setProduct(response.data);
        // setProductId(response.data.id);
        // setProductCategory(response.data.category);
        // setProductSearch(response.data.keywords);
        // console.log(response.data.category);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);


  const handleAddToCart = async () => {
    if(loggedin){
      const token = getTokenFromCookie();
      const username = localStorage.getItem("username");
      try{
        // Make GET request to retrieve user profile data
        const profileResponse = await axios.get(`http://localhost:5000/auth/${username}`,{
            headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const cartStr = profileResponse.data.cart;
        if(cartStr !=="" ){
          const cartIds = cartStr.split('|');
          if(!cartIds.includes(id)){
            const updatedCartStr=cartStr+`|${id}`;
            try{
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
              setCart(updatedCartStr);
              toast.info('Item added to cart!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            } catch(error) {
              console.log('Error on updating cart', error);
            }
          } else {
            toast.warn('Item already present in cart!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
           }
        } else {
          const updatedCartStr = `${id}`;
          try{
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
            setCart(updatedCartStr);
            toast.info('Item added to cart!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
          } catch(error) {
            console.log('Error on updating cart', error);
          }
        }
      } catch(error) {
        console.log('Error on fetching cart', error);
      }
    } else {
      navigate('/login');
    }
  }

  const handleOutOfStock = () => {
    toast.warn(`Sorry, it's currently out of stock!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  const handleGoToCart = () => {
    navigate('/cart');
  }

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const ZoomableImage = styled("img")({
    width: "100%",
    maxWidth: "100%", // Ensure the image does not stretch beyond its container
    height: "auto",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  });

  const defaultImage = "https://icon-library.com/images/open-box-icon/open-box-icon-1.jpg"
  return (
    <div style={{ overflowX: 'hidden', marginTop: '5rem'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Carousel arrows autoplay autoplaySpeed={5000}>
                        <div>
                            <ZoomableImage src={productImg1 ? productImg1 : defaultImage} alt="Image 1" />
                        </div>
                        <div>
                            <ZoomableImage src={productImg2 ? productImg2 : defaultImage} alt="Image 2" />
                        </div>
                        <div>
                            <ZoomableImage src={productImg3 ? productImg3 : defaultImage} alt="Image 3" />
                        </div>
                    </Carousel>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div style={{marginLeft: "1rem", marginTop: "1.5rem"}}>
                    <Typography variant="h4" component="h2">
                        {product ? product.product_name : "Product Name"}
                    </Typography>
                    <div>
                        <Typography variant="h6">Price:</Typography>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography
                                variant="h5"
                                style={{
                                    textDecoration: "line-through red",
                                    marginRight: '1rem',
                                }}
                            >
                                ₹{product ? product.mrp : "Mrp"}
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                ₹{product ? product.price : "Price"} Only
                            </Typography>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        {stock ? (
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ backgroundColor: "#9065b4", borderColor: "#271933", marginRight: '1rem' }}
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ backgroundColor: "#9065b4", borderColor: "#271933", marginRight: '1rem' }}
                                onClick={handleOutOfStock}
                            >
                                Out of stock
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleGoToCart}
                        >
                            Go to Cart
                        </Button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                      <Typography variant="h4" component="h2">Product Details</Typography>
                      <Typography variant="body1">
                        {product ? product.product_description : "Details of the product"}
                      </Typography>
                    </div>
                  </div>
                </Grid>
            </Grid>
            {product && <RelatedProducts id={id}/>}
            <ToastContainer />
        </div>
  );
}
