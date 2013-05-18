Wildcard.User = DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  provider: DS.attr('string'),
  uid: DS.attr('string')
});
