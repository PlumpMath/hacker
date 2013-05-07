Meteor.Router.add({
  '/': 'landingPage',
  '/login': 'loginPage',
  '/signup': 'signupPage'
});

Meteor.Router.filters({
  requireLogin: function(page) {
    if (Meteor.loggingIn()) {
      return 'loadingPage';
    } else if (Meteor.user()) {
      return page;
    } else {
      return 'loginPage';
    }
  }
});

Meteor.Router.filter('requireLogin')