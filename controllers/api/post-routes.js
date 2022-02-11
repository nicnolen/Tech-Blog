/* ROUTES FOR THE POST MODEL (/api/posts) */
// Import Express.js Router() and the User and Post model
const router = require('express').Router();
const { compareSync } = require('bcrypt');
const { Post, User } = require('../../models'); // include User model as well because we want information about each post and the user that posted it

// GET all users
router.get('/', (req, res) => {
  console.info('====================');
  Post.findAll({
    // specify which attributes we are looking for
    attributes: ['id', 'post_url', 'title', 'created_at'],
    // join to the user table
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    // capture the response from the database call
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Export the module
module.exports = router;
