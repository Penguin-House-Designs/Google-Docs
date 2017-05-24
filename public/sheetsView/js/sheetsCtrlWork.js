GoogleApps.controller('sheetsCtrlWork', function($scope, $state, sheetsSrvc) {
  $scope.broken = "sheets Home view"
  $scope.alsoBroken = "You are now working in a new SHEET"
  $scope.templatePics = sheetsSrvc.sheetsTemplates;
  $scope.test = 'test';

  $scope.inputcells = function(){
		var array = new Array(30);
		var array2 = new Array(13);
		var array3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
		$scope.cells = [];
		$scope.cellsHOR = [];
		$scope.abc = [];
		for (var i = 1; i < array.length; i++) {
			$scope.cells.push(i)
		}
		for (var i = 0; i < array2.length; i++) {
			$scope.cellsHOR.push(i)
      $scope.abc.push(array3[i])
		}
    return $scope.cells, $scope.cellsHOR, $scope.abc
	}
	$scope.inputcells();

  $scope.calc = function(para){
    if(para === 'pi'){

    }

    console.log($scope.cellvalue);
    return $scope.cellvalue
  }


  $scope.fun = function(para){
    if(para==='on'){
        this.select();
      }
    else{
       this.unselect();
    }
  }









})
