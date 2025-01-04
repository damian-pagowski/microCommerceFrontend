const ProductReviewsSummary = ({ stats }) => (
    <div className="list-group" id="reviews-summary">
      <p><strong>Total Reviews:</strong> <span id="total-reviews">{stats.totalReviews}</span></p>
      <p><strong>Average Rating:</strong> <span id="average-rating">{stats.averageRating}</span></p>
      {Object.keys(stats.distribution).map((key) => (
        <p key={key}><i className="bi bi-star"></i> {key}: {stats.distribution[key]}</p>
      ))}
    </div>
  );
  
  export default ProductReviewsSummary;