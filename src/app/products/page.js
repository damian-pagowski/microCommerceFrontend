'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import ProductGrid from './components/ProductGrid';
import Search from './components/Search';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
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


  const searchHandler = async (searchPhrase) => {
    if (!searchPhrase || searchPhrase === '') {
      setFilteredProducts(products);
    } else {
      const lowerCaseSearchPhrase = searchPhrase.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchPhrase)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mx-auto">
      <Search onSearch={searchHandler} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductList;