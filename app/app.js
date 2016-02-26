var app = angular.module('app', [
	'ngRoute',
	'shopControllers'
]);

app.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'
	}).when('/users/', {
		templateUrl: '/views/users.html',
		controller: 'UsersCtrl'
	}).when('/products/', {
		templateUrl: '/views/products.html',
		controller: 'ProductsCtrl'
	}).when('/admin/', {
		templateUrl: '/views/admin.html',
		controller: 'AdminCtrl'
	}).when('/content/', {
		templateUrl: '/views/posts.html',
		controller: 'PostsCtrl'
	}).otherwise({ redirectTo: '/' });

});
