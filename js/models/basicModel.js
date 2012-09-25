define([
	'jquery',
	'backbone',
	'underscore',
	'views/basicModelView'
], function($, Backbone, _, BasicModelView){

	return Backbone.Model.extend({
		defaults : {
			"name" : 'model',
			"super" : Backbone.Model.prototype
		},

		initialize : function(){
			return this
					._addView()
					._bindEventHandlers();
		},

		_addView : function(){
			if(!this.view)
				this.view = new BasicModelView({
					model : this
				});

			return this;
		},

		_bindEventHandlers : function(){
			this.on('change', this.redraw, this);

			return this;
		},

		redraw : function(){
			if(this.view)
				this.view.render();

			return this;
		}
	});
});
