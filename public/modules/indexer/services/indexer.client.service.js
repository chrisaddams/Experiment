'use strict';

//Articles service used for communicating with the indexer REST endpoints
angular.module('indexer').factory('indexer', ['$resource',
	function($resource) {
		return $resource('/indexer', {
			update: {
				method: 'GET'
			}
		});
	}
]);
