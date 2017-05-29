GoogleApps.controller('sheetsCtrlWork', function($scope, $state, sheetsSrvc) {
  $scope.broken = "sheets Home view"
  $scope.alsoBroken = "You are now working in a new SHEET"
  $scope.templatePics = sheetsSrvc.sheetsTemplates;
  $scope.test = 'test';
  // $scope.cellvalue ='1';

  $scope.inputcells = function(){
		var array = new Array(651);
		var array2 = new Array(13);
		var array4 = new Array(51);
		var array3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
		$scope.cells = [];
		$scope.abc = [];
    $scope.numbar = [];
		for (var i = 1; i < array.length; i++) {
			$scope.cells.push([i,''])
		}
		for (var i = 1; i < array4.length; i++) {
			$scope.numbar.push(i)
		}
		for (var i = 0; i < array2.length; i++) {
      $scope.abc.push(array3[i])
		}
    return $scope.cells, $scope.numbar, $scope.abc
	}

	$scope.inputcells();

  $scope.storge = function(array){
    if(array.length > 2){
      for (var i = 0; i < array.length-1; i++) {
          for (var j = i+1; j < array.length; j++) {
            if(array[i].id == array[j].id){
              array.splice(j,1);
              j--;
          }
        }
      }
    }
    if(array.length > 2){
    $scope.ready = array;
    console.log('new Array');
    }
    return $scope.ready
  }

  $scope.calc = function( para ){
    if(para =='Average()'){
      console.log('---->>>', $scope.ready);
      $scope.cellvalue = 'ready';
    }

    return $scope.cellvalue
  }


  $scope.fun = function(para,para2){
    // console.log(para,para2);
    if(para==='on'){
        document.getElementById("cell").select()
      }
    else{
      //  this.unselect();
    }
  }









})
