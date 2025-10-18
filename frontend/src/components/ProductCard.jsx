import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/Shop.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <h3 className={styles.foodname}>{product.name}</h3>
        <p className={styles.price}>₹{product.price}</p>
      </Link>
      
      <button 
        className={styles.addToCartBtn || styles.foodname} 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;