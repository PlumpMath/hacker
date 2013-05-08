Meteor.startup ->
  Template.loginPage.events =

    # github login
    'mousedown .github': ->
      Meteor.loginWithGithub {
        requestPermissions: ['user', 'public_repo']
      }, (err) ->
        if err
          console.log err
        Meteor.Router.to '/hackers/' + username

    # local login
    'mousedown .login-submit': ->
      username = $('#user').val()
      password = $('#password').val()

      Meteor.loginWithPassword username, password, (err) ->
        if (err)
          return console.log err
        Meteor.Router.to '/hackers/' + username