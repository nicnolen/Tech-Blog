/* ROUTES FOR THE COMMENT MODEL (/api/comment) */
// Import Express.js Router() and the Comment model
const router = require('express').Router();
const { Comment, User } = require('../../models');

// GET /api/comments (find all comments)
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET api/comments/:id (find comment by id)
router.get('/:id', (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'comment_text', 'created_at'],
    include: [
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
router.post('/', (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
});

// PUT api/comments/:id (update comment by id)
router.put('/:id', (req, res) => {});

// DELETE api/comments/:id (delete comment by id)
router.delete('/:id', (req, res) => {});

// Export the module
module.exports = router;
