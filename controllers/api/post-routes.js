/* ROUTES FOR THE POST MODEL (/api/posts) */
// Import Express.js Router() and the User and Post model
const router = require('express').Router();
const { Post, User, Comment } = require('../../models'); // include User model as well because we want information about each post and the user that posted it

// GET all users
router.get('/', (req, res) => {
  console.info('====================');
  Post.findAll({
    // specify which attributes we are looking for
    attributes: ['id', 'post_url', 'title', 'created_at'],
    // order the posts to show the latest news first (decending order)
    order: [['created_at', 'DESC']],
    // join to the user table
    include: [
      // include Comment model
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attrbutes: ['username'],
        },
      },
      // include User model
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

// GET a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'post_url', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// POST a new post
router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.body.user_id,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// UPDATE a new post
router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// DELETE a post
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});
// Export the module
module.exports = router;
