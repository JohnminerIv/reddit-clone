const Post = require('../models/post');
const User = require('../models/user');

module.exports = app => {
    // CREATE
    app.get('/post/create', (req, res) => {
        res.render('post-create')
    })

    app.post("/post/create", (req, res) => {
      if (req.user) {
        let post = req.body
        post['author'] = req.user
        post = new Post(post);
    
        post
        .save()
        .then(post => {
          return User.findById(req.user._id);
        })
        .then(user => {
          user.posts.unshift(post);
          user.save();
          // REDIRECT TO THE NEW POST
          res.redirect(`/post/${post._id}`);
        })
        .catch(err => {
          console.log(err.message);
        });
      } else {
        res.status(401).send({'401': 'Not authorised'})
      }
    });

    app.get("/post/all", (req, res) => {
        var currentUser = req.user;
        console.log(req.cookies);
        Post.find({}).lean().populate('author')
        .then(posts => {
          res.render('post-all', { posts, currentUser });
        })
        .catch(err => {
          console.log(err.message);
        })
    })

    app.get("/post/:id", (req, res) => {
        var currentUser = req.user;
        // LOOK UP THE POST
        Post
        .findById(req.params.id)
        .lean()
        .populate('author')
        .populate({
          path: 'comments',
          populate: {
            path: 'author',
            model: 'User'
          }
        })
        .then(post => {
          res.render("post-show", { post, currentUser});
        })
        .catch(err => {
          console.log(err.message);
        });
      });
    
      app.get("/n/:subreddit", (req, res) => {
        var currentUser = req.user;
        Post
        .find({ subreddit: req.params.subreddit })
        .lean()
        .populate('author')
        .then(posts => {
          res.render("post-all", { posts, currentUser });
        })
        .catch(err => {
          console.log(err);
        });
      });
  };