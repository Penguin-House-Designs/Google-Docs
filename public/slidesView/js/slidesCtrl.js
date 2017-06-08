GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.templatePics = slidesSrvc.slidesTemplates;


	// console.log('hi');

		$scope.slideDocus = slidesSrvc.slidesDocuments;
		// console.log($scope.slideDocus);

// SLIDES HOME STUFF//////
	//Fxns for Sorting
		$scope.owned = "Owned by me";
		$scope.dropDownMessage = () => $scope.owned = "Owned by anyone";
		$scope.dropDownMessage2 = () => $scope.owned = "Owned by me";
		$scope.dropDownMessage3 = () =>$scope.owned = "Not owned by me";

		$scope.selectedPanel = () => {

		}


// SLIDES WORK STUFF//////

    $scope.clickTheBox = function  (){
   alert('hi')
   console.log('Im working');
    }
    $scope.click = ()=> {

    }
    $scope.log = (x)=> {

    }

		$scope.bgColor='white'

    $scope.slides = [0];
    $scope.createSlide = ()=> $scope.slides.push($scope.slides.length)

    $scope.currentSlide = 1;
    $scope.changeSlides = (x) => {
      for (var i = 0; i < $scope.slideContent.length; i++) {
        if ($scope.slideContent[i].slideId !== x) {
          $(`#${$scope.slideContent[i].divId}`).css('display', 'none')
        } else {
          $(`#${$scope.slideContent[i].divId}`).css('display', 'block')
        }
      }
      $scope.currentSlide = x ;
      console.log($scope.currentSlide);
    }


    $scope.slideContent = [
        {
            slideId: 1,
            divId: "drag1",
            divHtml: `<div id='drag1' class='slide-text-input ui-widget-content slide-title' grab-css>
                <input id='input1' type='text' class='hello slide-text-input slide-title-input' value='Click to add title'>
            </div>`,
            innerId: "input1",
            inputVal: "",
            css: {}
        },
        {
          slideId: 1,
          divId: "drag2",
          divHtml: `<div id="drag2" class="ui-widget-content slide-author" grab-css>
            <input type="text" class="slide-author-input" placeholder="Click to add author">
          </div>`,
          innerId: 'input2',
          inputVal:'',
          css: {}
        }
    ]


    $scope.createTextBox = ()=> {
      $scope.slideContent
        .push({
          slideId: $scope.currentSlide,
          divId: 'drag' + String($scope.slideContent.length +1),
          divHtml:   `<div id="drag${String($scope.slideContent.length + 1)}"
          class="ui-widget-content new-text-box" grab-css>
          <input type="text" class="new-input" placeholder="Click to type" id="input${String($scope.slideContent.length + 1)}"><div/>`,
          innerId: 'input' + String($scope.slideContent.length +1)
        })
      $("#div" + String($scope.slideContent.length))
        .html($scope.slideContent[$scope.slideContent.length -1].divHtml)
      $("#drag" + String($scope.slideContent.length)).draggable().resizable();
    };

    $scope.createImg = (x)=> {
      var reader = new FileReader();
      reader.onload = function(event) {
        imgUrl = event.target.result
        $scope.slideContent
          .push({
            slideId: $scope.currentSlide,
            divId: 'drag' + String($scope.slideContent.length +1),
            divHtml:`<div id="drag${String($scope.slideContent.length + 1)}"class="ui-widget-content new-image-div">
            <img src="${imgUrl}" id="img${String($scope.slideContent.length + 1)}" class="new-image"/><div/>`,
            innerId: 'img' + String($scope.slideContent.length +1)
          })
        $("#div" + String($scope.slideContent.length)).html($scope.slideContent[$scope.slideContent.length -1].divHtml);
        $("#drag" + String($scope.slideContent.length)).draggable().resizable();
        console.log($scope.slideContent);
      }
      reader.readAsDataURL(x);
    };


    $scope.createShape = (shape)=> {
      shapeHtml =
      ` <div id="drag${String($scope.slideContent.length + 1)}" class="ui-widget-content new-image-div" grab-css>
      <img src=${"./slidesView/pics/"+shape+".png"} id="shape${String($scope.slideContent.length + 1)}" class="new-image"/><div/>`
      $scope.slideContent
        .push({
          slideId: $scope.currentSlide,
          divId: 'drag' + String($scope.slideContent.length +1),
          divHtml: shapeHtml,
          innerId: shape + String($scope.slideContent.length +1)
        });
      $scope.currentShape = shape
      $("#div" + String($scope.slideContent.length)).html($scope.slideContent[$scope.slideContent.length -1].divHtml);
      $("#drag" + String($scope.slideContent.length)).draggable().resizable();
    }

    $scope.changeShapeColor = function(col) {
      $scope.slideContent[$scope.slideContent.length -1].divHtml =
      ` <div id="drag${String($scope.slideContent.length)}" class="ui-widget-content new-image-div" grab-css>
      <img src=${"./slidesView/pics/" + $scope.currentShape + "-" + col + ".png"} id="shape${String($scope.slideContent.length + 1)}" class="new-image"/><div/>`
      $("#div" + String($scope.slideContent.length)).html($scope.slideContent[$scope.slideContent.length -1].divHtml);
      $("#drag" + String($scope.slideContent.length)).draggable().resizable();
    }

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

.directive('grabCss', function() {
    return {
      controller: 'slidesCtrl',
      link: function (s,e,a){
        e.on('mouseup', function() {
            s.styles = $('div', this).css(["height", 'width', 'top', "left"])
            s.slideContent[s.slideContent
              .indexOf(s.slideContent.find((x)=> x.divId === $('div', this)
              .attr('id')))].css = s.styles
          console.log('css clicked', s.slideContent  );
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
			link:function(sco, ele, attr){
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
