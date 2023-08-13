// backend/index.js
const express = require('express');
const app = express();
const PORT = 3000; // Choose a port for your server

// Your Express API routes and middleware can be defined here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
