(function(){
  'use strict';

  var controllerId = 'CartController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, CartController );

  CartController.$inject = [ '$q', '$state', 'cartService' ];

  function CartController( $q, $state, cartService ){
    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.
    vm.cart = [];

    vm.updateQuantity = updateQuantity;
    vm.removeItem = removeItem;
    vm.checkout = checkout;
    vm.emptyCart = emptyCart;

    //Activate the view (basically call all the services and log it)
    activate();

    function activate(){
      // promises should be an array of function calls i.e. [getBulls(),getPreferences()]
      var promises = [ getCart() ];

      return $q.all( promises )
        .then( function(){
          console.log( 'Cart View Loaded' );
        }
      );
    }

    function getCart(){
      vm.cart = cartService.getCart();
    }

    function updateQuantity( cartIndex, quantity ){
      cartService.updateQuantity( cartIndex, quantity );
    }

    function removeItem( cartIndex ){
      cartService.removeItem( cartIndex );
      getCart();
    }

    function emptyCart(){
      cartService.emptyCart();
      getCart();
    }

    function checkout(){
      //cartService.checkout();
      $state.go( 'checkout.profile' );
    }

  }
})();
