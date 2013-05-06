angular.module('ngMeteor').controller 'HeaderCtrl', ($scope) ->
  Meteor.startup ->
    cb = ->
      $scope.loggedIn = ->
        if Meteor.user() && ! Meteor.loggingIn()
          return true
        else
          return false
      $scope.user = Meteor.user().username
      
    Meteor.setTimeout cb, 250