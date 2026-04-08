import { products } from '../data/products';
import './Dashboard.css';

function Dashboard() {
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="stat-card">
          <h3>Total Value</h3>
          <p>Rs {totalValue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;