angular.module('app').controller('tpMainCtrl', function($scope){
	$scope.courses = [
	{name: "some crap course", featured: true, published: new Date('1,1,2015')},
	{name: 'some crap course2', featured: false, published: new Date('1,12,2014')},
	{name: 'some crap course3', featured: true, published: true},
	{name: 'some crap course4', featured: true, published: true},
	{name: 'some crap course5', featured: false, published: new Date('1,5,2015')},
	{name: 'some crap course6', featured: true, published: new Date('7,1,2015')},
	{name: 'some crap course7', featured: true, published: true},
	]
});