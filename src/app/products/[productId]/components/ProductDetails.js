'use client';

const ProductDetails = ({ product, onAddToCart }) => (
  <div className="card-body">
    <p className="card-text">
      <strong>Rating:</strong> {product.rating} <i className="bi bi-star"></i>
    </p>
    <p className="card-text" id="product-price">
      <strong>Price:</strong> ${product.price}
    </p>
    <p className="card-text" id="product-desc">{product.description}</p>
    <button
      onClick={onAddToCart}
      className="btn btn-primary float-end"
      id="add-to-cart"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductDetails;