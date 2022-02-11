/* USED FOR CREATING AND EXPORTING MODEL DATA */
// IMPORT MODELS
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// MODEL ASSOCIATIONS
// One User can have many Posts (one to many)
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// One Post can belong to one User (one to one)
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL', // if a record in the User table gets deleted, Post data will be set to null
});

// One User can have many Comments (one to many)
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// One Comment belongs to one User (one to one)
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// One Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

// One Comment belongs to one Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

// Expect the module
module.exports = { User, Post, Comment };
