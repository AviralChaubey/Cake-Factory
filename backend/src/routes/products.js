import express from 'express';
import products from '../data/products.js';

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  console.log("Data being sent:", products);
  res.json(products);
});

// Add a new product
router.post('/', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  res.json(product);
});

// Delete a product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(204).send();
});

export default router;