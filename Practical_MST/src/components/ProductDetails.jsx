import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-details"><h2>Product not found</h2></div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="price">Rs {product.price}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;