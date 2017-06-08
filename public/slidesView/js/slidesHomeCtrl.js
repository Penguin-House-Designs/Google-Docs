GoogleApps.controller('slidesHomeCtrl', function ($scope, slidesSrvc) {
$scope.templatePics = slidesSrvc.slidesTemplates;


// console.log('hi');

	$scope.slideDocus = slidesSrvc.slidesDocuments;
	// console.log($scope.slideDocus);

// SLIDES HOME STUFF//////
//Fxns for Sorting
	$scope.owned = "Owned by me";
	$scope.dropDownMessage = () => $scope.owned = "Owned by anyone";
	$scope.dropDownMessage2 = () => $scope.owned = "Owned by me";
	$scope.dropDownMessage3 = () =>$scope.owned = "Not owned by me";

	$scope.selectedPanel = () => {

	}
	$scope.loadSlide = function() {
		console.log('clicked');
		slidesSrvc.loadSlide()
	}
})
