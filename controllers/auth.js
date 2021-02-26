const User = require("../models/user");
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    // SIGN UP FORM
    app.get("/sign-up", (req, res) => {
      res.render("sign-up");
    });

    app.post("/sign-up", (req, res) => {
        // Create User
        const user = new User(req.body);
        user
        .save()
        .then(user => {
            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
            res.redirect("/");
        })
        .catch(err => {
            console.log(err.message);
            return res.status(400).send({ err: err });
        });
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('nToken');
        res.redirect('/');
      });
}
