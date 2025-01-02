'use client';

const CartSummary = ({ total }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Cart Summary</h5>
      <p className="card-text">
        <strong>Total:</strong> ${total.toFixed(2)}
      </p>
      <button className="btn btn-primary w-100">Checkout</button>
    </div>
  </div>
);

export default CartSummary;