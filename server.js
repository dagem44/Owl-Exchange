
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In memory "database".
let listings = [
  {
    id: 1,
    title: 'Calculus Early Transcendentals (8th Ed.)',
    price: 40,
    category: 'Textbooks',
    seller: 'demo_user',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Mini Fridge - barely used',
    price: 60,
    category: 'Dorm',
    seller: 'demo_user',
    createdAt: new Date().toISOString()
  }
];
let nextId = 3;

// GET /api/listings
app.get('/api/listings', (req, res) => {
  const { category } = req.query;
  const results = category
    ? listings.filter(l => l.category.toLowerCase() === category.toLowerCase())
    : listings;
  res.json(results);
});

// POST /api/listings 
app.post('/api/listings', (req, res) => {
  const { title, price, category, seller } = req.body;
  if (!title || !price || !category || !seller) {
    return res.status(400).json({ error: 'title, price, category, and seller are required' });
  }
  const listing = {
    id: nextId++,
    title,
    price: Number(price),
    category,
    seller,
    createdAt: new Date().toISOString()
  };
  listings.push(listing);
  res.status(201).json(listing);
});

// DELETE /api/listings/:id 
app.delete('/api/listings/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = listings.length;
  listings = listings.filter(l => l.id !== id);
  if (listings.length === before) {
    return res.status(404).json({ error: 'listing not found' });
  }
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Owl Exchange proof-of-concept server running at http://localhost:${PORT}`);
});
