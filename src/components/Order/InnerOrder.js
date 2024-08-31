import { useEffect, useState, useContext } from 'react';
import { Button, Container, Grid, Box } from '@mui/material';
import { AuthContext } from "../AuthProvider";
import { convertUTCToIST } from '../timeUtils';
import { getTokenFromCookie } from '../cookieUtils';
import InnerOrderItem from './InnerOrderItem';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function InnerOrder({ onCancelOrder }) {

    const [orderItems, setOrderItems] = useState([]);
    const [orderItemPending, setOrderItemPending] = useState(false);
    const { orderId, loggedin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedin && orderId !==""){
        const token = getTokenFromCookie();
        const fetchData = async () => {
          try {
            // Make GET request to retrieve orders data
            const orderItemResponse = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/order/${orderId}/order-item`,{
                headers: {
                Authorization: `Bearer ${token}`
                }
            });
          const orderTemp = orderItemResponse.data;
          setOrderItems(orderTemp);
           // Check if any order item is pending
           const isAnyPending = orderTemp.some(orderItem => orderItem.order_item_status === 'PENDING');
           setOrderItemPending(isAnyPending);
          } catch (error) {
            console.error('Error fetching orderItems data:', error);
          }
        };
    
        // Call fetchData function
        fetchData();
        } else {
          navigate('/login');
        }
      }, []);

      const handleCancelPendingItems = async () =>{
        const token = getTokenFromCookie();
        try {
            await axios.patch(
              `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/order/${orderId}/cancel-pending`,
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
    <>
      {orderItemPending && (
        <Container>
          <Grid container>
            <Grid item xs={12} mt={3} textAlign="right">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={handleCancelPendingItems}
              >
                Cancel all pending items
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {orderItems.map((orderItem) => {
            const ist = convertUTCToIST(orderItem.order_date);
            const orderDate = ist.istDate;
            const orderTime = ist.istTime;
            const productImages = orderItem.product_image.split('|');
            const orderItemId = orderItem.id;
            const productNmae = orderItem.product_name;
            const productQty = orderItem.quantity;
            const orderedPrice = orderItem.net_amount;
            const productImage = productImages[0];
            const productStatus = orderItem.order_item_status;

            return (
              <Grid item key={orderItemId} lg={3} md={6} sm={12} xs={12}>
                <InnerOrderItem
                  orderDate={orderDate}
                  orderTime={orderTime}
                  productNmae={productNmae}
                  productQty={productQty}
                  orderedPrice={orderedPrice}
                  productImage={productImage}
                  productStatus={productStatus}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  )
}
