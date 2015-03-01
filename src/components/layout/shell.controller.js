(function(){
  'use strict';

  angular
    .module( 'app.layout' )
    .controller( 'ShellController', ShellController );

  ShellController.$inject = [ '$timeout' ];
  /* @ngInject */
  function ShellController( $timeout ){
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    //vm.isBusy = true;
    //
    //$scope.$on( '$viewContentLoaded',
    //  function( event ){
    //    //vm.isBusy = false;
    //    console.log( 'loaded' );
    //  } );
    //$scope.$on( '$viewContentLoading',
    //  function( event ){
    //    vm.isBusy = true;
    //    console.log( 'loading' );
    //  } );
    activate();

    function activate(){

      hideSplash();
    }

    function hideSplash(){
      //Force a 1 second delay so we can see the splash.
      $timeout( function(){
        vm.showSplash = false;
      }, 1000 );
    }
  }
})();
