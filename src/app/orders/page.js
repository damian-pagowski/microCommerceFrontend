'use client';

import { useEffect, useState } from 'react';
import { fetchOrderHistory } from '../../services/api';
import { useRouter } from 'next/navigation';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchOrderHistory()
      .then((data) => setOrders(data.orders))
      .catch(() => setError('Failed to load order history. Please try again later.'));
  }, []);

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>;
  }

  if (orders.length === 0) {
    return <div className="container mt-5">You have no orders yet.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Order History</h2>
      <div className="list-group" id='order-list'>
        {orders.map((order) => (
          <div key={order._id} className="list-group-item order-card" id={order._id}>
            <div>
              <strong>Order Date:</strong>{' '}
              <span className='order-date'>{new Date(order.createdAt).toLocaleDateString()}</span> at{' '}
              <span className='order-time'>{new Date(order.createdAt).toLocaleTimeString()}</span>
            </div>
            <div className='order-status'>
              <strong>Status:</strong> {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </div>
            <div>
              <strong>Items:</strong>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId} className='order-item'>
                    <span className='order-item-quantity'>{item.quantity}</span>x <span className='order-item-name'>{item.name}</span> - $<span className='order-item-price'>{item.price.toFixed(2)}</span> each
                    <button
                      className="btn btn-outline-primary btn-sm mx-2 my-1 order-item-review"
                      onClick={() => router.push(`/review/${item.productId}`)}
                    >
                      Review
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='order-total'>
              <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;