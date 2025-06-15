// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome to Home Page</h1>');
});

app.get('/about-us', (req, res) => {
  res.status(200).json({ message: 'Welcome to About Us' });
});

app.get('/contact-us', (req, res) => {
  const contactDetails = {
    email: 'contact@example.com',
    phone: '+91-9876543210',
    address: '123, Masai Street, Bangalore'
  };
  res.status(200).json(contactDetails);
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
