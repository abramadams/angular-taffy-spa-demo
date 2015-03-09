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
        .state( 'item', {
          url: '/item/:id',
          templateUrl: 'app/items/item.html',
          controller: 'ItemsController',
          controllerAs: 'vm'
        } )
        .state( 'cart', {
          url: '/cart',
          templateUrl: 'app/cart/cart.html',
          controller: 'CartController',
          controllerAs: 'vm'
        } )
        .state( 'checkout', {
          url: '/checkout',
          abstract: true,
          templateUrl: 'app/checkout/checkout.html',
          controller: 'CheckoutController',
          controllerAs: 'vm'
        } )
        .state( 'checkout.profile', {
          url: '',
          templateUrl: 'app/checkout/checkout.profile.html'
        } )
        .state( 'checkout.address', {
          url: '/address',
          templateUrl: 'app/checkout/checkout.address.html'
        } )
        .state( 'checkout.payment', {
          url: '/payment',
          templateUrl: 'app/checkout/checkout.payment.html'
        } );
      $urlRouterProvider.otherwise( '/' );

    } ).run( [ '$rootScope', '$state', '$stateParams', 'cartService',
               function( $rootScope, $state, $stateParams, cartService ){
                 //this solves page refresh and getting back to state
                 //Shopping Cart in header
                 $rootScope.cartName = 'devObjecteveDemo';
                 cartService.init( $rootScope.cartName );
                 $rootScope.itemsInCart = cartService.totalItems();
                 $rootScope.cart = cartService.getCart();
                 $rootScope.cartTotal = cartService.cartTotal();
               } ] );
})();
