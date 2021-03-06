require.config({

	deps: ["main"],

	paths: {
		// Libraries.
		jquery: "lib/jquery",								// has AMD built in
		underscore: "lib/lodash",							// has AMD built in (underscore doesn't but lodash does)
		backbone: "lib/backbone",							// shimmed below
		marionette: "lib/backbone.marionette",				// has AMD built in
		// Marionette's extra dependencies
		"backbone.babysitter": "lib/backbone.babysitter",	// has AMD built in
		"backbone.eventbinder": "lib/backbone.eventbinder",	// has AMD built in
		"backbone.wreqr": "lib/backbone.wreqr",				// has AMD built in
		// RequireJS Plugins
		tpl: "lib/require.tpl",								// RequireJS plugin. No need to shim.
		// jQuery ParseUrl Plugin
		bootstrap: "lib/bootstrap"							// shimmed below
	},

	shim: {
		// Backbone library depends on lodash and jQuery.
		'backbone': {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},

		// Multiple jQuery plugins. Do not export anything specific. It's all exposed through `$`
		'bootstrap': ['jquery']
	}

});