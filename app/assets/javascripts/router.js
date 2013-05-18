Wildcard.Router.reopen({
  location: "history"
});

Wildcard.Router.map(function(match) {
  this.route("index", {path: "/"});
});
