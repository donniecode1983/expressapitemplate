// Import Libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Default Route
app.get('/', (req, res) => {
    res.send("The home route.");
});

// Import Routes Here
const postsRoute = require('./routes/posts');



// Middleware
// Route Middleware to point to routes
app.use('/posts', postsRoute);


// Conect to Database
mongoose.connect(
    process.env.DB_CONNECTION,
    {
     useUnifiedTopology: true,
     useNewUrlParser: true
    },   () => {
    console.log('Connected to DB!');
});



// Start Server
app.listen(3000);