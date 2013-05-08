var navigateTo = function(path) {
  Meteor.Router.to(path);
};

var signout = function() {
  Meteor.logout(function(err) {
    if (err) {
      console.log(err);
    }
    navigateTo('/login');
  });
};

Meteor.Router.add({
  '/': 'landingPage',
  '/login': 'loginPage',
  '/signup': 'signupPage',
  '/hackers/:hacker': function(hacker) {
    if (Meteor.users.findOne({ username: hacker })) {
      Session.set("hacker", hacker);
      return "hacker";
    }
    else return "404";
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
      return 'loginPage';
    }
  }
});

Meteor.Router.filter('requireLogin', {
  except:['loginPage', 'signupPage', 'landingPage']
});