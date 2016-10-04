( () => {
	'use strict';


	function mainCtrl ( $scope, $state, socketIoSrv ) {

		function setup () {
            socketIoSrv.emit( 'getUser' )
		}


		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'mainCtrl', mainCtrl )
} )()
