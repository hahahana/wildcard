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
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require wildcard
Wildcard = Ember.Application.create();

Wildcard.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create()
});

Wildcard.initMap = function () {
  var myOptions = {
    center: new google.maps.LatLng(29.75002,-95.371718),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  Wildcard.map = new google.maps.Map($("#map_canvas")[0],
      myOptions);
};

Wildcard.ready = function () {
  Wildcard.initMap();
};