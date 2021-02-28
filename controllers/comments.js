const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

module.exports = function(app) {
// CREATE Comment
app.post("/post/:postId/comment/create", (req, res) => {
    // INSTANTIATE INSTANCE OF MODEL
    var currentUser = req.user;
    let comment = new Comment(req.body);
    comment['author'] = currentUser
  
    // SAVE INSTANCE OF Comment MODEL TO DB
    comment
    .save()
    .then(comment => {
      return Post.findById(req.params.postId);
    })
    .then(post => {
      post.comments.unshift(comment);
      post.save();
      return User.findById(req.user._id);
    })
    .then(user => {
      user.comments.unshift(comment);
      return user.save();
    })
    .then(post => {
      res.redirect(`/`);
    })
    .catch(err => {
      console.log(err);
    });
  });
};