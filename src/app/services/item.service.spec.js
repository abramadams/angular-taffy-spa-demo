/**
 * @module test.app
 * @name itemService
 * @description
 * Tests for itemService under app
 * _Enter the test description._
 * */


describe( 'Service: app.core', function(){

  // load the service's module
  beforeEach( module( 'app.core' ) );

  // instantiate service
  var service;

  //update the injection
  beforeEach( inject( function( itemService ){
    service = itemService;
  } ) );

  /**
   * @description
   * Sample test case to check if the service is injected properly
   * */
  it( 'should be injected and defined', function(){
    expect( service ).toBeDefined();
  } );
} );
