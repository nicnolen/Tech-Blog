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
// NOTE: inserting data using the keys defined in the User model and the values from req.body
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
router.put('/:id', (req, res) => {
  // expects {username: 'Name', email: 'name@gmail.com', password: 'password1234'}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  // NOTE: req.body is the new data you want to update, req.params.id is where you want the new data to be used
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1 (delete a user by id)
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Export the file
module.exports = router;
