// Cart.jsx - New Version
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Load cart from localStorage on mount and when component updates
  useEffect(() => {
    loadCartFromStorage();
  }, []);

  const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
    } else {
      setCartItems([]);
    }
  };

  // Save cart to localStorage whenever it changes
  const saveCartToStorage = (cart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    setCartItems(cart);
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    saveCartToStorage(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    saveCartToStorage(updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      saveCartToStorage([]);
      setDiscount(0);
      setPromoCode("");
    }
  };

  // Apply promo code
  const applyPromoCode = () => {
    const promoCodes = {
      "SAVE10": 10,
      "SAVE20": 20,
      "WELCOME15": 15,
      "SALE25": 25
    };

    const code = promoCode.toUpperCase().trim();
    
    if (promoCodes[code]) {
      setDiscount(promoCodes[code]);
      alert(`Success! ${promoCodes[code]}% discount applied!`);
    } else {
      setDiscount(0);
      alert("Invalid promo code. Try: SAVE10, SAVE20, WELCOME15, or SALE25");
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 0 ? (subtotal > 2000 ? 0 : 100) : 0;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <Link to="/shop" className="continue-shopping-link">
            <span>←</span>
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart-container">
            <div className="empty-cart-icon">🛒</div>
            <h2 className="empty-cart-title">Your Cart is Empty</h2>
            <p className="empty-cart-text">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="shop-now-link">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-grid">
            {/* Cart Items */}
            <div className="cart-items-container">
              <div className="cart-items-header">
                <div className="items-count-badge">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                </div>
                <button className="clear-all-btn" onClick={clearCart}>
                  Clear All
                </button>
              </div>

              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-card">
                    <div className="item-image-container">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="item-image"
                      />
                    </div>

                    <div className="item-info">
                      <h3 className="item-name">{item.title}</h3>
                      <div className="item-category-badge">{item.category}</div>
                      <p className="item-description">{item.description}</p>
                    </div>

                    <div className="item-actions">
                      <div className="item-price-display">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>

                      <div className="item-quantity-controls">
                        <button 
                          className="qty-control-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <div className="qty-display">{item.quantity}</div>
                        <button 
                          className="qty-control-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button 
                        className="remove-item-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary-card">
              <h2 className="summary-title">Order Summary</h2>

              <div className="promo-code-container">
                <input
                  type="text"
                  className="promo-input"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && applyPromoCode()}
                />
                <button className="apply-promo-btn" onClick={applyPromoCode}>
                  Apply
                </button>
              </div>

              {discount > 0 && (
                <div className="discount-applied-badge">
                  🎉 {discount}% discount applied!
                </div>
              )}

              <div className="summary-breakdown">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="summary-line discount">
                    <span>Discount ({discount}%)</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="summary-line">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>

                <div className="summary-line total">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              {shipping === 0 && subtotal > 0 && (
                <div className="shipping-info">
                  🎉 You've got free shipping!
                </div>
              )}

              {subtotal > 0 && subtotal < 2000 && (
                <div className="shipping-warning">
                  Add ₹{(2000 - subtotal).toFixed(2)} more for free shipping
                </div>
              )}

              <button 
                className="checkout-button"
                disabled={cartItems.length === 0}
                onClick={() => alert('Proceeding to checkout...')}
              >
                Proceed to Checkout
              </button>

              <div className="payment-options">
                <p className="payment-label">We Accept</p>
                <div className="payment-icons">
                  <span title="Credit Card">💳</span>
                  <span title="Net Banking">🏦</span>
                  <span title="UPI">📱</span>
                  <span title="Wallet">💰</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}