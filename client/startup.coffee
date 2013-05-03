if Meteor.isClient
  Meteor.startup ->
    # give the layout the current user
    Template.body.user = ->
      if Meteor.user()
        console.log 'yep'
        return Meteor.user().username
      console.log 'nope'
    
    # bootstrap angular
    angular.element(document).ready ->
      angular.bootstrap document, ['hackerApp']