/* ALL USER-FACING ROUTES (Ex: HOME PAGE, LOGIN PAGE) */
/* IMPORTS */
// Import the Express.js Router
const router = require('express').Router();

// GET route for the home page route
router.get('/', (req, res) => {
  // Use res.render to specify which template you want to use as the first argument
  // And an object that includes the data you want to pass into the template as the second argument
  res.render('homepage', {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Doc',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user',
    },
  });
});

// Export the module
module.exports = router;
