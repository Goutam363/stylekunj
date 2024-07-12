import './Topbar.css'
export default function Topbar() {
  return (
    <div>
      {/* <!-- Top bar Start --> */}
        <div className="top-bar text-center">
          {/* <div className="typing-slider">
            <div className='p-text'>मंगल भवन, अमंगल हारी|</div>
            <div className='p-text'>द्रबहु सु दसरथ, अजिर बिहारी|</div>
            <div className='p-text'>राम सिया राम, सिया राम जय-जय राम|</div>
          </div> */}
          <div className="typing-slider">
            <div className='p-text'>"Get extra discount on applying coupons" </div>
            <div className='p-text'>"Get free delivery for order value above Rs.999" </div>
            <div className='p-text'>"Style your neck, with our new necklace collection"</div>
          </div>
        </div>
        {/* <!-- Top bar End --> */}
    </div>
  )
}
