angular.module('ngMeteor').controller 'SignupCtrl', ($scope) ->
  # Create user
  $('.signup-submit.valid').on 'click', ->
    username = 
    options =
      username: $('#user.signup-input').val()
      password: $('#passphrase.signup-input').val()
      email: $('#email.signup-input').val()

    Accounts.createUser options, ->
      console.log 'account creation success'