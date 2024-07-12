import ProductDetail from "../components/ProductDetail/ProductDetail";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";

export default function ProductDetailPage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <ProductDetail/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}
