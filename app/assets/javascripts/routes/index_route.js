Wildcard.IndexRoute = Ember.Route.extend({
  model: function() {
    return Wildcard.Card.find();
  }
});
