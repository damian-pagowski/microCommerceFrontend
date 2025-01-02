const ProductHeader = ({ name, badges }) => (
    <div className="mb-4">
      <h1 className="card-title">{name}</h1>
      {badges && badges.map((badge, index) => (
        <span key={index} className="badge text-bg-secondary me-2">{badge}</span>
      ))}
    </div>
  );
  
  export default ProductHeader;