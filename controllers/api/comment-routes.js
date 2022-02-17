/* ROUTES FOR THE COMMENT MODEL (/api/comment) */
// Import Express.js Router(), the Comment and User models, and our authentication function
const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/comments (find all comments)
router.get('/', (req, res) => {
  Comment.findAll({
    attributes: ['id', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET api/comments/:id (find comment by id)
router.get('/:id', withAuth, (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'comment_text', 'created_at'],
    include: [
      // include User model
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// POST api/comments (create new comment)
router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
      username: req.session.username,
    })
      .then(dbCommentData => {
        console.log(dbCommentData);
        res.json(dbCommentData);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  }
});

// PUT api/comments/:id (update comment by id)
router.put('/:id', withAuth, (req, res) => {
  Comment.update(
    {
      comment_text: req.body.comment_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// DELETE api/comments/:id (delete comment by id)
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Export the module
module.exports = router;
