define([
		'jquery', 
		'backbone',
		'underscore'], 
function($, Backbone, _){

	return Backbone.View.extend({
		
		"name" : 'basicCollectionView',
		"super" : Backbone.View.prototype,

		initialize: function(){
			if(this.collection)
				this.collection.view = this;
		},

		render: function(){

			// redraw each model in the collection
			this.collection.forEach(function(el, i){
				el.redraw();
			});

			return this;
		}
	});
});
