angular.module('shoppa', [
  'ngRoute',
  'ngResource',
  'catalog'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './products-catalog/products-catalog.html',
      controller: 'ProductsController as ProductsCtrl'
    })
    .when('/about', {
      template: '<h1>This is the about page, i suffered from cache</h1>',
      controller: 'ProductsController as ProductsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  
  $locationProvider.hashPrefix('!');
});