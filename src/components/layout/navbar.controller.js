(function(){
  'use strict';

  angular
    .module( 'app.layout' )
    .controller( 'NavbarController', NavbarController );

  NavbarController.$inject = [ '$location' ];
  /* @ngInject */
  function NavbarController( $location ){
    var vm = this;
    vm.isCollapsed = true;
    vm.siteTitle = "dev.Objective - AngularJS+Taffy Demo";
    activate();

    function activate(){ }

  }
})();
