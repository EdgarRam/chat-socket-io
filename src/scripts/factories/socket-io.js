( () => {
    'use strict';



    function socketIoSrv ( $state, $rootScope ) {



        var api = {};
        var socket = io.connect();


        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data )
            }
        };



    }



    angular.module( 'socketChat.services' )
        .factory( 'socketIoSrv', socketIoSrv );



})()
