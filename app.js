require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// 404 handler
app.use((req, res, next) => {
  return res.status(404).json({ message: `can't find ${req.url}` });
});

// 500 handler
app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;