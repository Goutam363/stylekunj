import { useContext } from "react";
import { Card, CardContent, CardHeader, Grid, Typography, Divider, Button } from '@mui/material';
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "../cookieUtils";
import axios from "axios";

export default function OrderItem({orderId, orderValue, deliveryCharge, mrp, spDst, cpDst, refund, orderDate, orderTime, orderStatus, paymentId, productNames, productQty, onCancelOrder }) {

    const { setOrderId } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOrderItems = async () => {
        await setOrderId(orderId);
        navigate("/inner-order");
    }

    const handleCancelOrder = async () =>{
        const token = getTokenFromCookie();
        try {
            await axios.patch(
              `http://localhost:5000/order/${orderId}/cancel`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );
            await onCancelOrder();
          } catch(error) {
            console.log('Error while updating the cart!', error);
          }
    }

  return (
    <Card sx={{ mt: 3, borderRadius: 2, top: "30px" }}>
      <div onClick={handleOrderItems}>
        <CardHeader title={`Order id: ${orderId} (${orderDate}, ${orderTime})`} />
        <CardContent>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Products</strong></Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1"><strong>Qty</strong></Typography></Grid>
          </Grid>
          {productNames.map((name, index) => (
            <Grid container key={index}>
              <Grid item xs={6}><Typography variant="body1">{name}</Typography></Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">x({productQty[index]})</Typography></Grid>
            </Grid>
          ))}
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Price</strong>:</Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{mrp}</Typography></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Special discounts</strong>:</Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{spDst}</Typography></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Coupon discounts</strong>:</Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{cpDst}</Typography></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Delivery charges</strong>:</Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{deliveryCharge}</Typography></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Total paid amount:</strong></Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{orderValue}</Typography></Grid>
          </Grid>
          {refund !== 0 && <>
            <Divider />
            <Grid container>
              <Grid item xs={6}><Typography variant="body1"><strong>Refundable amount:</strong></Typography></Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">₹{refund}</Typography></Grid>
            </Grid>
          </>}
          <Divider />
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Payment id:</strong></Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">{paymentId}</Typography></Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={6}><Typography variant="body1"><strong>Order Status:</strong></Typography></Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}><Typography variant="body1">{orderStatus}</Typography></Grid>
          </Grid>
        </CardContent>
      </div>
      {orderStatus === 'PENDING' && (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ my: 2, mr: 2, float: 'right' }}
          onClick={handleCancelOrder}
        >
          Cancel Order
        </Button>
      )}
    </Card>
  )
}
