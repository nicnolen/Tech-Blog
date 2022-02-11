/* ROUTES FOR THE USER MODEL (/api/users) */
// Import Express.js Router() and the User model
const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users (all users)
router.get('/', (req, res) => {
  // access the User model and find all users using .findAll()
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// GET /api/users/id (search user by id)
router.get('/:id', (req, res) => {});

// POST /api/users (create a new user)
router.post('/', (req, res) => {});

// PUT /api/users/1 (update user by id)
router.put('/:id', (req, res) => {});

// DELETE /api/users/1 (delete a user by id)
router.delete('/:id', (req, res) => {});
