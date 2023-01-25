const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Take a look at my github to learn more",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
