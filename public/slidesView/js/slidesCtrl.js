GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.templatePics = slidesSrvc.slidesTemplates;


// SLIDES HOME STUFF//////
	//Fxns for Sorting
		$scope.owned = "Owned by me";
		$scope.dropDownMessage = () => $scope.owned = "Owned by anyone";
		$scope.dropDownMessage2 = () => $scope.owned = "Owned by me";
		$scope.dropDownMessage3 = () =>$scope.owned = "Not owned by me";

		$scope.selectedPanel = () => {

		}


// SLIDES WORK STUFF//////
    $scope.click = ()=> console.log($scope.currentSlide);
      // slidesSrvc.srvcTest = "I'm still on the service"
    $scope.log = (x)=> console.log('enter', x);

    $scope.slides = [0];
    $scope.createSlide = ()=> $scope.slides.push($scope.slides.length)

    $scope.currentSlide = 1;
    $scope.changeSlides = (x) => {
      for (var i = 0; i < $scope.slideContent.length; i++) {
        if ($scope.slideContent[i].slideId !== x) {
          $($scope.slideContent[i].divId).css('display', 'none')
        } else {
          $($scope.slideContent[i].divId).css('display', 'block')
        }
      }
      $scope.currentSlide = x ;
    }


    $scope.slideContent = [
        {
            slideId: 1,
            divId: "#drag1",
            divHtml: `<div id='drag1' class='slide-text-input ui-widget-content slide-title' grab-css>
                <input id='input1' type='text' class='hello slide-text-input slide-title-input' value='Click to add title'>
            </div>`,
            inputId: "input1",
            inputVal: "",
            css: {}
        },
        {
          slideId: 1,
          divId: "#drag2",
          divHtml: `<div id="drag2" class="ui-widget-content slide-author" grab-css>
            <input type="text" class="slide-author-input" placeholder="Click to add author">
          </div>`,
          inputId: 'input2',
          inputVal:'',
          css: {}
        }
    ]


    $scope.createTextBox = function() {
      // console.log("clicked");
      $scope.slideContent
        .push({
          slideId: $scope.currentSlide,
          divId: '#drag' + String($scope.slideContent.length +1),
          divHtml:   `<div id="drag${String($scope.slideContent.length + 1)}"
          class="ui-widget-content new-text-box" grab-css>
          <input type="text" class="new-input" placeholder="Click to type" id="input${String($scope.slideContent.length + 1)}"><div/>`,
          inputId: 'input' + String($scope.slideContent.length +1),
          inputVal: ''
        })

    };


    $("#div1").html($scope.slideContent[0].divHtml);
    $("#div2").html($scope.slideContent[1].divHtml);
    $("#drag1").draggable().resizable();
    $("#drag2").draggable().resizable();


		//Presentation Slides
		var element = document.getElementById("oneSlide");

$scope.fullView = () => {
    if(element.requestFullScreen){
        element.requestFullScreen()
    }
    else if(element.webkitRequestFullScreen){
        element.webkitRequestFullScreen()
    }
    else if(element.mozRequestFullScreen){
        element.mozRequestFullScreen()
    }
    else if(element.msRequestFullScreen){
        element.msRequestFullScreen()
    }
	};
})


.directive('makeTextBox', function() {
  return {
    controller: 'slidesCtrl',
    link: function(scope, element, attr){
      element.on('click', function() {
        console.log("directive clicked");
          $("#div" + String(scope.slideContent.length))
            .html(scope.slideContent[scope.slideContent.length -1].divHtml)
          $("#drag" + String(scope.slideContent.length)).draggable().resizable();
        })
      }
    }
  })

.directive('grabCss', function() {
    return {
      controller: 'slidesCtrl',
      link: function (s,e,a){
        e.on('mouseup', function() {
            s.styles = $('div', this).css(["height", 'width', 'top', "left"])
            s.slideContent[s.slideContent
              .indexOf(s.slideContent.find((x)=> x.divId === $('div', this)
              .attr('id')))].css = s.styles
          console.log('css clicked', s.styles  );
        })
        e.on('focusout', function() {
          s.val = $('input', this).val();
          s.slideContent[s.slideContent
            .indexOf(s.slideContent.find((x)=> x.divId === $('div', this)
            .attr('id')))].inputVal = s.val
          console.log('unfocused', s.val);
        })
      }
    }
  })

	.directive('activeSlidePanel', function(){
		return {
			link:function(sco, ele, attri){
				ele.on('click', function(){
					$('.slide-nav-panel').removeClass('slide-nav-panel-active')
					$(this).addClass('slide-nav-panel-active')
				})
			}
		}
	})

	.directive('activeSlide', function(){
		return {
			link: function(sco, ele, attr){
				ele.on('click', function(){
					$('.slide-nav-slide').removeClass('slide-nav-slide-active');
					$(this).addClass('slide-nav-slide-active')
				});
			}
		}
	})
