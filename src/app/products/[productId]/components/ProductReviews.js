const ProductReviews = ({ reviews }) => (
    <ul className="list-group" id="reviews-list">
      {reviews.map((review) => (
        <li key={review._id} className="list-group-item">
          <p><strong><span className="review-username">{review.username}</span></strong> - <span className="review-rating">{review.rating}</span> <i className="bi bi-star"></i></p>
          <p><span className="review-comment">{review.comment}</span></p>
        </li>
      ))}
    </ul>
  );
  
  export default ProductReviews;