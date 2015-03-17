(function(){
  'use strict';

  var controllerId = 'SignInController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, SignInController );

  SignInController.$inject = [ '$q' ];

  function SignInController( $q ){
    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.

    //Activate the view (basically call all the services and log it)
    activate();

    function activate(){
      // promises should be an array of function calls i.e. [getBulls(),getPreferences()]
      var promises = [];

      return $q.all( promises )
        .then( function(){
          console.log( 'Sign In View Loaded' );
        }
      );
    }
  }
})();
