import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo + About */}
        <div className="footer-col">
          <h3 className="logo">Scene</h3>
          <p>Your favorite place to buy amazing products at the best prices!</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/returns">Return Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">👍</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
