( () => {
    'use strict';


    const RouteConfig = ( $stateProvider, $urlRouterProvider ) => {


        $urlRouterProvider.otherwise( '/start' )


        $stateProvider
            .state( 'start', {
                url: '/start',
                templateUrl: 'partials/login.html',
                controller: 'signCtrl'
            } )



            .state( 'chat', {
                url: '/chat',
                templateUrl: 'partials/chat.html',
                controller: 'chatCtrl'
            } )


    }


    angular.module( 'socketChat' )
    .config( RouteConfig )



} )()
