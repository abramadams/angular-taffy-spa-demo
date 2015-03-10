(function(){
  'use strict';

  angular
    .module( 'app.widgets', [] )
    .directive( 'spinner', Spinner );

  function Spinner(){
    var directive = {
      link: link,
      restrict: 'A',
      replace: true,
      scope: {
        item: '=',
        callback: '&'
      },
      templateUrl: 'components/widgets/spinner.html'
    };
    return directive;
    function link( scope, element, attrs ){

      scope.upOne = upOne;
      scope.downOne = downOne;

      // Watch scope and update cart when the value changes
      scope.$watch( 'item.quantity', function(){
        scope.callback();
      }, true );

      function upOne(){
        element.val( scope.item.quantity++ );
      }

      function downOne(){
        if( scope.item.quantity == 0 ) return;
        element.val( scope.item.quantity-- );
      }
    }
  }

})
();
