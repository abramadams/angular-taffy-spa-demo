(function(){
  'use strict';

  angular
    .module( 'app.layout' )
    .controller( 'NavbarController', NavbarController );

  NavbarController.$inject = [ '$location' ];
  /* @ngInject */
  function NavbarController( $location ){
    var vm = this;

    vm.isCurrent = isCurrent;

    activate();

    function activate(){ }

    function isCurrent( route ){
      return $location.$$path == route ? 'active' : '';
    }
  }
})();
