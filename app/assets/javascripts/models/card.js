Wildcard.Card = DS.Model.extend({
  tag: DS.attr('string'),
  message: DS.attr('string'),
  coordinates: DS.attr('coordinatePoint'),
  updatedAt: DS.attr('date')
});
