// This is the main entry point for the App
define([
	'text!config.json', 
	'routers/home'
], function(config, Router){

	var app = {
		config : JSON.parse(config),
		init : function(){
			this.router = new Router(this.config);
			this.history = Backbone.history.start($.extend({}, this.config.history));
		}
	}

	if(app.config.debug)
		window.app = app;

	return app;
});
