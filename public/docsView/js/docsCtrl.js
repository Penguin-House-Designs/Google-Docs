GoogleApps.controller('DocHomeController', ['$scope','GoogleService', function($scope,GoogleService){
	$scope.test = 'TEST'
	$scope.templatePics = GoogleService.docsTemplates;


//Fxns for Sorting
	$scope.owned = "Owned by me";

	$scope.dropDownMessage = function(){
		$scope.owned = "Owned by anyone"
	}

	$scope.dropDownMessage2 = function(){
		$scope.owned = "Owned by me"
	}

	$scope.dropDownMessage3 = function(){
		$scope.owned = "Not owned by me"
	}




}]);
