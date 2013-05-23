Handlebars.registerHelper('postTitle', function() {
  return Session.get('currentPost').title;
});

Handlebars.registerHelper('postBody', function() {
  return Session.get('currentPost').body;
});
