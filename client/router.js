var signout = function() {
  Meteor.logout(function(err) {
    if (err) {
      console.log(err);
    }
    Meteor.Router.to('/');
  });
};

Meteor.Router.add({
  '/': 'hackersPage',
  '/login': 'loginPage',
  '/signup': 'signupPage',
  '/hackers': 'hackersPage',
  '/hackers/:hacker': function(hacker) {
    if (Meteor.users.findOne({ username: hacker })) {
      Session.set("hacker", Meteor.users.findOne({ username: hacker }));
      return "hackerPage";
    }
    else return "404";
  },
  '/posts/:hacker/:postId': function(hacker, postId) {
    console.log(this.params);
    var blog = Blogs.findOne({ creator: hacker });
    if (blog) {
      Session.set("currentBlog", blog);
      Session.set("currentPost", blog.posts[postId]);
      return "blogPostPage";
    } else return "404";
  },
  '/logout': function() {
    signout();
  }
});

Meteor.Router.filters({
  requireLogin: function(page) {
    if (Meteor.loggingIn()) {
      return "loading";
    } else if (Meteor.user()) {
      return page;
    } else {
      return 'landingPage';
    }
  }
});

Meteor.Router.filter('requireLogin', {
  except:['loginPage', 'signupPage', 'landingPage']
});
