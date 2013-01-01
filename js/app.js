define(
	['marionette'],
	function(Marionette) {

		App = Marionette.Application.extend({
			// Right now it's just a standard app.
			// This is just here to make it easier to start extending right away if we need it.
		});

		window.App = new App();

		return window.App;

	}
);