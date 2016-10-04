( () => {
	'use strict';


	function chatCtrl ( $scope, socketIoSrv ) {


		const hello = () =>{
			socketIoSrv.on( 'welcome user', ( _msg ) =>{
				console.log( _msg )
			})
		}


		const setup = ()=> {
			hello()

			socketIoSrv.emit( 'init chat' );
			socketIoSrv.on( 'updaterooms', ( _msg ) =>{
				console.log( _msg )
			})


		}


		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'chatCtrl', chatCtrl )
} )()
