/* ALL USER-FACING ROUTES (Ex: HOME PAGE, LOGIN PAGE) */
/* IMPORTS */
// Import the Express.js Router
const router = require('express').Router();

// GET route for the home page route
router.get('/', (req, res) => {
  // Use res.render to specify which template you want to use
  res.render('homepage');
});

// Export the module
module.exports = router;
