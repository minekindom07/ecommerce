import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img className="logo-default" src="https://scenebooking.com/wp-content/uploads/2024/12/scene_logo-black_color.png" alt="SCENE" itemProp="url"/>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input placeholder="Search products..." />
      </div>

      {/* Nav Links */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {/* Cart Icon */}
      <div className="cart">
        <Link to="/cart">
          🛒 
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar