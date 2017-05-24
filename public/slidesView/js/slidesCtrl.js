GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.templatePics = slidesSrvc.slidesTemplates;


// SLIDES HOME STUFF//////
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


// SLIDES WORK STUFF//////

    $scope.textBoxes= [];

    $scope.createTextBox = function() {
      console.log("clicked");
      $scope.textBoxes.push(`<div id="drags${String($scope.textBoxes.length + 1)}" class="ui-widget-content new-text-box"><input type="text" class="new-input" placeholder="Click to type"><div/>`)
      console.log($scope.textBoxes);
    }

    $( function() {
      $( "#drags" ).draggable().resizable();
      $( "#drags0" ).draggable().resizable();
      // $( "#drags1" ).draggable().resizable();
      // $('#drags2').draggable().resizable();
      // $('#drags3').draggable().resizable();
      // $('#drags4').draggable().resizable();
      // $('#drags5').draggable().resizable();
      // $('#drags6').draggable().resizable();
      // $('#drags7').draggable().resizable();
      // $('#drags8').draggable().resizable();
      // $('#drags9').draggable().resizable();
      // $('#drags10').draggable().resizable();
      // $('#drags11').draggable().resizable();
    } );

}).directive('makeTextBox', function() {
  return {
    controller: 'slidesCtrl',
    link: function(scope, element, attr){
      element.on('click', function() {
        console.log("directive clicked");
        for (var i=0; i<scope.textBoxes.length; i++) {
          console.log(i+1);
          $("#div" + String(i)).html(scope.textBoxes[i])
          $("#drags" + String(i+1) ).draggable().resizable();
          }
        })
      }
    }
  });
