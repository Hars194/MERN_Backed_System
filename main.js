const express = require('express');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');
const cors= require('cors'); //cross origin refrence
const app = express();

// Connect to DB
connectDB();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Health check route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Item routes
app.use('/api', itemRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});