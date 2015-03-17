(function(){
  'use strict';

  var controllerId = 'CartController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, CartController );

  CartController.$inject = [ '$q', '$state', 'CartService' ];

  function CartController( $q, $state, CartService ){
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
      // promises should be an array of function calls i.e. [getItems(),getPreferences()]
      var promises = [ getCart() ];

      return $q.all( promises )
        .then( function(){
          console.log( 'Cart View Loaded' );
        }
      );
    }

    function getCart(){
      vm.cart = CartService.getCart();
    }

    function updateQuantity( cartIndex, quantity ){
      CartService.updateQuantity( cartIndex, quantity );
    }

    function removeItem( cartIndex ){
      CartService.removeItem( cartIndex );
      getCart();
    }

    function emptyCart(){
      CartService.emptyCart();
      getCart();
    }

    function checkout(){
      //CartService.checkout();
      $state.go( 'checkout.profile' );
    }

  }
})();
