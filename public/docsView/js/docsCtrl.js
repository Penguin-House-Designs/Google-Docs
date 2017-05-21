app.controller('DocHomeController', ['$scope','GoogleService', function($scope,GoogleService){
	$scope.test = 'TEST'
	$scope.templatePics = GoogleService.docsTemplates;
	console.log($scope.docsStuff);
}]);
