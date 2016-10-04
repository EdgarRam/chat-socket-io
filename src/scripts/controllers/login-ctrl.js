( () => {
	'use strict';


	function signCtrl ( $scope, $state, socketIoSrv ) {

		function setup () {
			socketIoSrv.on( 'chat', () => $state.go('chat') );
		}

		$scope.login = () =>{
			socketIoSrv.emit( 'adduser' , 'edgar')
		}

		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'signCtrl', signCtrl )
} )()
