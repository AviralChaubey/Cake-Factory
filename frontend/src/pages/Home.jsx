import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadImage from '../assets/images/BAKERY.jpg'; // Ensure the file exists
import styles from '../styles/Home.module.css'; // Ensure this path is correct

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles.mainContent}>
        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img src={BreadImage} alt="Stacked Breads" />
        </div>

        {/* Text Container */}
        <div className={styles.textContainer}>
          <h1>OUR STORY</h1>
          <p>
            Cake Factory was born out of a love for baking and a passion for 
            spreading happiness through sweet creations. What started as a small 
            home bakery soon turned into a beloved brand, bringing people together 
            over delicious, handcrafted cakes. Our journey has been fueled by the 
            smiles of our customers, inspiring us to innovate and perfect our craft. 
            Today, we continue to blend tradition with creativity, ensuring 
            that every cake is a delightful experience worth remembering.
          </p>
          <Link to="/shop">
            <button className={styles.shopButton}>SHOP NOW</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;