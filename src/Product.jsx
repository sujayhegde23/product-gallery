function ProductCard({ product }) {
  return (
    <>
      <article>
        <img src={product.image} alt={product.name} />
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <h3>₹{product.price}</h3>
        <button type="button">View Details</button>
      </article>
    </>
  );
}

export default ProductCard;
