app.controller('DocHomeController', ['$scope','GoogleService', function($scope,GoogleService){
	$scope.test = 'TEST'
	$scope.docsStuff = GoogleService.docsTemplates;
	console.log($scope.docsStuff);
}]);
