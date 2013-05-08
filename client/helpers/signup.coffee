Meteor.startup ->
  Template.signupPage.events =
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