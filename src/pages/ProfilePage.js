import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Topbar from "../components/Topbar/Topbar";

export default function ProfilePage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Profile/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
