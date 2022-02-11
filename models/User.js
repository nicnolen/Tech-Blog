/* HANDLES ALL USER DATA TRANSACTIONS BETWEEN THE USER API AND THE MySQL DATABASE */
// Import the Model class and DataTypes object from Sequelize
// Model class is used to create our own models from using the extends keyword
const { Model, DataTypes } = require('sequelize');
// Import Sequelize
const sequelize = require('../config/connection');
// Import bcrypt to hash passwords
const bcrypt = require('bcrypt');

// Create User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compare(loginPw, this.password);
  }
}

// Define table columns and configuration
User.init(
  // TABLE COLUMNS
  {
    // user id
    id: {
      // use the special Sequelize DataTypes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // equivalent to SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    // username
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cant be any duplicate email values in the table
      unique: true,
      // if allowNull is set to false, we can run our data through validatiors before creating the table data
      validate: {
        isEmail: true,
      },
    },
    // password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // password must be at least four characters long
        len: [4],
      },
    },
  },

  // TABLE CONFIGURATION OPTIONS (https://sequelize.org/v5/manual/models-definition.html#configuration))
  {
    // add in hooks (javascript functions). We want the hook to fire just before a new User is created
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality for creating new users
      // NOTE: userData contains prehasing data, newUserData contains post hashing data
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeCreate hook for updating users
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    // pass in imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize the name of the database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so the model name stays lowercase in the database
    modelName: 'user',
  }
);

// export the module
module.exports = User;
