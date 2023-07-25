const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/user');

app.use(express.json()); // Middleware to parse JSON request bodies

// Mount user routes
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});