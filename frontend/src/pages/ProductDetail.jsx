// src/pages/ProductDetail.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import products from '../data/products'; // ✅ Corrected Import
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/shop')}>Back to Shop</button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <div className="product-detail-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="image-thumbnails">
            <img src={product.image} alt={product.name} className="thumbnail active" />
          </div>
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
          
          <div className="product-meta">
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;