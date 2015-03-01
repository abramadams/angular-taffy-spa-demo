(function(){
  'use strict';

  angular.module( 'app',
    [
      'app.core', // cross site shared modules

      /* app specific modules*/
      'app.layout',
      'app.services.item',
      'app.services.cart'
    ] )
    .config( function( $stateProvider, $urlRouterProvider, $locationProvider ){
      //$locationProvider.html5Mode( true );
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
        .state( 'items.item', {
          url: '/item/:id',
          templateUrl: 'app/items/items.html',
          controller: 'ItemsController',
          controllerAs: 'vm'
        } )
        .state( 'cart', {
          url: '/cart',
          templateUrl: 'app/cart/cart.html',
          controller: 'CartController',
          controllerAs: 'vm'
        } );
      $urlRouterProvider.otherwise( '/' );

    } ).run( [ '$state', '$stateParams',
               function( $state, $stateParams ){
                 //this solves page refresh and getting back to state
               } ] );
})();
