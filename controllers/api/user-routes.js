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
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id, // find an user where id value equals req.params.id
    },
  })
    .then(dbUserData => {
      // if user with a non existant id is searched then a status(404) is sent back to the client
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// POST /api/users (create a new user)
router.post('/', (req, res) => {
  // expects {username: 'Name', email: 'name@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1 (update user by id)
router.put('/:id', (req, res) => {});

// DELETE /api/users/1 (delete a user by id)
router.delete('/:id', (req, res) => {});
