define([
		'jquery', 
		'backbone',
		'underscore'], 
function($, Backbone, _){

	return Backbone.View.extend({

		"super" : Backbone.View.prototype,
		"name" : 'basicModelView',

		initialize: function(){
			if(this.model)
				this.model.view = this;
		},
		_renderTemplate : function(){
			if(!this.template)
				return '';

			return _.template(this.template, this.model.toJSON());
		},
		render: function(){
			this.$el.html(this._renderTemplate());

			return this;
		}
	});
});
