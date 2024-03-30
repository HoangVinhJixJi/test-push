// routes/index.js
const express = require('express');
const router = express.Router();

// Import controllers
const homeC = require('../controllers/home.c');

// Define routes
router.get('/', homeC.getHomePage);
// router.get('/create', homeC.createNewSong);

module.exports = router;
