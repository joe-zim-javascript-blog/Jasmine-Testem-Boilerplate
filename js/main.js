require(
	['app', 'backbone'],
	function(App, Backbone) {

		App.addInitializer(function(options) {
			Backbone.history.start();
		});

		App.start();
		
	}
);