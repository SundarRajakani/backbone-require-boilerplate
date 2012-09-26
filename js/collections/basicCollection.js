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
                        // only redraw the big picture if the collection has changed
			// if a collection's item has changed, it will update it's own view
			this.on('add remove', this.redraw, this);

			return this;
		},

		redraw : function(){
			if(this.view)
				this.view.render();

			return this;
		}
	});
});
