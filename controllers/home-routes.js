/* ALL USER-FACING ROUTES (Ex: HOME PAGE, LOGIN PAGE) */
// Import the Express.js Router, Sequelize, and the models
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET all posts for the home page route
router.get('/', (req, res) => {
  console.info(req.session);
  console.info('====================');
  Post.findAll({
    attributes: ['id', 'post_url', 'title', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then(dbPostData => {
      // loop over and map each Sequelize object into a serialized version, saving results in a new `posts` array
      const posts = dbPostData.map(post => post.get({ plain: true }));

      // Use res.render to specify which template you want to use as the first argument
      // And an object that includes the data you want to pass into the template as the second argument
      // NOTE .get({ plain: true }) converts Sequelize object down to a plain object
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    // redirect to the homepage if a session exists
    res.redirect('/');
    return;
  }
  res.render('login');
});

// GET post by id (single post)
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attrbutes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      { model: User, attributes: ['username'] },
    ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Export the module
module.exports = router;
