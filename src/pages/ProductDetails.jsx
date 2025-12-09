// ProductDetails.jsx - New Version
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../components/productsData";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    // Create cart item
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      quantity: quantity
    };

    // Get existing cart
    let cart = [];
    const existingCart = localStorage.getItem('shoppingCart');
    if (existingCart) {
      cart = JSON.parse(existingCart);
    }

    // Check if item exists
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex !== -1) {
      // Update quantity
      cart[existingIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push(cartItem);
    }

    // Save to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    // Show success message
    alert(`${product.title} (x${quantity}) added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  if (!product) {
    return <div className="loading-state">Loading product...</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-container">
        <Link to="/shop" className="back-to-shop">
          <span>←</span>
          <span>Back to Shop</span>
        </Link>

        <div className="product-card">
          <div className="product-image-section">
            <div className="product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-main-image"
              />
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-category">{product.category}</div>
            
            <h1 className="product-name">{product.title}</h1>
            
            <p className="product-description">{product.description}</p>

            <div className="product-price-section">
              <div className="product-price">₹{product.price}</div>
              <div className="price-label">Inclusive of all taxes</div>
            </div>

            <div className="quantity-section">
              <div className="quantity-label">Select Quantity:</div>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <div className="quantity-display">{quantity}</div>
                <button 
                  className="quantity-btn" 
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free delivery above ₹2000</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Secure payment</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>7 days return</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Cash on delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}