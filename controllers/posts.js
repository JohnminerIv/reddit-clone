const Post = require('../models/post');

module.exports = app => {
    // CREATE
    app.get('/post/create', (req, res) => {
        res.render('post-create')
    })

    app.post("/post/create", (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
      })
    });
  };