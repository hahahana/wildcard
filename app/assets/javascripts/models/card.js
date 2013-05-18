Wildcard.Card = DS.Model.extend({
  tag: DS.attr('string'),
  message: DS.attr('string'),
  location: DS.attr('coordinatePoint'),

  latitude: function() {
    return this.get('location.lat');
  }.property('coordinates'),

  longitude: function() {
    return this.get('location.lng');
  }.property('coordinates'),

  latLng: function() {
    return new google.maps.LatLng(this.get('location.lat'), this.get('location.lng'));
  }.property('location'),

  updatedAt: DS.attr('date'),

  // removeFromMap: function () {
  //   i = App.markers.get('content').indexOf(this);
  //   App.markers.removeAt(i);
  // },
  // markerClick: function () {
  //   App.markers.set('selection', this);
  // }
});
