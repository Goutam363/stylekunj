import { useState } from "react";
import Order from "../components/Order/Order";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";

export default function OrderPage() {
  const [ orderKey, setOrderKey ] = useState(0);
  const handleOrderCancel = () => {
    setOrderKey(prevKety => prevKety + 1);
  };
  return (
    <>
    <Topbar/>
    <Navbar/>
    <div style={{backgroundColor: '#dacce6', marginTop: '5rem'}}>
      <Order key={orderKey} onCancelOrder={handleOrderCancel}/>
    </div>
    <Footer/>
    <FooterBottom/>
    </>
  )
}
