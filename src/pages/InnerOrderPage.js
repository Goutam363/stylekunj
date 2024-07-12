import { useState } from "react";
import InnerOrder from "../components/Order/InnerOrder";

export default function InnerOrderPage() {
  const [ orderKey, setOrderKey ] = useState(0);
  const handleOrderCancel = () => {
    setOrderKey(prevKety => prevKety + 1);
  };
  return (
    <div>
      <InnerOrder key={orderKey} onCancelOrder={handleOrderCancel}/>
    </div>
  )
}
