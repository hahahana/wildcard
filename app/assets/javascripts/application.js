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



// var App = Em.Application.create();

// App.ApplicationController = Ember.Controller.extend({
//   contentBinding: 'App.markers',
//   selectionBinding: 'App.markers.selection'
// });
// App.ApplicationView = Ember.View.extend({
//   templateName: 'application'
// });

// App.Router = Ember.Router.extend({
//   root: Ember.Route.extend({
//     index: Ember.Route.extend({
//       route: '/'
//     })
//   })
// })

// App.initMap = function () {
//   var myOptions = {
//     center: new google.maps.LatLng(37.871667, -122.272778),
//     zoom: 13,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   App.map = new google.maps.Map($("#map_canvas")[0],
//       myOptions);
//   google.maps.event.addListener(App.map, 'click', function(event){
//     App.mapController.handleClick(event);
//   });
// };

// App.MarkerListItemView = Em.View.extend({
//   tagName: 'tr',
//   classNameBindings: ['isSelected'],
//   isSelected: function () {
//     return (this.get('content') === App.markers.get('selection'));
//   }.property('App.markers.selection'),
//   click: function () {
//     App.markers.set('selection', this.get('content'));
//   }
// });

// App.markers = Em.ArrayProxy.create({
//   content: []
// });

// App.RemoveButtonView = Ember.View.extend({
//   tagName: 'button',
//   click: function () {
//     this.get('content').removeFromMap();
//     this.set('content', null);
//   }
// });

// App.MarkerDetailView = Ember.View.extend({
//   contentBinding: 'App.markers.selection'
// });

// App.Marker = Ember.Object.extend({
//   latLng: null,
//   latitude: function () {return this.latLng.lat()}.property('latLng'),
//   longitude: function () {return this.latLng.lng()}.property('latLng'),
//   removeFromMap: function () {
//     i = App.markers.get('content').indexOf(this);
//     App.markers.removeAt(i);
//   },
//   markerClick: function () {
//     App.markers.set('selection', this);
//   }
// });

// App.mapController = Em.Object.create({
//   markersForMapBinding: "App.markers.content",
//   markersDisplayed: [],
//   handleClick: function (x) {
//     this.markersForMap.pushObject( App.Marker.create({latLng: x.latLng}) );
//   },
//   markersForMapDidChange: function () {
//     var that = this;
//     $.each(this.markersDisplayed, function (i, m) {m.setMap(null);});
//     $.each(this.markersForMap, function  (i, ll) {
//       var marker = new google.maps.Marker({
//         position: ll.get('latLng')
//       });
//       ll.marker = marker;
//       google.maps.event.addListener(marker, 'click', function() {
//         ll.markerClick();
//       });
//       that.markersDisplayed.pushObject(marker);
//       marker.setMap(App.map);
//       ll.markerClick();
//     });
//   }.observes('markersForMap.@each')
// });

// App.ListView = Em.View.extend({
//   contentBinding: "App.markers.content"
// });

// App.ready = function () {
//   App.initMap();
// };

// App.initialize();

