angular.module('shoppa', [])
  .controller('ShopController', function() {
    var shop = this;
    
    shop.products = [
      {
        name: 'Addidas Sneakers',
        desc: 'Addidas sneakers is one of the finest sporties out there today',
        price: 120,
        soldOut: false
      }
    ];

    shop.getNumProducts = function() {
      return shop.products.length;
    }
  });