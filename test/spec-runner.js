require.config({

	baseUrl: "../js",

	urlArgs: 'cb=' + Math.random(),

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
		bootstrap: "lib/bootstrap",							// shimmed below

		// Jasmine Testing: Folder Aliases
		spec: "../test/spec",
		helpers: "../test/helpers"
	},

	shim: {
		// Backbone library depends on lodash and jQuery.
		'backbone': {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},

		// Socket.io needs to export its library
		'io': {
			deps: [],
			exports: 'io'
		},

		// Multiple jQuery plugins. Do not export anything specific. It's all exposed through `$`
		'bootstrap': ['jquery']
	}

});



require([], function(){
	var jasmineEnv = jasmine.getEnv();

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);
	
	// Add links to the spec files here
	var specs = [];
	specs.push('spec/example_spec');

	// Execute specs
	require(specs, function(){
		jasmineEnv.execute();
	});
 
});