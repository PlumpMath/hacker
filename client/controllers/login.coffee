angular.module('ngMeteor').controller 'LoginCtrl', ($scope, $location) ->
  # login
  $('.login-submit').on 'click', ->
    user = $('.login-input#user').val()
    password = $('.login-input#password').val()
    console.log user
    console.log password
    Meteor.loginWithPassword user, password, (err) ->
      if (err)
        return console.log(err)
      
      console.log 'successful login'
      $location.replace('/')