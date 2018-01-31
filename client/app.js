angular.module('shoppa', [
  'ngRoute',
  'ngResource',
  'angularCSS',
  'home',
  'products-catalog'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './home/home.html',
      controller: 'HomeController as HomeCtrl',
      css: './home/home.css'
    })
    .when('/products-catalog', {
      templateUrl: './products-catalog/products-catalog.html',
      controller: 'ProductsCatalogController as CatalogCtrl',
      css: './products-catalog/products-catalog.css'
    })
    .when('/about', {
      template: '<h1>This is the about page, i suffered from cache</h1>',
      controller: 'ProductsCatalogController as CatalogCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  
  $locationProvider.hashPrefix('!');
});