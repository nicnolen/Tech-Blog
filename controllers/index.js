/* COLLECT THE PACKAGED API ROUTES AND PREFIX WITH /api */
// Import Express.js Router
const router = require('express').Router();
// Import the api folder
const apiRoutes = require('./api');

// Allow the routers to use the api endpoints and prefix them with the path /api
router.use('/api', apiRoutes);

// Make a 404 error if the reqest is made to an endpoint that doesnt exist
router.use((req, res) => {
  res.status(404).end();
});

// Export the file
module.exports = router;
