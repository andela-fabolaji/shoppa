angular.module('shoppa', [
  'ngRoute',
  'ngResource',
  'angularCSS',
  'home',
  'products-catalog'
])
.value('CLIENT_ID', '559633011777-sro43h0pgdpf7plh30of69cujdf4p2q4.apps.googleusercontent.com')
.value('SECRET', 'nuLa2kecH7B3o3b3-TvZ6ma6')
.factory('AuthFactory', function($http, CLIENT_ID) {
  return {
    start: function() {
      return gapi;
    },
    googleAuth: function() {
      return $http.get('/shops');
    },
    auth: function(userData) {
      return $http.post('/users', userData);
    }
  };
})
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