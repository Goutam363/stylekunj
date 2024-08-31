import Category from "../components/Category/Category";
import Feature from "../components/Feature/Feature";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import MainSlider from "../components/MainSlider/MainSlider";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/Product/ProductCard";
import Products from "../components/Product/Products";
import Topbar from "../components/Topbar/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <MainSlider/>
      <FeaturedProduct/>
      <Category/>
      <Feature/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
