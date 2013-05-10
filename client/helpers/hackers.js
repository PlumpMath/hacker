(function() {
  'use strict';

  // list all hackers
  Handlebars.registerHelper("hackers", function(input) {
    var html, user_list, i;

    html = '<ul class="hacker-list">';
    user_list = Meteor.users.find().fetch();
    for (i = 0; i < user_list.length; i++) {
      if (user_list[i].username) {
        html += '<li class="hacker"><a class="hacker-link" href="/hackers/' + user_list[i].username + '">'
        html += user_list[i].username + '</a></li>'
      }
    };

    html += "</ul>";
    return html;
  });
})();