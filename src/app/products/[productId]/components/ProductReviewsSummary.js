const ProductReviewsSummary = ({ stats }) => (
    <div className="list-group">
      <p><strong>Total Reviews:</strong> {stats.totalReviews}</p>
      <p><strong>Average Rating:</strong> {stats.averageRating}</p>
      {Object.keys(stats.distribution).map((key) => (
        <p key={key}><i className="bi bi-star"></i> {key}: {stats.distribution[key]}</p>
      ))}
    </div>
  );
  
  export default ProductReviewsSummary;