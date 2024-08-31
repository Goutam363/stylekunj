import { useState, useContext, useEffect } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    MenuItem,
    Select
  } from '@mui/material';
import { displayRazorpay } from "../Payment/razorpayUtils";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "../cookieUtils";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BillingAddress() {
  const { crtQty, amount, loggedin, mrp, price, couponDiscount, delivery, setCart, setCrtQty, username } =
    useContext(AuthContext);

  const [sameAsBillingAddress, setSameAsBillingAddress] = useState(false);

  const [billingName, setBillingName] = useState("");
  const [billingMobile, setBillingMobile] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingDistrict, setBillingDistrict] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingHouseNo, setBillingHouseNo] = useState("");
  const [billingPincode, setBillingPincode] = useState("");
  const [billingState, setBillingState] = useState("");

  // Shipping address state
  const [shippingName, setShippingName] = useState("");
  const [shippingMobile, setShippingMobile] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingDistrict, setShippingDistrict] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingHouseNo, setShippingHouseNo] = useState("");
  const [shippingPincode, setShippingPincode] = useState("");
  const [shippingState, setShippingState] = useState("");

  const navigate = useNavigate();

  const statesAndUTs = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]{4,40}$/;
  const mobileRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;
  const pincodeRegex = /^\d{6}$/;
  const houseNoRegex = /^[A-Za-z0-9\/,\-\s]{1,30}$/;
  const cityRegex = /^[a-zA-Z\s]{4,40}$/;
  const districtRegex = /^[a-zA-Z\s]{4,40}$/;

  const handleBillingStateChange = (e) => {
    setBillingState(e.target.value);
  };

  const handleShippingStateChange = (e) => {
    setShippingState(e.target.value);
  };

  const handleSameAsBillingChange = () => {
    setSameAsBillingAddress(!sameAsBillingAddress);

    if (!sameAsBillingAddress) {
      setShippingName(billingName);
      setShippingMobile(billingMobile);
      setShippingEmail(billingEmail);
      setShippingDistrict(billingDistrict);
      setShippingCity(billingCity);
      setShippingHouseNo(billingHouseNo);
      setShippingPincode(billingPincode);
    } else {
      setShippingName("");
      setShippingMobile("");
      setShippingEmail("");
      setShippingDistrict("");
      setShippingCity("");
      setShippingHouseNo("");
      setShippingPincode("");
    }
  };

  const handleBillingAddress = () => {
    const billingAddressValues = [
      billingName,
      billingMobile,
      billingEmail,
      billingState,
      billingDistrict,
      billingCity,
      billingHouseNo,
      billingPincode,
    ];

    const billingAddress = billingAddressValues.join("|");
    return billingAddress;
  };

  const handleShippingAddress = () => {
    if (sameAsBillingAddress) {
      const shippingAddressValues = [
        billingName,
        billingMobile,
        billingEmail,
        billingState,
        billingDistrict,
        billingCity,
        billingHouseNo,
        billingPincode,
      ];
      const shippingAddress = shippingAddressValues.join("|");
      return shippingAddress;
    } else {
      const shippingAddressValues = [
        shippingName,
        shippingMobile,
        shippingEmail,
        shippingState,
        shippingDistrict,
        shippingCity,
        shippingHouseNo,
        shippingPincode,
      ];

      const shippingAddress = shippingAddressValues.join("|");
      return shippingAddress;
    }
  };

  const validateAddress = () => {
    if (!nameRegex.test(billingName) || !nameRegex.test(shippingName)) {
      toast.warn("Name should be in a-z or A-Z and 4-40 character long", {
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
      return false;
    }
    if (!mobileRegex.test(billingMobile) || !mobileRegex.test(shippingMobile)) {
      toast.warn("Enter valid mobile No", {
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
      return false;
    }
    if (!emailRegex.test(billingEmail) || !emailRegex.test(shippingEmail)) {
      toast.warn("Enter valid email id", {
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
      return false;
    }
    if (!pincodeRegex.test(billingPincode) || !pincodeRegex.test(shippingPincode)) {
      toast.warn("Enter valid Pin code", {
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
      return false;
    }
    if (!houseNoRegex.test(billingHouseNo) || !houseNoRegex.test(shippingHouseNo)) {
      toast.warn("House No should be in a-z, A-Z, 0-9, or in '-' '/' ',' and 30 character long", {
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
      return false;
    }
    if (!cityRegex.test(billingCity) || !cityRegex.test(shippingCity)) {
      toast.warn("City should be in a-z or A-Z and 4-40 character long", {
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
      return false;
    }
    if (!districtRegex.test(billingDistrict) || !districtRegex.test(shippingDistrict)) {
      toast.warn("District should be in a-z or A-Z and 4-40 character long", {
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
      return false;
    }
    return true;
  }

  const handlePayment = () => {
    if (loggedin) {
      if (!crtQty || Object.keys(crtQty).length === 0 || amount < 150) {
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
        if(validateAddress()){
        // Extract product IDs and quantities from crtQty
        const productIdsString = Object.keys(crtQty).join("|");
        const quantitiesString = Object.values(crtQty).join("|");

        // Get products from local storage
        const storedProductsObj = JSON.parse(localStorage.getItem("products"));
        const storedProducts = storedProductsObj.products;

        // Extract product IDs from crtQty
        const productIds = Object.keys(crtQty);

        // Filter products based on product IDs present in crtQty
        const selectedProducts = storedProducts.filter((product) =>
          productIds.includes(product.id)
        );

        // Extract product names from selected products and join them into a string
        const productNamesString = selectedProducts
          .map((product) => product.product_name)
          .join("|");

        const billingAddress = handleBillingAddress();
        const shippingAddress = handleShippingAddress();

        displayRazorpay(
          amount,
          async (paymentId) => {
            try {
              const token = getTokenFromCookie();
              // const username = localStorage.getItem("username");
              await axios.post(
                `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/order`,
                {
                  product_ids: productIdsString,
                  product_names: productNamesString,
                  net_amount: amount,
                  total_price: mrp,
                  total_discount: mrp - price,
                  coupon_discount: couponDiscount,
                  delivery_charge: delivery,
                  billing_address: billingAddress,
                  shipping_address: shippingAddress,
                  payment_id: paymentId,
                  quantities: quantitiesString,
                  email: billingEmail,
                  mobile: billingMobile,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              try {
                await axios.post(
                  `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/auth/cart`,
                  {
                    username: username,
                    cart: "",
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                await setCart("");
                await setCrtQty({});
              } catch (error) {
                console.log("Error on updating cart!", error);
              }
              // Push the home page into the browsing history
              window.history.pushState({ page: 'home' }, '', '/');
              toast.success(`Payement is successful. Razorpay payment id: ${paymentId}`, {
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
                  navigate("/orders");
                }
                });
            } catch (error) {
              console.log(
                `Error in creating order, please note your Razorpay payment id: ${paymentId} and raise a complain with it in contactUs section!`,
                error
              );
              alert(`Error in creating order, please note your Razorpay payment id: ${paymentId} and raise a complain with it in contactUs section!`)              
            }
          },
          () => {
            // Code to run when payment is unsuccessful
            toast.error(`Payment Unsuccessful!`, {
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
        );
      }
      }
    }
  };

  useEffect(() => {
    if(!loggedin) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      {/* Billing Address Card */}
      <Card sx={{ mt: 10, borderRadius: '16px' }}>
        <CardHeader title="Billing Address" />
        <CardContent>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              value={billingName}
              onChange={(e) => setBillingName(e.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Mobile No."
                  value={billingMobile}
                  onChange={(e) => setBillingMobile(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email address"
                  value={billingEmail}
                  onChange={(e) => setBillingEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              margin="normal"
              label="Country"
              value="India"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="State"
              select
              value={billingState}
              onChange={handleBillingStateChange}
            >
              <MenuItem value="">Select State</MenuItem>
              {statesAndUTs.map((stateOrUT, index) => (
                <MenuItem key={index} value={stateOrUT}>
                  {stateOrUT}
                </MenuItem>
              ))}
            </TextField>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="District"
                  value={billingDistrict}
                  onChange={(e) => setBillingDistrict(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="City"
                  value={billingCity}
                  onChange={(e) => setBillingCity(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="House No."
                  value={billingHouseNo}
                  onChange={(e) => setBillingHouseNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Pin code"
                  value={billingPincode}
                  onChange={(e) => setBillingPincode(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Shipping Address Card */}
      <Card sx={{ mt: 5, borderRadius: '16px' }}>
        <CardHeader title="Shipping Address" />
        <CardContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={sameAsBillingAddress}
                onChange={handleSameAsBillingChange}
              />
            }
            label="Same as Billing Address"
          />
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              value={sameAsBillingAddress ? billingName : shippingName}
              disabled={sameAsBillingAddress}
              onChange={(e) => setShippingName(e.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Mobile No."
                  value={sameAsBillingAddress ? billingMobile : shippingMobile}
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingMobile(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email address"
                  value={sameAsBillingAddress ? billingEmail : shippingEmail}
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              margin="normal"
              label="Country"
              value="India"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="State"
              select
              value={sameAsBillingAddress ? billingState : shippingState}
              onChange={handleShippingStateChange}
              disabled={sameAsBillingAddress}
            >
              <MenuItem value="">Select State</MenuItem>
              {statesAndUTs.map((stateOrUT, index) => (
                <MenuItem key={index} value={stateOrUT}>
                  {stateOrUT}
                </MenuItem>
              ))}
            </TextField>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="District"
                  value={
                    sameAsBillingAddress ? billingDistrict : shippingDistrict
                  }
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingDistrict(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="City"
                  value={sameAsBillingAddress ? billingCity : shippingCity}
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingCity(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="House No."
                  value={
                    sameAsBillingAddress ? billingHouseNo : shippingHouseNo
                  }
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingHouseNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Pin code"
                  value={
                    sameAsBillingAddress ? billingPincode : shippingPincode
                  }
                  disabled={sameAsBillingAddress}
                  onChange={(e) => setShippingPincode(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="flex-end" mx={3} my={2}>
        <Button variant="contained" color="primary" onClick={handlePayment}>
          Proceed to Payment
        </Button>
      </Box>
      <ToastContainer />
    </div>
  );
}
