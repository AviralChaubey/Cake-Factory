import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cartIcon from '../assets/images/cart.png'; // Ensure this image exists
import styles from '../styles/Contact.module.css'; // ✅ Changed to module CSS

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phone: '',
    email: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Only allow numbers for phone input
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    let isValid = true;
    const newErrors = {};

    // Validate required fields
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        isValid = false;
        newErrors[field] = 'This field is required';
      }
    });

    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      isValid = false;
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    // Show errors or submit
    if (!isValid) {
      setErrors(newErrors);
      alert(Object.values(newErrors)[0]); // Show first error as alert
    } else {
      alert("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ firstName: '', secondName: '', phone: '', email: '' }); // Reset form
    }
  };

  return (
    <>
      <Header />

      {/* Contact Form */}
      <main className={styles.contactContainer}>
        {/* Left Panel */}
        <aside className={styles.leftPanel}>
          <p>We'd love <br /> to hear from <br /> you</p>
          <p>We'd love <br /> to work with <br /> you</p>
        </aside>

        {/* Right Panel */}
        <section className={styles.rightPanel}>
          <div className={styles.contactInfo}>
            <p>Feel free to reach out if you want to give us some suggestions, or simply have a chat</p>
            <p><a href="mailto:contact@cakefactory.com">contact@cakefactory.com</a></p>
            <hr />
            <p><strong>Cake Factory</strong><br />123 Sweet Street, Bakery Town,<br />New York, NY 10001, USA</p>
            <p><em>View on Google Maps →</em></p>
          </div>

          <h2 className={styles.formTitle}>Let's Make Your Dream A Reality</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <div key={field} className={styles.formField}>
                <label htmlFor={field}>
                  {field.toUpperCase()}:
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? styles.error : ''}
                  placeholder={`Enter your ${field}`}
                />
                <span className={styles.charCount}>({formData[field].length} chars)</span>
                {errors[field] && <div className={styles.errorMessage}>{errors[field]}</div>}
              </div>
            ))}
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;