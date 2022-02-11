/* SERVER */
/* NODE.JS MODULES */
// Import the Path module to work with directories and file paths
const path = require('path');

/* DEPENDENCIES */
// Import express.js
const express = require('express');
// Import and configure the dotenv dependency so we can use process.env for sensitive information
require('dotenv').config();
// Import express-session to let us connect to the backend
const session = require('express-session');
// Import connect-session-sequelize to automatically store the sessions created by express-session into our database
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Import Handlebars.js
const exphbs = require('express-handlebars');

/* FILE PATHS */
// Import Sequelize file path
const sequelize = require('./config/connection');
// Import the routes file path
const routes = require('./routes');

// set up Express.js session and connect the session to Sequelize database
const sess = {
  secret: process.env.SESSION_SECRET, // session cookie id
  cookie: {}, // tell session to use cookies
  resave: false, // wont force the session to be saved back to session store without modifications
  saveUninitialized: false, // wont force uninitialized sessions to be saved to the store. A session is uninitialized when it is new but not modified
  store: new SequelizeStore({
    db: sequelize,
  }), // creates a new session store with the database as sequelize
};

// Provide a port dynamically
const PORT = process.env.PORT || 3001;
// Assign express.js as a variable
const app = express();

// allow the app to use the session
app.use(session(sess));

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

// Allow the app to use the controllers
app.use(require('./controllers/'));

// Turn on connection to db and server
// NOTE if you change force to `true` then the database must sync with the model definitions and associations, making the tables re-create after any association change
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.info(`Now listening on port ${PORT}`));
});
