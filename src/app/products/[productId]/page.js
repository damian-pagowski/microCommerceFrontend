'use client';

import React, { useState, useEffect } from 'react';
import ProductHeader from './components/ProductHeader';
import ProductDetails from './components/ProductDetails';
import ProductReviewsSummary from './components/ProductReviewsSummary';
import ProductReviews from './components/ProductReviews';
import { fetchProduct, fetchReviews, fetchReviewStats } from '../../../services/api';
import { addToCart } from '../../../utils/cart';

const ProductDetailsPage = ({ params: paramsPromise }) => {
  const [params, setParams] = useState(null);
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewsStats, setReviewsStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };

    loadParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;

    const loadProductData = async () => {
      try {
        const [productData, reviewsData, statsData] = await Promise.all([
          fetchProduct(params.productId),
          fetchReviews(params.productId),
          fetchReviewStats(params.productId),
        ]);

        setProduct(productData);
        setReviews(reviewsData?.reviews || []);
        setReviewsStats(statsData?.stats || {});
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProductData();
  }, [params]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    console.log(`${product.name} added to cart`);
    setTimeout(() => setShowNotification(false), 5000); // Hide notification after 5 seconds
  };

  if (!params) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-4">
      {showNotification && (
        <div className="alert alert-success" role="alert">
          Product added to cart! <a href="/cart" className="alert-link">Go to checkout</a> or <a href="/products" className="alert-link">continue shopping</a>.
        </div>
      )}
      <ProductHeader name={product.name} badges={product.badges} />
      <div className="row g-5">
        <div className="col-md-4">
          <img
            src={`https://placehold.co/600x400?text=${product.name}`}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <ProductDetails product={product} onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <h4>Reviews Summary</h4>
          <ProductReviewsSummary stats={reviewsStats} />
        </div>
        <div className="col-md-8">
          <h4>Top Reviews</h4>
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;