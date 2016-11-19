angular.module("dowhile",[])

.controller('portafolio', function($scope, $http){
	$http({
		method: "GET",
		url: "http://dowhile.cl:4000/api/website"
	}).then(function(response){
		console.log(response.data.website);
		$scope.websites = response.data.website;


	}, function(err){

		console.log(err);

	});
})

.controller('about', function($scope, $http){
	$http({
		method: "GET",
		url: "http://localhost:4000/api/about"
	}).then(function(response){
		console.log(response.data.about);
		$scope.about = response.data.about;


	}, function(err){

		console.log(err);

	});
})

.controller('header', function($scope, $http){
	$http({
		method: "GET",
		url: "http://localhost:4000/api/header"
	}).then(function(response){
		console.log(response.data.header);
		$scope.header = response.data.header;


	}, function(err){

		console.log(err);

	});
});
