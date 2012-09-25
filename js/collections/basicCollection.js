define([
	'jquery',
	'backbone',
	'underscore',
	'views/basicView'
], function($, Backbone, _, BasicCollectionView){

	return Backbone.Collection.extend({
		defaults : {
			"name" : 'basicCollection',
			"super" : Backbone.Collection.prototype
		},

		initialize : function(){
			return this
					._addView()
					._bindEventHandlers();
		},

		_addView : function(){
			if(!this.view)
				this.view = new BasicCollectionView({
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
