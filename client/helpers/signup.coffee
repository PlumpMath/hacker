Meteor.startup ->
  Template.signupPage.events =
  
    # github signup
    'mousedown .github': ->
      Meteor.loginWithGithub {
        requestPermissions: ['user', 'public_repo']
      }, (err) ->
        if err
          console.log err
        Meteor.Router.to '/hackers/' + username

    # twitter signup
    'mousedown .twitter': ->
      Meteor.loginWithTwitter {}, (err) ->
        if err
          console.log err
        Meteor.Router.to '/hackers/' + username

    # local signup
    'mousedown .signup-submit': ->
      username = $('#user').val()
      email = $('#email').val()
      password = $('#password').val()

      Accounts.createUser {
        username: username
        email: email
        password: password
      }, (err) ->
        if (err)
          console.log err
        Meteor.Router.to '/hackers/' + username