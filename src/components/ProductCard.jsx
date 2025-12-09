import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {

  if (!product) return null;

  return (
    <div className="product-cards">
      
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-imgs" 
        />
      </Link>

      <h3 className="product-titles">{product.title}</h3>

      <div className="product-center">
        {/* <p className="product-price">₹{product.price}</p> */}

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn view-btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
