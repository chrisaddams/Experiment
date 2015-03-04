'use strict';

/**
 * Module dependencies.
 */
var indexer = require('../../app/controllers/httpindexer.server.controller');

module.exports = function(app) {
	// Article Routes
	app.get('/indexer', function(req, res){
	    res.send('sample response');
	});

	// Finish by binding the article middleware
	//app.param('indexer', indexer.index);
};

