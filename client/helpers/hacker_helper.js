Handlebars.registerHelper('hacker', function(input) {
  return Session.get("hacker");
})