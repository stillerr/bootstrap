define([
	'jquery',
	'underscore',
	'backbone',	
	'text!application/main/index.html'
], function($, _, Backbone, template) {

	var Page = Backbone.View.extend({
		el: '#content',
		render: function () {
			$(this.el).html(template);
		}
	});

	return Page;

});
