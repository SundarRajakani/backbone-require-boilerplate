define([
		'jquery', 
		'backbone',
		'underscore',
		'views/basicModelView',
		'text!templates/main.html'], 
function($, Backbone, _, BasicModelView, template){

	return BasicModelView.extend({
		"name" : 'view',
		"super" : BasicModelView.prototype,
		"el": '#main',
		"template" : template
	});
});
