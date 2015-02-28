(function(){
  'use strict';

  var controllerId = 'ItemsController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, ItemsController );

  ItemsController.$inject = [ '$scope', '$q', '$stateParams', 'itemService' ];

  function ItemsController( $scope, $q, $stateParams, itemService ){
    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.
    vm.items = [];

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

      if( itemId ){
        return itemService.getItem( itemId ).then( function( data ){
          vm.items = data;
          return vm.items;
        } );
      }
      return itemService.getItems().then( function( data ){
        vm.items = data;
        return vm.items;
      } );

    }

  }
})();
