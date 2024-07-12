import './Services.css';
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const navigate = useNavigate();

    const handleCreate = async () => {
        navigate('/build');
        return;
    }

  return (
    <div className='body-por'>
      <section className='section-por'>
  <div className="service-card" onClick={handleCreate}> 
    <h2>Create a new solution</h2>
    <p>Create a new web solution for your business or personal use from scratch.</p>
  </div>
  <div className="service-card" onClick={handleCreate}>
    <h2>Upgrade your existing solution</h2>
    <p>If your website requires any kind of upgradation like adding new features, changing layouts, UI/UX etc.</p>
  </div>
  <div className="service-card" onClick={handleCreate}>
    <h2>Get continuous support</h2>
    <p>You can subscribe to us at monthly charges, so our tech team give your business tech support. And you only worry about the business idea, not tech.</p>
  </div>
</section>
    </div>
  )
}
