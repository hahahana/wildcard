Wildcard.MapRoute = Ember.Route.extend({
  model: function() {
    return Wildcard.Card.find();
  }
  // setupController: function(controller, card) {
  //   // this._super(controller, card);
  //   this.controllerFor('map').set('content', card);
  // },
  // renderTemplate: function() {
  //   this.render('map');
  // }
});
