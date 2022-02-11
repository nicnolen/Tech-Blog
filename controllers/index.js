/* COLLECT THE PACKAGED API ROUTES */
// Import the Express.js Router function to define the way requests are handled
const router = require('express').Router();

// Import the homeRoutes file
const homeRoutes = require('./home-routes.js');

// Allow the router to use the homeRoutes file
router.use('/', homeRoutes);

// Export the module
module.exports = router;
