(function(){
  'use strict';

  angular
    .module( 'app.services.item', [] )
    .factory( 'itemService', itemService );

  itemService.$inject = [ '$q' ];
  /* @ngInject */
  function itemService( $q ){
    return {
      getItem: getItem,
      getItems: getItems

    };

    //////////////////////////////
    // Implementation details
    //////////////////////////////
    function getItems(){
      var items = [ {
                      'id': 1,
                      'title': 'AngularJS',
                      'url': 'https://angularjs.org/',
                      'description': 'HTML enhanced for web apps!',
                      'logo': 'angular.png',
                      'price': 0.00
                    },
                    {
                      'id': 2,
                      'title': 'BrowserSync',
                      'url': 'http://browsersync.io/',
                      'description': 'Time-saving synchronised browser testing.',
                      'logo': 'browsersync.png',
                      'price': 0.00
                    },
                    {
                      'id': 3,
                      'title': 'GulpJS',
                      'url': 'http://gulpjs.com/',
                      'description': 'The streaming build system.',
                      'logo': 'gulp.png',
                      'price': 0.00
                    },
                    {
                      'id': 4,
                      'title': 'Jasmine',
                      'url': 'http://jasmine.github.io/',
                      'description': 'Behavior-Driven JavaScript.',
                      'logo': 'jasmine.png',
                      'price': 0.00
                    },
                    {
                      'id': 5,
                      'title': 'Karma',
                      'url': 'http://karma-runner.github.io/',
                      'description': 'Spectacular Test Runner for JavaScript.',
                      'logo': 'karma.png',
                      'price': 0.00
                    },
                    {
                      'id': 6,
                      'title': 'Protractor',
                      'url': 'https://github.com/angular/protractor',
                      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                      'logo': 'protractor.png',
                      'price': 0.00
                    },
                    {
                      'id': 7,
                      'title': 'jQuery',
                      'url': 'http://jquery.com/',
                      'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
                      'logo': 'jquery.jpg',
                      'price': 0.00
                    },
                    {
                      'id': 8,
                      'title': 'Bootstrap',
                      'url': 'http://getbootstrap.com/',
                      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                      'logo': 'bootstrap.png',
                      'price': 0.00
                    },
                    {
                      'id': 9,
                      'title': 'Angular UI Bootstrap',
                      'url': 'http://angular-ui.github.io/bootstrap/',
                      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
                      'logo': 'ui-bootstrap.png',
                      'price': 0.00
                    },
                    {
                      'id': 10,
                      'title': 'Sass (Node)',
                      'url': 'https://github.com/sass/node-sass',
                      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
                      'logo': 'node-sass.png',
                      'price': 0.00
                    } ];
      items.map( function( item ){
        item.rank = Math.random();
      } );
      return $q.when( items );
    }

    function getItem( itemId ){
      var items = getItems().then( function( data ){
        return data.filter( function( item ){
          return item.id == itemId;
        } );
      } );

      return $q.when( items );
    }

  }
})();
