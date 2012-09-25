define([
	'jquery', 
	'backbone', 
	'underscore', 
	'models/model'
], function($, Backbone, _, mainModel, mainView){
	
	return Backbone.Router.extend({

		initialize: function(config){

			this.config = $.extend({}, config);

			this.mainModel = new mainModel({
				message : 'hey!'
			});


			// rule that redirects home, index.html, index.htm, index.php, index 
			// to the home route : '/'
			this.route(/^\/?(home|index)(\.(html?|php))?$/, 'redirectTohome');


			
		},

		routes: {
			// home
			'' : 'home',

			// shout
			'shout' : 'shout',
			'shout/' : 'shout',
			'shout/:msg' : 'shout',

			// 404
			':anythingElse' : '404'
		},

		redirectTohome : function(){
			this.navigate('', {trigger : true, replace :  true});
		},

		home : function(something){
			this.mainModel.view.render();
		},

		shout : function(msg){
			this.mainModel.set('message', msg || 'I\'m shouting!');
		},

		404 : function(){
			alert('page does not exist');
		}
	});
});
