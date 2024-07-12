import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Product/Products";
import Topbar from "../components/Topbar/Topbar";

export default function ProductsPage() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Products/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}
