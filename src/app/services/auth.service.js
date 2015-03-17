( function(){
  'use strict';
  angular.module( 'app.services.auth', [ 'angularLocalStorage' ] )

    .factory( 'Auth', [
      '$http', '$rootScope', 'Storage', 'Device', 'constants',
      function( $http, $rootScope, storage, Device, constants ){
        var userRoles = constants.USER_ROLES,
            accessLevels = constants.ACCESS_LEVELS,
            currentUser = storage.get( 'user' );

        if( currentUser === null ){
          currentUser = {
            username: '',
            role: userRoles.public
          };
        }
        $rootScope.user = currentUser;
        $rootScope.accessLevels = accessLevels;
        $rootScope.userRoles = userRoles;

        function changeUser( user ){
          angular.extend( currentUser, user );
          storage.set( 'user', user );
        }

        return {
          authorize: function( accessLevel, role ){
            if( role === undefined ){
              role = currentUser.role;
            }

            return accessLevel & role;
          },
          isLoggedIn: function( user ){
            if( user === undefined ){
              user = $rootScope.user || storage.get( 'user' );
            }
            if( user === null ){
              return false;
            }
            return user.role === userRoles.user || user.role === userRoles.admin;
          },
          register: function( user, success, error ){
            Device.getToken();
            var promise = $http.post( '/api/index.cfm/register', {
              "user": user
            } )
              .success( function( res ){
                changeUser( res );
                return res;
              } )
              .error( function( error ){
                return error;
              } );
            return promise;
          },
          activate: function( activationKey, success, error ){
            $http.post( '/api/index.cfm/activate', activationKey )
              .success( function( res ){
                $rootScope.user = storage.get( 'user' );
                success();
              } )
              .error( error );
          },
          valiateToken: function( token, eventKey, success, error ){
            $http.post( '/api/index.cfm/valiateToken', {
              token: token,
              eventKey: eventKey
            } )
              .success( function( user ){
                changeUser( user );
                success( user );
              } )
              .error( error );
          },
          login: function( user ){
            var promise = $http.post( '/api/index.cfm/login', {
              username: user.username,
              password: user.password,
              token: Device.getToken(),
              eventKey: user.eventKey
            } )
              .success( function( data, status, headers, config ){

                if( data.isLoggedIn !== false ){
                  changeUser( data );
                }

                return data;
              } )
              .error( function( data, status, headers, config ){
                return data;
              } );
            return promise;
          },
          logout: function( success, error ){
            storage.remove( 'user' );
            storage.remove( 'token' );
            changeUser( {
              username: '',
              role: userRoles.public,
              eventKey: ''
            } );

            return false;
            // $http.post( '/api/index.cfm/logout' )
            //     .success( function() {
            //         changeUser( {
            //             username: '',
            //             role: userRoles.public,
            //             eventKey: ''
            //         } );
            //         success();
            //     } )
            //     .error( error );
          },
          accessLevels: accessLevels,
          userRoles: userRoles,
          user: currentUser
        };

      }
    ] );
} ).call( this );

