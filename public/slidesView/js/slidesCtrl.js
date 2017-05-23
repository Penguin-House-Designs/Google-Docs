GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.templatePics = slidesSrvc.slidesTemplates;

	//Fxns for Sorting
		$scope.owned = "Owned by me";

		$scope.dropDownMessage = function(){
			$scope.owned = "Owned by anyone"
		};

		$scope.dropDownMessage2 = function(){
			$scope.owned = "Owned by me"
		};

		$scope.dropDownMessage3 = function(){
			$scope.owned = "Not owned by me"
		};

    function htmlString (x){
      return "<h1>" + x + "<h1/>"
    }

    $scope.test = "<h1>" + "hello" + "<h1/>"
})
