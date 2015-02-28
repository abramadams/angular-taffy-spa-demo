(function(){
  'use strict';

  angular.module( 'app.services.cart', [ 'angularLocalStorage' ] )
    .factory( 'cartService', cartService );

  cartService.$inject = [ '$q', '$http', 'storage' ];

  /* @ngInject */
  function cartService( $q, $http, storage ){
    return {
      itemsCookie: [],
      init: init,
      getCart: getCart,
      addItem: addItem,
      removeItem: removeItem,
      getItem: getItem,
      getItemIndex: getItemIndex,
      getItemById: getItemById,
      updateQuantity: updateQuantity,
      totalItems: totalItems,
      totalQuantity: totalQuantity,
      cartTotal: cartTotal,
      emptyCart: emptyCart,
      checkout: checkout

    };

    //////////////////////////////
    // Implementation details
    //////////////////////////////

    function init( itemsCookie ){
      this.itemsCookie = itemsCookie;

      if( !( storage.get( this.itemsCookie ) instanceof Array ) ){
        storage.set( this.itemsCookie, [] );
      }
    }

    function getCart(){
      var cart = storage.get( this.itemsCookie );
      for( var i = 0; i < cart.length; i++ ){
        cart[ i ].quantity = parseInt( cart[ i ].quantity, 10 );
      }
      return cart;
    }

    function addItem( item, quantity ){
      if( quantity === undefined ){
        quantity = 1;
      }
      var items = storage.get( this.itemsCookie );

      items.push( {
        id: item.id,
        name: item.name,
        quantity: parseInt( quantity, 10 ),
        price: parseFloat( item.price ),
        image: item.image,
        description: item.description
      } );

      storage.set( this.itemsCookie, items );

      return items.length - 1;
    }

    function removeItem( index ){
      var items = storage.get( this.itemsCookie );
      items.splice( index, 1 );
      storage.set( this.itemsCookie, items );
    }

    function getItem( index ){
      var items = storage.get( this.itemsCookie );

      items[ index ].quantity = parseInt( items[ index ].quantity, 10 );
      return items[ index ];

    }

    function getItemIndex( itemId ){
      var items = storage.get( this.itemsCookie );

      for( var i = 0; i < items.length; i++ ){

        if( items[ i ].id == itemId ){
          return i;
        }
      }

      return undefined;
    }

    function getItemById( itemId ){
      var items = storage.get( this.itemsCookie ), item = {};

      item = items[ this.getItemIndex( itemId ) ];

      return item || undefined;

    }

    function updateQuantity( index, quantity ){
      var items = storage.get( this.itemsCookie );

      items[ index ].quantity = parseInt( quantity, 10 );
      items[ index ].price = parseFloat( items[ index ].price );
      storage.set( this.itemsCookie, items );
    }

    function totalItems(){
      var items = storage.get( this.itemsCookie ) || [];

      return items.length;
    }

    function totalQuantity(){
      var quantity = 0, items = storage.get( this.itemsCookie ) || [];

      for( var i = 0; i < items.length; i++ ){
        quantity += parseInt( items[ i ].quantity, 10 );
      }

      return quantity;
    }

    function cartTotal(){
      var total = 0, items = storage.get( this.itemsCookie );

      for( var i = 0; i < items.length; i++ ){
        total += parseInt( items[ i ].quantity, 10 ) * parseFloat( items[ i ].price );
      }
      return parseFloat( total );
    }

    function emptyCart(){
      storage.remove( this.itemsCookie );
      storage.set( this.itemsCookie, [] );
    }

    function checkout( customer, eventKey ){
      var self = this;
      var checkout = $http( {
        method: 'post',
        url: 'https://www.fundsforcauses.com/mobileRaise/api/index.cfm/checkout',
        data: {
          cart: {
            items: this.getCart(),
            total: this.cartTotal()
          },
          customer: customer,
          eventKey: eventKey
        }
      } ).success( function( data, status, headers, config ){
        // this callback will be called asynchronously
        // when the response is available
        // self.emptyCart();
        return data;
      } ).error( function( data, status, headers, config ){
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        // alert( status );
        console.log( data, status, headers, config );
        return data;
      } );

      return checkout;

    }

  }
})();
