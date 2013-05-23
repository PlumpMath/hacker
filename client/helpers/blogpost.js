Handlebars.registerHelper('postTitle', function() {
  return Session.get('currentPost').title;
});

Handlebars.registerHelper('postBody', function() {
  return Session.get('currentPost').body;
});

Handlebars.registerHelper('author', function() {
  var author = Session.get('currentBlog').creator;
  return '<a href="/hackers/' + author + '">' + author + '</a>'
});
