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

  $scope.storage = function(array){
    // store highlighted values to an array in Service
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
    sheetsSrvc.setStorage(array);
    console.log('new Array');
    }
    return $scope.ready
  }

  $scope.calc = function( para ){
    // declare initial values
    var ready = [];
    var ans = 0;

    // declare method and calculate
    if( para == 'Sum()' ){
      ready = sheetsSrvc.storage;
      for (var i = 0; i < ready.length; i++) {
        ans = ans + Number(ready[i].val)
      }
      $scope.cellvalue = ans;
    }

    else if( para == 'Product()' ){
      ready = sheetsSrvc.storage;
      ans = Number(ready[0].val)
      for (var i = 1; i < ready.length; i++) {
        ans = ans * Number(ready[i].val)
      }
      $scope.cellvalue = ans;
    }

    else if( para == 'Average()' ){
      ready = sheetsSrvc.storage;
      for (var i = 0; i < ready.length; i++) {
        ans = ans + Number(ready[i].val)
      }
      $scope.cellvalue = ans / Number(ready.length);
    }

    else if( para == 'Max()' ){
      ready = sheetsSrvc.storage;
      var max = [];
      for (var i = 0; i < ready.length; i++) {
        max.push(Number(ready[i].val))
      }
      console.log(max);
      $scope.cellvalue = Math.max.apply(null, max);
    }

    else if( para == 'Min()' ){
      ready = sheetsSrvc.storage;
      var min = [];
      for (var i = 0; i < ready.length; i++) {
        min.push(Number(ready[i].val))
      }
      $scope.cellvalue = Math.min.apply(null, min);
    }

    return $scope.cellvalue
  }


  $scope.chart = function() {

    var arrX = sheetsSrvc.storage;
    var arrY = sheetsSrvc.storage;

    sheetsSrvc.chart(arrX,arrY);
  }


})
.directive('makeBox', function() {
  return {
    controller: 'sheetsCtrl',
    link: function(scope, element, attr){
      scope.graph == true;
      var togChart = function() {
        if(scope.graph == true){
          $(".notshow").css('display:content;')
          $(".show").css('display:none;')
          return scope.graph == false;
        }
        else{
          $(".show").css('display:content;')
          $(".notshow").css('display:none;')
          return scope.graph == true;
        }
        console.log(scope.graph);
      }

      element.on('click', function() {
          $("#test1").html(`<div id="chart1">
        <section class='show'>
          <p class='chart-title'>Title :<p>
            <input id="chart-input">
          <p class='chart-title'>X-axis :<p>
            <input id="chart-input">
          <p class='chart-title'>Y-axis :<p>
            <input id="chart-input">
              <div>
                <button make-box onclick='togChart()' class='share-btn'>Graph</button>
              </div>
        </section>
            <div class='notshow'>
                <p class='chart-title' >Chart</p>
                  <div>
                    <canvas id="canvas"></canvas>
                  </div>
                  <button make-box onclick='togChart()' class='share-btn'>Edit</button>
            </div>
        </div>`)
          $("#chart1").draggable().resizable();
        })
      }
    }
  })

  var graph = true;

  var togChart = function() {
    console.log('shit');
    console.log(graph);
    if(graph === true){
      $(".show").css('display','none')
      $(".notshow").css('display','block')
      return graph = false;
    }
    else{
      $(".notshow").css('display','none')
      $(".show").css('display','block')
      return graph = true;
    }
    console.log(graph);
  }
