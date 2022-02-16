/* COLLECT THE PACKAGED API ROUTES AND PREFIX WITH /api */
// Import the Express.js Router function to define the way requests are handled
const router = require('express').Router();

// Import the api folder
const apiRoutes = require('./api');
// Import the homeRoutes file
const homeRoutes = require('./home-routes.js');
// Import the dashboard router module
const dashboardRoutes = require('./dashboard-routes.js');

// Allow the router to use the homeRoutes file
router.use('/', homeRoutes);
// Allow the router to use the api endpoints and prefix them with the path /api
router.use('/api', apiRoutes);
// Allow the router to use the dashboard endpoints and prefix them with the path /dashboard
router.use('/dashboard', dashboardRoutes);

// Make a 404 error if the reqest is made to an endpoint that doesnt exist
router.use((req, res) => {
  res.status(404).end();
});

// Export the module
module.exports = router;
