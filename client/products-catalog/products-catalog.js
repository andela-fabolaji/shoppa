angular.module('catalog', [])
  .controller('ProductsController', [function($scope) {

    this.products = products;

    this.getNumProducts = function() {
      return products.length;
    };
  }]);