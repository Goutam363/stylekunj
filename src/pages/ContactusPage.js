import ContactUsForm from '../components/ContactUs/ContactUsForm'
import FAQs from '../components/ContactUs/FAQs'
import Footer from '../components/Footer/Footer'
import FooterBottom from '../components/FooterBottom/FooterBottom'
import Navbar from '../components/Navbar/Navbar'
import Topbar from '../components/Topbar/Topbar'

export default function ContactusPage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <ContactUsForm/>
      <FAQs/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
