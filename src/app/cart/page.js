'use client';

import { useState, useEffect } from 'react';
import PaymentForm from './components/PaymentForm';
import { createOrder, makePayment, fetchOrder } from '../../services/api';
import CartItem from './components/CartItem' ;

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleCheckout = async () => {
    console.log('handleCheckout');
    try {
      setError(null);
      setIsPaying(false);
      const payload = cart.map((item) => ({ productId: item.productId, quantity: item.quantity }));
      const orderResponse = await createOrder(payload);

      setOrderId(orderResponse.order._id);
      setIsPaying(true);
    } catch (err) {
      setError('Failed to create order. Please try again.');
    }
  };

  const handlePayment = async (cardDetails) => {
    try {
      setError(null);
      const paymentResponse = await makePayment({
        orderId,
        amount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        currency: 'EUR',
        cardDetails,
      });

      if (!paymentResponse) {
        setError('Payment failed. Please check your card details.');
        return;
      }
      const orderStatusResponse = await fetchOrder(orderId);

      if (orderStatusResponse.order.status === 'paid' || orderStatusResponse.order.status === 'pending') {
        setStatus('Payment successful! Your order has been placed.');
        localStorage.removeItem('cart');
        setCart([]);
        setIsPaying(false);
      } else {
        setError('Payment processed, but the order status is not paid. Please contact support.');
      }
    } catch (err) {
      setError('An error occurred during payment.');
    }
  };


  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cart.map((item) => (
                <CartItem key={item.productId} item={item} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">

          <h3>Summary</h3>
          <p>
            Total: <strong>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong>
          </p>
          {error && <p className="text-danger" id="checkout-error">{error}</p>}
          {status && <p className="text-success" id="checkout-success">{status}</p>}
          {!isPaying ? (
            <button className="btn btn-primary w-100" onClick={handleCheckout} disabled={cart.length === 0} id="checkout-button">
              Checkout
            </button>
          ) : (
            <PaymentForm onSubmit={handlePayment} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;