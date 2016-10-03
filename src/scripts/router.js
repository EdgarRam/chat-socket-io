( () => {
    'use strict';


    const RouteConfig = ( $stateProvider, $urlRouterProvider ) => {


        $urlRouterProvider.otherwise( '/app/start' )


        $stateProvider
            .state( 'start', {
                url: '/app/start',
                templateUrl: 'partials/login.html',
            } )


    }


    angular.module( 'socketChat' )
    .config( RouteConfig )



} )()
