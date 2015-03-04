'use strict';

// Setting up route
angular.module('indexer').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('indexer', {
			url: '/indexer',
			templateUrl: 'modules/indexer/views/indexer.client.view.html'
		});
	}
]);
