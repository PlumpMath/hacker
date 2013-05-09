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
          Session.set('error', err)
          return Meteor.Router.to '/login'
        Meteor.Router.to '/'