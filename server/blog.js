Meteor.methods({
  createBlogPost: function(title, body) {
    if (title == "" || body == "") {
      throw new Meteor.Error(204, 'must have content to create a blog post');
    } else {
      console.log('creating post');
      var hacker = Meteor.user().username;
      return Blogs.update({creator: hacker}, {$push:{post: { title: title, body: body }}});
    }
  }
});
