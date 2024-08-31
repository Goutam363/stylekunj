import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, Grid, Typography, Divider, Box, Button, IconButton, Tooltip, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BillingConfirmation() {
  const [disableCoupon, setDisableCoupon] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const [couponArr, setCouponArr] = useState([]);
  const [couponCodeChange, setCouponCodeChange] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const {
    crtQty,
    setAmount,
    setMrp,
    setPrice,
    setDelivery,
    setCouponDiscount,
    loggedin,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch product details from local storage based on product IDs
  const getProductDetails = (productId) => {
    // Fetch product details from local storage based on productId
    const productDetails = localStorage.getItem("products");
    const products = productDetails ? JSON.parse(productDetails).products : [];
    const product = products.find((p) => p.id === productId);
    return product;
  };

  const fetchCouponsData = async () => {
    try {
      const couponResponse = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/coupon`);
      setCouponArr(couponResponse.data);
    } catch (error) {
      console.log(`Error in fetching coupons`, error);
    }
  };

  // Calculate subtotal, totalMrp, delivery charges, total payable amount, and total savings
  useEffect(() => {
    if (loggedin) {
      fetchCouponsData();
      let newSubtotal = 0;
      let newTotalMrp = 0;
      let newTotalSavings = 0;
      Object.keys(crtQty).forEach((productId) => {
        const product = getProductDetails(productId);
        const { mrp, price } = product;
        const quantity = crtQty[productId];
        newTotalMrp += quantity * mrp;
        newSubtotal += quantity * price;
        newTotalSavings += quantity * (mrp - price);
      });

      const newDeliveryCharges = newSubtotal < 1000 ? 80 : 0;
      const newTotalPayableAmount = newSubtotal + newDeliveryCharges - coupon;
      const newNewTotalSavings = newTotalSavings + coupon;

      setSubtotal(newSubtotal);
      setTotalMrp(newTotalMrp);
      setTotalSavings(newNewTotalSavings);
      setDeliveryCharges(newDeliveryCharges);
      setTotalPayableAmount(newTotalPayableAmount);
    } else {
      navigate("/login");
    }
  }, [crtQty, coupon]);

  const handleDeliveryInfo = () => {
    toast.info('Delivery charges will be exempted for cart value of ₹1000 or above...', {
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
  };

  const handleProceed = async () => {
    if (!crtQty || Object.keys(crtQty).length === 0) {
      toast.error(`Seems like you reloaded the page in between. Please select the quantity again, and don't reload the page`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          // This function will be called when the toast is closed
          navigate("/cart");
        }
      });
    } else {
      // Update the amount in the context API
      await setAmount(totalPayableAmount);
      await setMrp(totalMrp);
      await setPrice(subtotal);
      await setDelivery(deliveryCharges);
      await setCouponDiscount(coupon);
      navigate("/billing-address");
    }
  };

  const handleApply = async () => {
    if (couponCodeChange !== "") {
      if (couponArr.length === 0) {
        await fetchCouponsData();
      }
      const foundCoupon = couponArr.find(
        (cpn) => cpn.coupon_code === couponCodeChange
      );
      if (foundCoupon) {
        if (totalPayableAmount < foundCoupon.base_value) {
          toast.warn(`Coupon code is not applicable for your ordered value. Please check appropriate coupons from coupon section.`, {
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
        } else {
          setCoupon(foundCoupon.discount);
          setDisableCoupon(true);
        }
      } else {
        toast.error(`No coupon found with code: ${couponCodeChange}. Please check appropriate coupons from coupon section.`, {
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
      }
    }
  };

  return (
    <div>
      <Card sx={{ mt: 5, borderRadius: '16px', position: 'relative', top: '30px' }}>
        <CardHeader title="Order Summary" />
        <CardContent>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="body1" fontWeight="bold">Products</Typography>
            </Grid>
            <Grid item xs={3} textAlign="right">
              <Typography variant="body1" fontWeight="bold">Qty</Typography>
            </Grid>
            <Grid item xs={3} textAlign="right">
              <Typography variant="body1" fontWeight="bold">Price</Typography>
            </Grid>
            <Grid item xs={3} textAlign="right">
              <Typography variant="body1" fontWeight="bold">Deal</Typography>
            </Grid>
          </Grid>
          {Object.keys(crtQty).map((productId) => {
            const product = getProductDetails(productId);
            const { product_name, mrp, price } = product;
            const quantity = crtQty[productId];
            return (
              <Grid container key={productId} sx={{ mt: 2 }}>
                <Grid item xs={3}>
                  <Typography variant="body1">{product_name}</Typography>
                </Grid>
                <Grid item xs={3} textAlign="right">
                  <Typography variant="body1">x({quantity})</Typography>
                </Grid>
                <Grid item xs={3} textAlign="right" sx={{ textDecoration: 'line-through', color: 'red' }}>
                  <Typography variant="body1">₹{mrp * quantity}</Typography>
                </Grid>
                <Grid item xs={3} textAlign="right">
                  <Typography variant="body1">₹{price * quantity}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">Subtotal:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body1">₹{subtotal}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Delivery charges
                <Tooltip title="Delivery charges will be exempted for cart value of ₹1000 or above">
                  <IconButton size="small" onClick={handleDeliveryInfo}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
                :
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" sx={subtotal >= 1000 ? { textDecoration: 'line-through', color: 'red' } : {}}>
              <Typography variant="body1">₹80</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">Coupon Discounts:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body1">₹{coupon}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">Your total savings:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" sx={{ color: 'green' }}>
              <Typography variant="body1">₹{subtotal < 1000 ? totalSavings + deliveryCharges : totalSavings}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">Total payable:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="body1">₹{totalPayableAmount}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Box display="flex" justifyContent="flex-end" mx={3} my={2}>
          <Button variant="contained" color="primary" onClick={handleProceed}>
            Proceed to Buy
          </Button>
        </Box>
      </Card>
      <Box mx={2}>
        <Box display="flex" alignItems="center" mt={5} position="relative">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Coupon code"
            onChange={(e) => setCouponCodeChange(e.target.value)}
            value={couponCodeChange}
            disabled={disableCoupon}
            sx={{ borderRadius: '30px', zIndex: 1 }}
          />
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: '30px',
              border: 'none',
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              zIndex: 2,
            }}
            onClick={handleApply}
            disabled={disableCoupon}
          >
            Apply
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </div>
  );
}
