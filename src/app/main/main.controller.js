(function(){
  'use strict';

  var controllerId = 'MainController';
  //Registers controller with "app"
  angular.module( 'app' )
    .controller( controllerId, MainController );

  MainController.$inject = [ '$scope', '$q' ];

  function MainController( $scope, $q ){
    // hang all "$scope" type stuff off of vm (view model)
    var vm = this;

    // Exports.
    vm.awesomeThings = [];

    //Activate the view (basically call all the services and log it)
    activate();

    function activate(){
      // promises should be an array of function calls i.e. [getBulls(),getPreferences()]
      var promises = [ getAwesomeThings() ];

      return $q.all( promises )
        .then( function(){
          console.log( 'Main View Loaded' );
        }
      );
    }

    function getAwesomeThings(){
      //Should be pulling this from a service
      var awesomeThings = [ {
                              'title': 'AngularJS',
                              'url': 'https://angularjs.org/',
                              'description': 'HTML enhanced for web apps!',
                              'logo': 'angular.png'
                            },
                            {
                              'title': 'BrowserSync',
                              'url': 'http://browsersync.io/',
                              'description': 'Time-saving synchronised browser testing.',
                              'logo': 'browsersync.png'
                            },
                            {
                              'title': 'GulpJS',
                              'url': 'http://gulpjs.com/',
                              'description': 'The streaming build system.',
                              'logo': 'gulp.png'
                            },
                            {
                              'title': 'Jasmine',
                              'url': 'http://jasmine.github.io/',
                              'description': 'Behavior-Driven JavaScript.',
                              'logo': 'jasmine.png'
                            },
                            {
                              'title': 'Karma',
                              'url': 'http://karma-runner.github.io/',
                              'description': 'Spectacular Test Runner for JavaScript.',
                              'logo': 'karma.png'
                            },
                            {
                              'title': 'Protractor',
                              'url': 'https://github.com/angular/protractor',
                              'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                              'logo': 'protractor.png'
                            },
                            {
                              'title': 'jQuery',
                              'url': 'http://jquery.com/',
                              'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
                              'logo': 'jquery.jpg'
                            },
                            {
                              'title': 'Bootstrap',
                              'url': 'http://getbootstrap.com/',
                              'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                              'logo': 'bootstrap.png'
                            },
                            {
                              'title': 'Angular UI Bootstrap',
                              'url': 'http://angular-ui.github.io/bootstrap/',
                              'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
                              'logo': 'ui-bootstrap.png'
                            },
                            {
                              'title': 'Sass (Node)',
                              'url': 'https://github.com/sass/node-sass',
                              'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
                              'logo': 'node-sass.png'
                            } ];
      awesomeThings.map( function( awesomeThing ){
        awesomeThing.rank = Math.random();
      } );
      vm.awesomeThings = awesomeThings;
      return vm.awesomeThings;
    }

  }
})();
