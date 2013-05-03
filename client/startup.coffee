if Meteor.isClient
  Meteor.startup ->
    Template.body.user = ->
      if Meteor.users()
        if ! Meteor.loggingIn()
          return Meteor.users().username