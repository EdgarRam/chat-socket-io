( () => {
	'use strict';


	function signCtrl ( $scope ) {
		function setup () {}

		$scope.login = function(){
			alert("nooo")
		}




		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'signCtrl', signCtrl )
} )()
