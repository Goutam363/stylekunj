import { createContext, useState, useEffect } from "react";
import { getLoginStateCookie, getTokenFromCookie, getUsernameByToken } from "./cookieUtils";

// Create a new context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [tokenContext, setTokenContext] = useState("");
  const [productsContext, setProductsContext] = useState([]);
  const [cart, setCart] = useState("");
  const [orderId, setOrderId] = useState("");
  const [crtQty, setCrtQty] = useState({}); // New state for product quantities
  const [amount, setAmount] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [price, setPrice] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // Check login state cookie on page load
    const loginState = getLoginStateCookie();
    setLoggedin(loginState === "true");
    if(loginState && tokenContext === "") {
      setTokenContext(getTokenFromCookie());
    }
    if(loginState && username === "") {
      if(tokenContext === "") {
        const token = getTokenFromCookie();
        setTokenContext(token);
        setUsername(getUsernameByToken(token));
      } else {
        setUsername(getUsernameByToken(tokenContext));
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedin,
        setLoggedin,
        username,
        setUsername,
        profile,
        setProfile,
        tokenContext,
        setTokenContext,
        productsContext,
        setProductsContext,
        cart,
        setCart,
        crtQty, // Add crtQty to the context value
        setCrtQty, // Add setCrtQty to the context value
        amount,
        setAmount,
        mrp,
        setMrp,
        price,
        setPrice,
        delivery,
        setDelivery,
        orderId,
        setOrderId,
        couponDiscount,
        setCouponDiscount,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
