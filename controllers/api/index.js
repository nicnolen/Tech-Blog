/* COLLECTS ALL API DATA AND PACKAGES THEM WITH A PREFIX*/
// Import Express.js Router()
const router = require('express').Router();

// Import routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

// Allow the router to use the routes and prefix the routes with the path /user
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// Export the file
module.exports = router;
