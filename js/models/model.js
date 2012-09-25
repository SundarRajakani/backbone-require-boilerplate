define([
	'jquery',
	'backbone',
	'underscore',
	'models/basicModel',
	'views/view'
], function($, Backbone, _, BasicModel, View){

	return BasicModel.extend({
		defaults : {
			"name" : 'my model',
			"super" : BasicModel.prototype
		},

		initialize : function(){

			// super constructor
			this.get('super').initialize.apply(this, arguments);

			// any initialization code specific for this model goes here
		},

		_addView : function(){
			this.view = new View({
				model : this
			});

			return this;
		},

		_bindEventHandlers : function(){

			// super method
			this.get('super')._bindEventHandlers.apply(this, arguments);


			this.on('change:name', function(oldName, newName, model){
				console.log('change name:', arguments);
			}, this);
		}
	});
});
