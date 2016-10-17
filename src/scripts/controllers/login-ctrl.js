( () => {
	'use strict'


	const signCtrl = ( $scope, $http ) => {

		function setup () {
			$scope.user = {}
		}

		$scope.signin = () =>{
			const data = {
				"email": $scope.user.mail,
				"password": $scope.user.pass
			}

			$http({
				method: 'POST',
				url: '/login',
				data: data
			}).then(function successCallback(response) {
				console.log(response)
			}, function errorCallback(response) {
				console.log(response)
			})



		}

		$scope.singup = () =>{
			const data = {
				"name": $scope.user.name,
				"lastName": $scope.user.lastName,
				"email": $scope.user.mail2,
				"password": $scope.user.pass2
			}

			$http({
				method: 'POST',
				url: '/signup',
				data: data
			}).then(function successCallback(response) {
				console.log(response)
			}, function errorCallback(response) {
				console.log(response)
			})
		}


		setup()
	}


    angular.module( 'socketChat.controllers' )
		.controller( 'signCtrl', signCtrl )
} )()
