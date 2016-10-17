( () => {
    'use strict';


    angular.module( 'socketChat.controllers', [] );
    angular.module( 'socketChat.services', [] );
    angular.module( 'socketChat.provider', [] );


    angular.module( 'socketChat',  [
        'ui.router',
        'ui.bootstrap',

        'socketChat.controllers',
        'socketChat.services',
        'socketChat.provider'
    ] )


})()
