Wildcard.DoucheButtonView = Ember.View.extend({
  templateName: 'dbv',
  // tagName: 'button',
  url: function () {
    return this.get('content.url');
  }.observes('content'),
  didInsertElement: function () {
    console.log(this);
  },
  click: function (evt) {
    var self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var coords = position.coords;
        var tag = self.$().get(0).innerText;
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
