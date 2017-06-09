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
				return $scope.userid,$scope.pic2,$scope.name,$scope.username,$scope.email
			}
		 )
		 return $scope.userid
	 }
	 getUser()
	 console.log($scope.userid);

	 $scope.getSheets = function(){
		 console.log($scope.userid);
		 sheetsSrvc.getSheets({id:$scope.userid})
		 return
	 }
	 $scope.getSheets()

})
