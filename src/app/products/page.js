'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import ProductGrid from './components/ProductGrid';
import SearchBar from './components/SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <SearchBar />
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductList;