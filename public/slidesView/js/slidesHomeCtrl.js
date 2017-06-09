GoogleApps.controller('slidesHomeCtrl', function ($scope, slidesSrvc, sheetsSrvc) {
$scope.templatePics = slidesSrvc.slidesTemplates;

function loadUserSlides() {
	console.log($scope.userid);
	slidesSrvc.loadUserSlides($scope.userid).then((res)=>{
		$scope.slideDocus = res;
	})
}

$scope.setSlideId = (id) => {
	slidesSrvc.slideId = id
	console.log(slidesSrvc.slideId);
}

function getUser() {
	sheetsSrvc.getUser().then(function(user) {
		console.log('beging',user);
		if (user) {
			$scope.userid = user.id;
			$scope.name = user.name;
			$scope.username = user.username;
			$scope.email = user.email;
			$scope.pic2 = user.pic;
		}
		else {
			$scope.name = "Not Logged In?";
			$scope.username = "Click to Login";
			$scope.pic2 = './sheetsView/css/user-default.png';
		}
		loadUserSlides()
		return $scope.userid,$scope.pic2,$scope.name,$scope.username,$scope.email
	})
}
getUser()
// console.log('hi');


	// console.log($scope.slideDocus);

// SLIDES HOME STUFF//////
//Fxns for Sorting
	$scope.owned = "Owned by";
	$scope.dropDownMessage = () => $scope.owned = "Owned by anyone";
	$scope.dropDownMessage2 = () => $scope.owned = "Owned by me";
	$scope.dropDownMessage3 = () =>$scope.owned = "Not owned by me";



})
