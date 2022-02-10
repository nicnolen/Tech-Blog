/* CONNECT TO THE DATABASE (db) USING SEQUELIZE */
// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// Import and configure the dotenv dependency so we can use process.env for sensitive information
require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost', // Host is the system that contains the data. localhost means that the data is on your local computer
    dialect: 'mysql', // Telling us what sql dialect we are using
    port: 3306, // Port of the relational database
  }
);

// Export the module
module.exports = sequelize
