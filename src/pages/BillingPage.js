import BillingAddress from "../components/BillingDetails/BillingAddress";
import BillingConfirmation from "../components/BillingDetails/BillingConfirmation";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";

export default function BillingPage() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <BillingConfirmation/>
    </div>
  )
}
