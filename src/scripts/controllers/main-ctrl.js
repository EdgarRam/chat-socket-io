( () => {
	'use strict';


	function mainCtrl ( $scope ) {

		function setup () {
            $scope.model = {}
		}


		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'mainCtrl', mainCtrl )
} )()
