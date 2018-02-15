angular.module('home', [])
  .controller('HomeController', ['AuthFactory' ,'$window', function($window, AuthFactory) {
    const home = this;

    console.log(AuthFactory.start());
  }]);