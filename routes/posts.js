// Import Libriaies
const express = require('express');

// Create Router
const router = express.Router();

// Build Routes
router.get('/', (req, res) => {
    res.send('We are on posts!');
});

router.get('/specfic', (req, res) => {
    res.send('We are on specfic!');
});

// Export the Router

module.exports = router;