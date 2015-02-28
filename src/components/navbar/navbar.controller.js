(function(){
  'use strict';

  angular.module( 'app' )
    .controller( 'NavbarCtrl', function( $scope ){
      var vm = this;
      vm.date = new Date();
    } );
})();
