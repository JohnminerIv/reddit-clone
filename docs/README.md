# Node Reddit Clone

>This project is a basic clone of reddit using document and behavioral test driven
development.

## Usage instructions
Set mapping for port

`touch .env && echo PORT=3000 > .env`


Have Docker installed, 

`docker-compose up`

Navigate to homepage at http://localhost:3000

### Features
#### Create a post
Make a /posts/new route (/post/create) and template (posts-new.handlebars)
Add form to posts-new template
Make create posts route and check that form data is sending to new route
Add Post model with mongoose
Confirm posts are saving to database
#### Show all posts
Make the root route (/) go to the /posts/index route render a posts-index template
Style the template and loop over the posts object
Make route to /posts/show route (/posts/:id)
Style the template and display the post object
#### Show one post
#### Create subreddits
Add a subreddit attribute to our post resource
Navigate to view all the posts of the same subreddit
#### Comment on posts
Make a new comment form in the /posts/show template
Make a create route for comments
Associate comments with posts
Display comments
#### sign up and Login
#### Associate posts and comments with their author
#### Make comments on comments
#### Vote a post up or down





