import "./ProductDetail.css";

export default function PDCarousel({image1, image2, image3}) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-2"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner header-img tpRadi20 btRadi20">
          <div className="carousel-item img-item image-container active">
            <img className="d-block w-100" src={image1} alt="First slide" />
          </div>
          <div className="carousel-item img-item image-container">
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div className="carousel-item img-item image-container">
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon productDetail-prev"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon productDetail-next"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
