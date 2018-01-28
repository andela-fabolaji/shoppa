angular.module('catalog', [])
  .controller('ProductsController', ['$scope', '$http', function($scope, $http) {

    this.products = products;

    $http.get('/shop')
      .then(res => {
        console.log(res);
      });

    this.getNumProducts = function() {
      return products.length;
    };
  }]);