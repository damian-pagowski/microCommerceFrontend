'use client';

import React, { useState, useEffect } from 'react';
import ProductHeader from './components/ProductHeader';
import ProductCarousel from './components/ProductCarousel';
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

  if (!params) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    addToCart(product);
    console.log(`${product.name} added to cart`);
  };

  return (
    <div className="container mt-4">
      <ProductHeader name={product.name} badges={product.badges} />
      <div className="row g-5">
        <div className="col-md-4">
          <ProductCarousel product={product} />
        </div>
        <div className="col-md-8">
        <ProductDetails product={product} onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <ProductReviewsSummary stats={reviewsStats} />
        </div>
        <div className="col-md-8">
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;