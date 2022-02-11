/* COLLECTS ALL API DATA AND PACKAGES THEM WITH A PREFIX*/
// Import Express.js Router()
const router = require('express').Router();

// Import routes
const userRoutes = require('./user-routes.js');

// Allow the router to use the routes and prefix the routes with the path /user
router.use('/users', userRoutes);

// Export the file
module.exports = router;
