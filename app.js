// Import Libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Allow logging objects to the console.
app.use(bodyParser.json());


// Middleware
// Route Middleware to point to routes
// Import Routes Here
const postsRoute = require('./routes/posts');
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



// Default Route
app.get('/', (req, res) => {
    res.send("The home route.");
});








// Start Server
app.listen(3000);