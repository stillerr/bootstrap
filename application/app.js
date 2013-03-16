
require.config({
	baseUrl: '',
	paths: {
		jquery: 'js/jquery/jquery-min',
		underscore: 'js/underscore/underscore-min',
		backbone: 'js/backbone/backbone-min',
		text: 'js/require/text',
		bootstrap: 'js/bootstrap/bootstrap.min',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: '$.fn.popover'
		},
	},
});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*path': 'defaultAction'
		}
	});

	var initialize = function() {

		var router = new AppRouter();

		router.on('route:defaultAction', function(path) {

			if(jQuery.trim(path) == '') {
				path = 'main/index';
			}

			require(['application/' + path], function(AppView) {
				alert(1);
				var app = new AppView();
				app.render();
			});
		});

		Backbone.history.start();
	};
	
	initialize();

});