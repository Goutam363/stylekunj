import Navbar from "../components/Navbar/Navbar";
import Policies from "../components/Policies/Policies";
import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";

export default function PoliciesPage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Policies/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
