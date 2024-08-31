import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart/Cart'
import Topbar from '../components/Topbar/Topbar';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

export default function CartPage() {
  const [ cartKey, setCartKey ] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if products exist in localStorage
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          const parsedProducts = JSON.parse(storedProducts);
          const timestamp = parseInt(parsedProducts.timestamp);
          const currentTime = Date.now();
          const duration = (currentTime - timestamp) / (1000 * 60); // Duration in minutes

          // If duration is greater than 5 minute, fetch data from API
          if (duration > 5) {
            const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product`);
            const fetchedProducts = response.data;
            // Update localStorage with new products and timestamp
            localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: Date.now() }));
          }
        } else {
          // If no products in localStorage, fetch from API
          const response = await axios.get(`${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/product`);
          const fetchedProducts = response.data;
          // Update localStorage with fetched products and timestamp
          const currentTime = Date.now();
          localStorage.setItem('products', JSON.stringify({ products: fetchedProducts, timestamp: currentTime }));
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []);

  const handleProductDelete = () => {
    setCartKey(prevKety => prevKety + 1);
  };

  return (
    <div>
      {/* <Cart cartItems={cartItems}/> */}
      {/* <CartCard product={cartItems[0]} /> */}
      <Topbar/>
      <Navbar/>
      <Cart key={cartKey} onDeleteProduct={handleProductDelete} />
    </div>
  )
}
