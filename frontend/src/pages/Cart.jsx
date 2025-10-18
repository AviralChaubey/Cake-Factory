import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { useCart } from "../context/CartContext";
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { cartItems, itemCount, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <Header />
      <div className={styles['cart-container']}>
        <h1>Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className={styles['empty-cart-message']}>
            <i className="fas fa-shopping-cart"></i>
            <p>Your cart is empty</p>
            <Link to="/shop" className={styles['continue-shopping-btn']}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className={styles['cart-content']}>
            <div className={styles['cart-items']}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles['cart-item']}>
                  <img src={item.image} alt={item.name} className={styles.productImage} />
                  <div className={styles['item-info']}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className={styles['item-price']}>₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className={styles['remove-btn']} onClick={() => removeFromCart(item.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
            
            <div className={styles['cart-summary']}>
              <h3>Order Summary</h3>
              <div className={styles['summary-details']}>
                <div className={styles['summary-row']}>
                  <span>Items ({itemCount}):</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className={styles['summary-row']}>
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className={`${styles['summary-row']} ${styles.total}`}>
                  <span>Total:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <button className={styles['checkout-btn']}>
                Proceed to Checkout
              </button>
              <Link to="/shop" className={styles['continue-shopping-btn']}>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;