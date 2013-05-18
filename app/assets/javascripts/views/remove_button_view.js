Wildcard.RemoveButtonView = Ember.View.extend({
  tagName: 'button',
  click: function () {
    var card = this.get('content');
    var transaction = card.get('transaction');
    card.deleteRecord();
    transaction.commit();
  }
});
