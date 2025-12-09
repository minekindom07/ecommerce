import "./Banner.css";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to Scene Store</h1>
        <p>Discover amazing deals, top products, and exclusive offers</p>
        <Link to={`/shop`} className="banner-btn">
            Shop Now
          </Link>
      </div>
    </div>
  );
}
