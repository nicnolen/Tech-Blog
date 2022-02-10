/* SERVER */
/* NODE.JS MODULES */
// Import the Path module to work with directories and file paths
const path = require('path');

/* DEPENDENCIES */
// Import express.js
const express = require('express');
// Import Sequelize
const sequelize = require('./config/connection');

// Provide a port dynamically
const PORT = process.env.PORT || 3001;
// Assign express.js as a variable
const app = express();

/* Express.js MIDDLEWARE FUNCTIONS */
// Let express know we want the data in JSON format
app.use(express.json());
// What kind of encoding we want to do
app.use(express.urlencoded({ extended: true }));
// Takes the contents of the `public` folder and makes them static assets so we can use the front-end files
app.use(express.static(path.join(__dirname, 'public')));

// make app listen to server
app.listen(PORT, () => console.info(`Now listening on port ${PORT}`))

