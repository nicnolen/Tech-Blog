/* ROUTES FOR THE DASHBOARD */
// IMPORT FILES AND DEPENDENCIES
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET route to the main page
router.get('/', (req, res) => {
  res.render('dashboard', { loggedIn: true });
});

// Export the module
module.exports = router;
