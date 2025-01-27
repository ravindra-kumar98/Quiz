const express = require('express'); // Import express
const cors = require('cors'); // Import cors
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db'); // Import the connectDB function
const app = express(); // Create Express app

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

connectDB(); // Connect to the database



const PORT = process.env.PORT || 6000; // Define the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server