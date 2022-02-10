/* HANDLES ALL POST DATA TRANSACTIONS BETWEEN THE POST API AND THE MySQL DATABASE */
// Import the Model class and DataTypes object from Sequelize
// Model class is used to create our own models from using the extends keyword
const { Model, DataTypes } = require('sequelize');
// Import Sequelize
const sequelize = require('../config/connection');

// Create the Post model
class Post extends Model {}

// Create fields/columns for the Post model
Post.init(
  // TABLE COLUMNS
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  // TABLE CONFIGURATIONS
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

// Export the module
module.exports = Post;
