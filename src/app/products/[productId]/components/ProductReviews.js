const ProductReviews = ({ reviews }) => (
    <ul className="list-group">
      {reviews.map((review) => (
        <li key={review._id} className="list-group-item">
          <p><strong>{review.username}</strong> - {review.rating} <i className="bi bi-star"></i></p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
  
  export default ProductReviews;