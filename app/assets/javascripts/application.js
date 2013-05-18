// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap/js/bootstrap
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require wildcard
//= require fullcalendar/fullcalendar.min
//= require pnotify/jquery.pnotify.min
//= require jasny/bootstrap-fileupload
//= require jasny/bootstrap-inputmask
//= require jasny/bootstrap-typeahead
//= require justgage/justgage.1.0.1
//= require justgage/raphael.2.1.0.min 
//= require flot/jquery.flot
//= require flot/excanvas
//= require flot/jquery.flot.pie
//= require flot/jquery.flot.stack
//= require responsive-tables
//= require jquery.sparkline
//= require bootstrap-slider
//= require icheckdemo
//= require charts
//= require date
//= require daterangepicker   
//= require jquery.icheck    
//= require wizard
//= require jquery-ui-1.10.2.custom.min
//= require wysihtml5-0.3.0
//= require bootstrap-wysihtml5
//= require prettyprint
//= require jquery.spellchecker
//= require parsley
//= require jquery.masonry.min
//= require custom


Wildcard = Ember.Application.create({
  rootElement: "#wildcard_holder"
});

Wildcard.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create()
});

DS.RESTAdapter.registerTransform('coordinatePoint', {
  serialize: function(value) {
    // return {
    //   latitude: value.get('latitude'),
    //   longitude: value.get('longitude')
    // };
    return [value.latitude, value.longitude];
  },
  deserialize: function(value) {
    return Ember.create({ latitude: value[0], longitude: value[1] });
    // return Ember.create({lattitude: value.latitude, longitude: value.longitude});
  }
});

Canvas = Ember.Application.create({
  rootElement: "#map_canvas"
});

Canvas.initMap = function () {
  var myOptions = {
    center: new google.maps.LatLng(29.75002,-95.371718),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  Canvas.map = new google.maps.Map($("#map_canvas")[0],
      myOptions);
};

Canvas.ready = function () {
  Canvas.initMap();
};
