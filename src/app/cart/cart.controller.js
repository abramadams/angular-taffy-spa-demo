(function(){
  'use strict';

  var controllerId = 'CartController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, CartController );

  CartController.$inject = [ '$scope', '$q', '$stateParams', 'cartService' ];

  function CartController( $scope, $q, $stateParams, cartService ){
    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.
    vm.cart = [];

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

      return cartService.getCart().then( function( data ){
        vm.cart = data;
        console.log( vm.cart );
        return vm.cart;
      } );

    }

  }
})();
