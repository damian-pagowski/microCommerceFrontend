'use client';

import { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name on Card</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={cardDetails.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="form-control"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          className="form-control"
          value={cardDetails.expiryDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cvv" className="form-label">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          className="form-control"
          value={cardDetails.cvv}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;