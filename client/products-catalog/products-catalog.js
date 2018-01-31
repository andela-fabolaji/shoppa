angular.module('products-catalog', [])
  .controller('ProductsCatalogController', ['$http', function($http) {
    var catalog = this;

    catalog.products = products;

    $http.get('/shops')
      .then(res => {
        console.log(res);
      });
  }]);