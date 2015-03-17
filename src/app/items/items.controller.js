(function(){
  'use strict';

  var controllerId = 'ItemsController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, ItemsController );

  ItemsController.$inject = [ '$q', '$stateParams', 'ItemService', 'CartService' ];

  function ItemsController( $q, $stateParams, ItemService, CartService ){
    // initialize the cart (will either pull existing cart from cookie or create a new one)
    CartService.init( 'devObjectiveDemo' );

    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.
    vm.items = [];
    vm.addButtonText = "Add to Cart";
    // grab the index of the current item = if exists
    vm.cartIndex = CartService.getItemIndex( $stateParams.id );
    vm.addToCart = addToCart;

    //Activate the view (basically call all the services and log it)
    activate();

    function activate(){
      // promises should be an array of function calls i.e. [getBulls(),getPreferences()]
      var promises = [ getItems( $stateParams.id ) ];

      return $q.all( promises )
        .then( function(){
          console.log( 'Items View Loaded' );
        }
      );
    }

    function getItems( itemId ){
      var defaultItem = {
        linkId: itemId,
        name: "",
        description: "",
        price: "0",
        quantity: 1,
        image: "",
        thumbnail: ""
      };
      if( itemId ){
        return ItemService.getItem( itemId ).then( function( data ){
          vm.items = $.extend( {}, defaultItem, data[ 0 ] );
          return vm.items;
        } );
      }
      return ItemService.getItems().then( function( data ){
        vm.items = data;
        return vm.items;
      } );
    }

    function addToCart(){

      if( vm.cartIndex !== undefined ){
        CartService.updateQuantity( vm.cartIndex, parseInt( vm.items.quantity, 10 ) );
      }else{
        vm.cartIndex = CartService.addItem( vm.items, parseInt( vm.items.quantity, 10 ) );
      }
      vm.items = CartService.getItem( vm.cartIndex );
      vm.addButtonText = "Update Cart";

    }
  }
})();
