Meteor.methods({
  createDescription: function(text) {
    return Meteor.users.update({ _id: Meteor.user()._id }, {$set:{ "profile.about": text }});
  }
});