Wildcard.DoucheButtonView = Ember.View.extend({
  templateName: 'dbv',
  didInsertElement: function () {
  },
  click: function (evt) {
    var self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var coords = position.coords;
        var tag = self.$('a').attr('title');
        var card = Wildcard.Card.createRecord({
          tag: tag,
          location: {lat: coords.latitude, lng: coords.longitude}
        });
        card.get("transaction").commit();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
});
