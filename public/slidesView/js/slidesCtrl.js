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
// console.log($scope.test);;
    $scope.createTextBox = function() {
      console.log("clicked");
      $scope.textBoxes
        .push(`<div id="drags${String($scope.textBoxes.length + 1)}"
        class="ui-widget-content new-text-box">
        <input type="text" class="new-input" placeholder="Click to type" ng-model="test"><div/>`)
      console.log($scope.textBoxes);
    }

    $("#drags").draggable().resizable();
    $("#drags0").draggable().resizable();
    $scope.log = ()=> console.log($scope.styles);


}).directive('makeTextBox', function() {
  return {
    controller: 'slidesCtrl',
    link: function(scope, element, attr){
      element.on('click', function() {
        console.log("directive clicked");
          $("#div" + String(scope.textBoxes.length)).html(scope.textBoxes[scope.textBoxes.length -1])
          $("#drags" + String(scope.textBoxes.length)).draggable().resizable();
        })
      }
    }
  })
.directive('grabCss', function() {
    return {
      controller: 'slidesCtrl',
      link: function (s,e,a){
        e.on('mouseup', function() {
            s.styles = $(this).css(["height", 'width', 'top', "left"])

          console.log('css clicked');
        })
        // console.log($('div').click(function() {;
        // }));
      }
    }
  })
