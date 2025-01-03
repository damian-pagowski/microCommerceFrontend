'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/app/products/components/ProductCard';
import { createReview, fetchProduct} from '../../../services/api';

const ReviewPage = () => {
    const { productId } = useParams();
    const [form, setForm] = useState({ rating: '', comment: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (!productId) return;
        const loadProducts = async () => {
            try {
                const data = await fetchProduct(productId);
                setProduct(data);
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReview({ productId, ...form });
            setSuccessMessage('Review submitted successfully!');
            setForm({ rating: '', comment: '' });
        } catch (error) {
            setErrorMessage('Failed to submit review. Please try again.');
        }
    };
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className="container mt-4">
            <h1>Write a Review</h1>

            {/* Product Card */}
            <ProductCard
                product={product}
            />

            {/* Review Form */}
            <form className="mt-4" onSubmit={handleSubmit}>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <select
                        id="rating"
                        name="rating"
                        className="form-select"
                        value={form.rating}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select a rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="form-control"
                        value={form.comment}
                        onChange={handleInputChange}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewPage;