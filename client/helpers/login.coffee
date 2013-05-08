Meteor.startup ->
  Template.loginPage.events =
    'mousedown .login-submit': ->
      username = $('#user').val()
      password = $('#password').val()

      Meteor.loginWithPassword username, password, (err) ->
        if (err)
          return console.log err
        Meteor.Router.to '/hackers/' + username