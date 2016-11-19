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
});
