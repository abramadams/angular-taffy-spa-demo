( function(){
  'use strict';
  angular.module( 'app.services.device', [ 'angularLocalStorage' ] )

    .service( 'Device', [
      '$rootScope', 'storage',

      function( $rootScope, storage ){

        function _createUUID(){
          var d = new Date()
            .getTime();
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function( c ){
            var r = ( d + Math.random() * 16 ) % 16 | 0;
            d = Math.floor( d / 16 );
            return ( c == 'x' ? r : ( r & 0x7 | 0x8 ) )
              .toString( 16 );
          } );

        }

        return {
          setToken: function( token ){
            storage.set( 'token', token );
          },
          getToken: function(){
            var uuid = storage.get( 'token' );
            //This is where you'd query the device for it's Id if you were developing a cordova app.
            if( uuid == null || uuid == "undefined" ){
              this.setToken( _createUUID() );
            }
            return storage.get( 'token' );
          }
        };
      }
    ] );
} ).call( this );
