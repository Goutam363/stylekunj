import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CouponItem from "./CouponItem";

export default function Coupon() {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
          const fetchData = async () => {
            try {
              // Make GET request to retrieve coupons data
              const couponResponse = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/coupon`);
              const couponTemp = couponResponse.data;
              setCoupons(couponTemp);
            } catch (error) {
              console.error("Error fetching coupons data:", error);
            }
          };
    
          // Call fetchData function
          fetchData();
      }, []);

  return (
        <div style={{ marginTop: "5rem" }}>
          {coupons.map((coupon) => {
            const couponId = coupon.id;
            const couponCode = coupon.coupon_code;
            const couponDescription = coupon.description;
            return (
              <CouponItem
                key={couponId} // Ensure each CouponItem has a unique key
                couponCode={couponCode}
                couponDescription={couponDescription}
              />
            );
          })}
        </div>
  )
}
