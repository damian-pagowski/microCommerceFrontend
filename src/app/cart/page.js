'use client';

import { useEffect, useState } from 'react';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Your Cart</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-md-4">
          <CartSummary total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;