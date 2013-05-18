Wildcard.Router.reopen({
  location: "history"
});

Wildcard.Router.map(function(match) {
  this.route("map", {path: "/"});
  // this.resource("cards");
});
