( () => {
    'use strict';


    angular.module( 'socketChat.controllers', [] );
    angular.module( 'socketChat.services', [] );


    angular.module( 'socketChat',  [
        'ui.router',
        'ngMaterial',
        'socketChat.controllers',
        'socketChat.services'
    ] )


})()
