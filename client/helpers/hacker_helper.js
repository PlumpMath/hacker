Handlebars.registerHelper('hacker', function(input) {
  return Session.get("hacker").username;
});

Meteor.startup(function() {
  Session.set('active_section', 'profileAbout');

  Template.hackerPage.profile_section = function() {
    var page_index = Session.get('active_section');
    return Template[page_index]();
  };

  Template.hackerPage.events = {
    // mousedown about
    'mousedown .profile-nav-link.about': function() {
      Session.set('active_section', 'profileAbout');
    },
    // mousedown codes
    'mousedown .profile-nav-link.codes': function() {
      Session.set('active_section', 'profileCodes');
    },
    // mousedown blog
    'mousedown .profile-nav-link.blog': function() {
      Session.set('active_section', 'profileBlog');
    }
  }
});