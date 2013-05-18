Wildcard.MapController = Ember.ArrayController.extend({
  latitude: 29.75002,
  longitude: -95.371718,

  handleClick: function (x) {
    var card = Wildcard.Card.createRecord({
      tag: "test*",
      message: "test",
      location: {lat: x.latLng.lat(), lng: x.latLng.lng()}
    });
    card.get('transaction').commit();
  },
});

