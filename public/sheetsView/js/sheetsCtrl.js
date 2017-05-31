GoogleApps.controller('sheetsCtrl', function ($scope, $state, sheetsSrvc) {
	$scope.test = 'TEST'
	$scope.templatePics = sheetsSrvc.sheetsTemplates;

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
		};

		$scope.sheetsDocus = sheetsSrvc.sheetsDocuments;

})
