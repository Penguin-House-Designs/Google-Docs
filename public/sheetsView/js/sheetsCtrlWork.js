GoogleApps.controller('sheetsCtrlWork', function($scope, $state, sheetsSrvc) {
  $scope.broken = "sheets Home view"
  $scope.alsoBroken = "You are now working in a new SHEET"
  $scope.templatePics = sheetsSrvc.sheetsTemplates;
  $scope.test = 'test';

  $scope.inputcells = function(){
		var array = new Array(30);
		var array2 = new Array(12);
		$scope.cells = [];
		$scope.cellsABC = [];
		for (var i = 1; i < array.length; i++) {
			$scope.cells.push(i)
		}
		for (var i = 0; i < array2.length; i++) {
			$scope.cellsABC.push(i)
		}
    console.log('cells array -->',$scope.cells);
    return $scope.cells, $scope.cellsABC
	}
	$scope.inputcells();

console.log($scope.mainInput);

})
