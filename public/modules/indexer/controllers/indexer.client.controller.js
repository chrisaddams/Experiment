'use strict';

//angular.module('indexer').controller('IndexerController', ['$scope', 'Authentication',
//        function($scope, Authentication) {
//            // This provides Authentication context.
//            $scope.authentication = Authentication;
//        }
//]);

angular.module('indexer')
.controller('IndexerController', ['$scope', '$http', function($scope, request, response) {
    $scope.indexer = 'Hello Test ';
    $scope.index = response;
}]);
