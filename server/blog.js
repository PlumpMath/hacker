Meteor.methods({
  createBlogPost: function(title, body) {
    var hacker = Meteor.user().username;
    if (title == "" || body == "") {
      return throw new Meteor.Error(204, 'must have content to create a blog post');
    } else if (! Blogs.findOne({ creator: hacker })) {
      return Blogs.insert({ creator: hacker, posts: [ { title: title, body: body }]});
    } else {
      console.log('creating post');
      return Blogs.update({creator: hacker}, {$push:{posts:[ { title: title, body: body }]}});
    }
  }
});
