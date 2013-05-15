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
    return "none entered";
  }
});

// about
Handlebars.registerHelper('hacker_about', function(input) {
  if (Session.get("hacker").profile.about) {
    return Session.get("hacker").profile.about;
  } else {
    return "none entered";
  }
});

// blog
Handlebars.registerHelper('hacker_blog', function(input) {
  var hacker = Session.get("hacker").username;
  var current_blog = Blogs.findOne({creator: hacker});
  if (current_blog) {
    var posts = current_blog.posts
    var html = '<ul class="blog-posts">';
    for (var i = 0; i < posts.length; i++) {
      html += '<li class="post">';
      html += '<h3 class="post-title">' + posts[i].title + '</h3>';
      html += '<p class="post-body">' + posts[i].body.substr(0,100) +  '...</p>';
      html += '<p class="post-date">' + posts[i].date + '</p>';
      html += '</li>';
    }
    html += '</ul>';
    return html;
  } else {
    return '<p class="no-blog">no posts</p>';
  };
});

// editAbout
Meteor.startup(function() {
  Template.editAbout.events = {
    'mousedown .submit-edit-about': function() {
      // description
      var descriptionText = $('.edit-about').val();
      Meteor.call("createDescription", descriptionText);
      // tools
      var toolInput = $('.edit-tools').val();
      var toolList = toolInput.split(',');
      Meteor.call("createTools", toolList);
      // return to about partial
      return Session.set('active_section', 'profileAbout');
    }
  };
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
    'mousedown .profile-nav-link.code': function() {
      Session.set('active_section', 'profileCode');
    },
    // mousedown blog
    'mousedown .profile-nav-link.blog': function() {
      Session.set('active_section', 'profileBlog');
    },
    // mousedown editAbout
    'mousedown .edit-link.about': function() {
      Session.set('active_section', 'editAbout');
    }
  }
});
