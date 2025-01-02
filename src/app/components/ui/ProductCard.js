import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://placehold.co/400x400?text=${product.name}`}
            className="img-fluid rounded-start"
            alt={product.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name} <i className="bi bi-star"></i>{product.rating}  </h5>
            <h6 className="card-text">EUR {product.price}</h6>
            <p className="card-text">{product.description.slice(0, 50)}...</p>
            {product.badges && product.badges.map((badge) => (
              <span key={badge} className="badge bg-primary">{badge}</span>))}
              <Link href={`/products/${product.productId}`} className="mx-2">View Details
        </Link>
        
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;