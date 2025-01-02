const ProductDetails = ({ product }) => (
    <div className="card-body">
      <p className="card-text"><strong>Rating:</strong> {product.rating} <i className="bi bi-star"></i></p>
      <p className="card-text"><strong>Price:</strong> ${product.price}</p>
      <p className="card-text">{product.description}</p>
      <button className="btn btn-primary float-end">Add to Cart</button>
    </div>
  );
  
  export default ProductDetails;