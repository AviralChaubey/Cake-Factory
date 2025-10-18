import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import cartIcon from '../assets/images/cart.png';
import styles from '../styles/Header.module.css';

const Header = () => {
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>CAKE FACTORY</div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? styles.active : ''} 
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/shop" 
              className={location.pathname === '/shop' ? styles.active : ''} 
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? styles.active : ''} 
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cart}>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
          {itemCount > 0 && (
            <span className={styles.cartCount}>{itemCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;