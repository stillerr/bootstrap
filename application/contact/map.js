define([
	'jquery',
	'underscore',
	'backbone',	
	'text!application/contact/map.html'
], function($, _, Backbone, template) {

	var Page = Backbone.View.extend({
		el: '#content',
		render: function () {
			$(this.el).html(template);
		}
	});

	return Page;

});
