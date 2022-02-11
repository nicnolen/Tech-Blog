/* ROUTES FOR THE COMMENT MODEL (/api/comment) */
// Import Express.js Router() and the Comment model
const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments (find all comments)
router.get('/', (req, res) => {});

// GET api/comments/:id (find comment by id)
router.get('/:id', (req, res) => {});

// POST api/comments (create new comment)
router.post('/', (req, res) => {});

// PUT api/comments/:id (update comment by id)
router.put('/:id', (req, res) => {});

// DELETE api/comments/:id (delete comment by id)
router.delete('/:id', (req, res) => {});
