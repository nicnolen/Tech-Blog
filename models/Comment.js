/* HANDLES ALL COMMENT DATA TRANSACTIONS BETWEEN THE COMMENT API AND THE MySQL DATABASE */
// Import the Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');
// Import Sequelize
const sequelize = require('../config/connection');

// Create Post model
class Comment extends Model {}

// Create columns and configuration for Comment model
Comment.init(
  // TABLE COLUMNS
  {
    // comment id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // text of the comment
    comment_text: {
      type: DataTypes.STRING,
      validate: {
        len: [1], // comment must be at least 1 character long
      },
    },
    // user id
    user_id: {
      type: DataTypes.INTEGER,
      // foreign key
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // post id
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },

  // TABLE CONFIGURATIONS
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

// Export the module
module.exports = Comment;
