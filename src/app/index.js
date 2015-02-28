(function(){
  'use strict';

  angular.module( 'app',
    [
      /* Angular modules*/
      'ngAnimate',
      //'ngCookies',
      'ngTouch',
      'ngSanitize',
      /* Third Party modules*/
      'ui.router',
      'ui.bootstrap',
      'angularLocalStorage',
      /* app specific modules*/
      'app.services.item',
      'app.services.cart'
    ] )
    .config( function( $stateProvider, $urlRouterProvider ){
      $stateProvider
        .state( 'home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        } )
        .state( 'items', {
          url: '/items',
          templateUrl: 'app/items/items.html',
          controller: 'ItemsController',
          controllerAs: 'vm'
        } )
        .state( 'item', {
          url: '/item/:id',
          templateUrl: 'app/items/items.html',
          controller: 'ItemsController',
          controllerAs: 'vm'
        } );
      $urlRouterProvider.otherwise( '/' );
    } );
})();
