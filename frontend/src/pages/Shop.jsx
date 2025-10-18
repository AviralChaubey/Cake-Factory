import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { products } from '../data/products';
import styles from '../styles/Shop.module.css';
import kau1 from '../assets/images/kau1.jpg';
import kau2 from '../assets/images/kau2.jpg';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <SearchBar 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search Cakes..."
      />
      <h1 className={styles.heading}>Crafted for your Cravings</h1>

      {/* Product Grid */}
      <section className={styles.products}>
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* More Products Button */}
      <section className={styles.more}>
        <Link to="/shop">
          <button className={styles.moreBtn}>Tap To See More -&gt;</button>
        </Link>
      </section>

      {/* How We Source & Crafted With Care */}
      <div className={styles.box}>
        <section className={styles.knowabtus}>
          <div className={styles.info1}>
            <img src={kau1} alt="How we source" className={styles.aboutImage} />
            <h2>How we source our products</h2>
            <p>We carefully select high-quality, ethically sourced ingredients from trusted suppliers who share our commitment to authenticity and sustainability. Every product is crafted with natural, responsibly harvested materials, ensuring freshness and premium taste.</p>
          </div>
          <div className={styles.info2}>
            <img src={kau2} alt="Crafted with care" className={styles.aboutImage} />
            <h2>Crafted with care</h2>
            <p>We believe in creating products that are not only delicious but also ethically made. Our commitment to authenticity and animal-friendly practices ensures that every ingredient is responsibly sourced and free from any harm to animals.</p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Shop;