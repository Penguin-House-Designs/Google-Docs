GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.templatePics = slidesSrvc.slidesTemplates;
// SLIDES HOME STUFF//////
$scope.log = ()=> console.log($scope.styles);
$scope.slideContent = [
    {
        slideId: 1,
        divId: "drag1",
        divHtml: "<div id='drags' class='slide-text-input ui-widget-content slide-title'>
            <input id='input1' type='text' class='hello slide-text-input slide-title-input' value='Click to add title'>
        </div>",
        inputId: "input1",
        inputVal: ""
    },
    {
      slideId: 1,
      divId: "drag2",
      divHtml: '<div id="drag2" class="ui-widget-content slide-author">
        <input type="text" class="slide-author-input" placeholder="Click to add author">
      </div>',
      inputId: 'input2',
      inputVal:''
    }
]

    $scope.createTextBox = function() {
        console.log("clicked");
        $scope.textBoxHtmls
            .push(`<div id="drag${String($scope.textBoxes.length + 1)}"
            class="ui-widget-content new-text-box">
            <input type="text" class="new-input" placeholder="Click to type" ng-model="test"><div/>`);
        $scope.textBoxIds.push(`#drags${String($scope.textBoxes.length + 1)}`)
        console.log($scope.textBoxes);
    }
 $("#drags1").draggable().resizable();
    $("#drags2").draggable().resizable();
}).directive('makeTextBox', function() {
return {
    controller: 'slidesCtrl',
    link: function(scope, element, attr){
        element.on('click', function() {
            console.log("directive clicked");
                $("#div" + String(scope.textBoxHtmls.length)).html(scope.textBoxes[scope.textBoxes.length -1])
                $("#drag" + String(scope.textBoxHtmls.length)).draggable().resizable();
                scope.textBoxes.push("#drag" + String(scope.textBoxes.length));
                console.log('Show me the div',this);
                console.log(scope.textBoxes);
                // Something .push ({divId:scopeId, inputId:scope.inputId},)
            })
        }
    }
})
// .directive('grabCss', function() {
//  return {
//      controller: 'slidesCtrl',
//      link: function (s,e,a){
//          e.on('mouseup', function() {
//                  s.styles = $(this).css('border','2px solid red',).css('background','aqua').css(["height", "width", "top", "left"]);
//                  var theInput = $('.hello').val();
//                  // console.log('Show me the input',theInput);
//
//           console.log('Show me the div', this);
//           console.log('Show me the styles', s.styles);
//          })
//          // console.log($('div').click(function() {;
//          // }));
//      }
//  }
// })
.directive('getValue', function(){
    return {
        link:function(sco, ele,  attr){
            var theValues = []
                ele.on('click', function(){
                    console.log("clicked");
                    for (var i = 0; i < sco.inputIds.length; i++) {
                        theValues.push(
                            $(sco.inputIds[i]).val(),
                        )
                    }
                    console.log('The Value Is: ', theValues);
                })
            // })
        }
    }
})
