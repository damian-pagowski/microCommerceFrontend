const ProductCarousel = ({ product }) => (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={`https://placehold.co/600x400?text=${product.name}`} className="d-block w-100" alt={product.name} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
  
  export default ProductCarousel;