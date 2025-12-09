import React, { useState } from 'react';
import products from '../components/productsData'; // Assuming this path is correct
import './Shop.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);

  const categories = ['All', 'Shoes', 'Clothing', 'Electronics', 'Accessories'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="page">
      {/* Header (Currently empty in original code) */}

      <div className="mainContainer">
        {/* Sidebar */}
        <aside className={`sidebar ${showFilters ? 'sidebarShow' : ''}`}>
          <div className="sidebarHeader">
            <h3 className="sidebarTitle">Filters</h3>
            <button className="closeBtn" onClick={() => setShowFilters(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="filterSection">
            <h4 className="filterTitle">Category</h4>
            <div className="categoryList">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`categoryBtn ${selectedCategory === cat ? 'categoryBtnActive' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filterSection">
            <h4 className="filterTitle">Price Range</h4>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="priceSlider"
            />
            <div className="priceLabels">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="mainContent">
          {/* Toolbar */}
          <div className="toolbar">
            <button className="filterToggleBtn" onClick={() => setShowFilters(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span style={{marginLeft: '8px'}}>Filters</span>
            </button>
            <p className="resultsCount">{sortedProducts.length} Products</p>
            <div className="sortContainer">
              <label className="sortLabel">Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sortSelect">
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="productGrid">
            {sortedProducts.map(product => (
              <div key={product.id} className="productCard">
                <div className="productImageContainer">
                <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title} className="productImage" /></Link>
                  <button
                    className={`favoriteBtn ${favorites.has(product.id) ? 'favoriteBtnActive' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={favorites.has(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <Link to={`/product/${product.id}`} className="productInfo">
                  <h3 className="productTitle">{product.title}</h3>
                  <div className="productFooter">
                    <span className="productPrice">₹{product.price}</span>
                    {/* <Link to={`/product/${product.id}`} className="btn view-btn">
                        Buy Now
                    </Link> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Overlay */}
      {showFilters && <div className="overlay" onClick={() => setShowFilters(false)}></div>}
    </div>
  );
};

export default Shop;