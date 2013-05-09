// name
Handlebars.registerHelper('hacker', function(input) {
  return Session.get("hacker").username;
});

// tools
Handlebars.registerHelper('hacker_tools', function(input) {
  if (Session.get("hacker").profile.tools) {
    var html = "<ul>";
    var tools = Session.get('hacker').profile.tools;
    for (var i = 0; i < tools.length; i++) {
      html += '<li class="profile-tool">' + tools[i] + '</li>';
    }
    html += "</ul>";
    return html;
  } else {
    return "";
  }
});

// about
Handlebars.registerHelper('hacker_about', function(input) {
  if (Session.get("hacker").profile.about) {
    return Session.get("hacker").profile.about;
  } else {
    return "";
  }
});

// load partials based on navigation tab clicks
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