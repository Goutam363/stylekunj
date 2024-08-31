import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import OrderItem from "./OrderItem";
import { convertUTCToIST } from "../timeUtils";
import { getTokenFromCookie } from "../cookieUtils";
import { useNavigate } from "react-router-dom";

export default function Order({ onCancelOrder }) {
  const [orders, setOrders] = useState([]);
  const { loggedin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin) {
      const token = getTokenFromCookie();
      const fetchData = async () => {
        try {
          // Make GET request to retrieve orders data
          const orderResponse = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/order`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const orderTemp = orderResponse.data;
          setOrders(orderTemp);
        } catch (error) {
          console.error("Error fetching orders data:", error);
        }
      };

      // Call fetchData function
      fetchData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {loggedin && orders.length === 0 ? (
        <h1 className="text-center text-secondary">
          Place your first order right now, with amazing discounts!
        </h1>
      ) : (
        <div>
          {orders.map((order) => {
            const orderId = order.id;
            const orderValue = order.net_amount;
            const ist = convertUTCToIST(order.order_date);
            const orderDate = ist.istDate;
            const orderTime = ist.istTime;
            const orderStatus = order.order_status;
            const paymentId = order.payment_id;
            const deliveryCharge = order.delivery_charge;
            const mrp = order.total_price;
            const spDst = order.total_discount;
            const refund = order.refund_amount;
            const cpDst = order.coupon_discount;
            const productNames = order.product_names.split("|");
            const productQty = order.quantities.split("|");
            return (
              <OrderItem
                key={orderId} // Ensure each OrderItem has a unique key
                orderId={orderId}
                orderValue={orderValue}
                deliveryCharge={deliveryCharge}
                mrp={mrp}
                spDst={spDst}
                cpDst={cpDst}
                refund={refund}
                orderDate={orderDate}
                orderTime={orderTime}
                orderStatus={orderStatus}
                paymentId={paymentId}
                productNames={productNames}
                productQty={productQty}
                onCancelOrder={onCancelOrder}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
