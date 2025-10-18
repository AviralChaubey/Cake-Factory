import React from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
      />
    </div>
  );
};

export default SearchBar;