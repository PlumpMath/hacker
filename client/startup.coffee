Meteor.startup ->
  cb = ->
    Template.body.hacker =
      if Meteor.user() && ! Meteor.loggingIn()
        console.log 'logged in'
        Meteor.user().username

  Meteor.setTimeout cb, 200