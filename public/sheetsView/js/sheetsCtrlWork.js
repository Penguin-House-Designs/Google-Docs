GoogleApps.controller('sheetsCtrlWork', function($scope, $state, sheetsSrvc) {

  $scope.templatePics = sheetsSrvc.sheetsTemplates;
  $scope.graphBtn = false;
  $scope.k = false;
  $scope.j = false;
  $scope.d = false;

  $scope.getUser = function() {
  sheetsSrvc.getUser().then(function(user) {
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
}


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


  $scope.calc = function(para) {
    // declare initial values
    var ready = [];
    var ans = 0;

    // declare method and calculate
    if( para == 'Product()' ){
      ready = sheetsSrvc.storage;
      ans = Number(ready[0].val)
      for (var i = 1; i < ready.length; i++) {
        ans = ans * Number(ready[i].val)
      }
      $scope.cellvalue = ans;
    }

    else if( para == 'Sum()' ){
      ready = sheetsSrvc.storage;
      for (var i = 0; i < ready.length; i++) {
        ans = ans + Number(ready[i].val)
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


$scope.chart_name = 'Untitled Chart';
$scope.chart_xval = [];
$scope.chart_yval = [];

$scope.grabXY = function(para){
  if(para == 'x'){
    $scope.xval = 'X values ADDed';
    var tempx = sheetsSrvc.storage;
    console.log(tempx);
    for (var i = 0; i < tempx.length; i++) {
      $scope.chart_xval.push(tempx[i].val)
    }
    return $scope.chart_xval
  }
  else{
    $scope.yval = 'Y values ADDed';
    var tempy = sheetsSrvc.storage;
    for (var i = 0; i < tempy.length; i++) {
      $scope.chart_yval.push(tempy[i].val)
    }
    return $scope.chart_yval
  }
}

  $scope.chart = function() {
    $scope.graphBtn = true;
    var name = $scope.chart_name;
    var arrX = $scope.chart_xval;
    var arrY = $scope.chart_yval;
    sheetsSrvc.chart(name,arrX,arrY);
    $scope.addChart = false;
    $scope.hideChart = {
      "z-index": "0"
    }
  }

  $scope.addChart = false;
  $scope.addedChart = function(){
    if($scope.addChart===false){return $scope.addChart = true;}
    else{return $scope.addChart = false;}
  }

  $scope.togChart = function() {
    if($scope.taco == false){
      $scope.taco = true;
    }
    else{
      $scope.taco = false;
    }
    return $scope.taco
  }

  $scope.hideChart = {
    "z-index": "-1"
  }
  $scope.hiddenChart = function(para){
    if(para === 'hide') {
      $scope.hideChart = {
        "z-index": "-1"
      }
    }
    else {
      $scope.hideChart = {
        "z-index": "0"
      }
    }
    return $scope.hideChart
  }

  $scope.textcolor = {'color':'black'}

  $scope.ccText = function(para){
    if(para == 'red'){
      console.log('red');
      $scope.textcolor = {'color':'red','background':'red'}
    }
    else if(para == 'blue'){
      console.log('blue');
      $scope.textcolor = {'color':'blue','background':'blue'}
    }

    console.log($scope.textcolor);
    return $scope.textcolor
  }

  $scope.name = "Not Logged In?";
  $scope.username = "Dominic DeCicco";
  $scope.pic2 = './sheetsView/css/user-default.png';

  $scope.saveSheet = function(){
    var array = $scope.cells
    $scope.cellsSave = []
    var y
    for (var i = 1; i < array.length; i++) {
      y = document.getElementsByName(JSON.stringify(i))[0].value
			$scope.cellsSave.push([i,y])
		}
    sheetsSrvc.saveSheet({ userid: $scope.userid, val : $scope.cellsSave })
    return
  }




})

// .directive('grabcells', function() {
//     return {
//       restrict: 'A',
//       controller: 'sheetCtrlWork',
//       link: function (s,e,a){
//         e.on('click', function() {
//           var x = $('#1').val()
//           console.log('bbbb',x);
//           // console.log('css clicked', s.funstuff  );
//         })
//         $("#p").click(function(){
//           alert("The paragraph was clicked.");
//         })
//       }
//     }
// })
