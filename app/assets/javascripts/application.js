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
