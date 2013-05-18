Wildcard.CardMapView = Ember.View.extend({
  // templateName: 'map',
  map: null,
  // latitudeBinding: 'controller.content.latitude',
  // longitudeBinding: 'controller.content.longitude',
  didInsertElement: function (something) {
    var controller = this.get('controller');
    var mapOptions = {
      center: new google.maps.LatLng(this.get('controller.latitude'), this.get('controller.longitude')),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.$().css({ width: "100%", height: "800px" });
    var map = new google.maps.Map(this.$().get(0), mapOptions);
    google.maps.event.addListener(map, 'click', function(event){
      controller.handleClick(event);
      if ($('#cards').css('height') === '0px') {
        $('a[href$="#cards"]').click();
      }
    });
    this.set('map', map); //save for future updations
    this.renderPoints();
  },
  reRenderMap: function () {
    if (this.get('map')) {
      var newLoc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
      this.get('map').setCenter(newLoc);
    }
  }.observes('latitude', 'longitude'),

  renderPoints: function () {
    var self = this;
    self.get('controller.content').forEach(function(card, index) {
      var marker = new google.maps.Marker({
        position: card.get('latLng'),
        map: self.get('map')
      });
      // ll.marker = marker;
      google.maps.event.addListener(marker, 'click', function() {
        // ll.markerClick();
        console.log(marker);
      });
      // that.markersDisplayed.pushObject(marker);
      // marker.setMap(this.map);
      // .markerClick();
    });
  }.observes('controller.content.@each')
});
