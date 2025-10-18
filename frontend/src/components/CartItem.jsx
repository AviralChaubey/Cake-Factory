import React from 'react';
import styles from '../styles/Cart.module.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className={styles['cart-item']}>
      <img src={item.image} alt={item.name} className={styles.productImage} />
      <div className={styles['item-info']}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className={styles['item-price']}>₹{item.price.toFixed(2)}</p>
      </div>
      <div className={styles.quantity}>
        <button onClick={() => onUpdateQuantity(item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.quantity + 1)}>
          +
        </button>
      </div>
      <button className={styles['remove-btn']} onClick={onRemove}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;