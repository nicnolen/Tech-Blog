/* SERVER */
/* NODE.JS MODULES */
// Import the Path module to work with directories and file paths
const path = require('path');

/* DEPENDENCIES */
// Import express.js
const express = require('express');
// Import Sequelize
const sequelize = require('./config/connection');
// Import Handlebars.js
const exphbs = require('express-handlebars');

// Provide a port dynamically
const PORT = process.env.PORT || 3001;
// Assign express.js as a variable
const app = express();

// Create a new helper
const hbs = exphbs.create({});

// Set Handlebars.js as app's template engine choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/* Express.js MIDDLEWARE FUNCTIONS */
// Let express know we want the data in JSON format
app.use(express.json());
// What kind of encoding we want to do
app.use(express.urlencoded({ extended: true }));
// Takes the contents of the `public` folder and makes them static assets so we can use the front-end files
app.use(express.static(path.join(__dirname, 'public')));

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.info(`Now listening on port ${PORT}`));
});
