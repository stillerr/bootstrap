define([
	TXT_PATH + '!' + APP_PATH + '/404.html'
], function(pageTemplate) {
	var Page = Backbone.View.extend({
		el: '#content',
		render: function () {
			$(this.el).html(pageTemplate);
		}
	});
	return Page;
});
