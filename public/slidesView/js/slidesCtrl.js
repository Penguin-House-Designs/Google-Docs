GoogleApps.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {

// SLIDES WORK STUFF//////

    $scope.clickTheBox = function  (){
   alert('hi')
   console.log('Im working');
    }

    $scope.log = ()=> {
     console.log(slidesSrvc.slideContent);
    }

		$scope.save = function() {
			slidesSrvc.save(JSON.stringify($scope.gInfo))
		}


		$scope.click = () => {
			$scope.test = JSON.stringify($scope.gInfo)
		console.log($scope.test);
	}



	$scope.loadSlide = function() {
		console.log('clicked');
		slidesSrvc.loadSlide().then(()=>{
			$scope.gInfo = slidesSrvc.gInfo
			$scope.slideContent = slidesSrvc.slideContent
				for (var i = 0; i < slidesSrvc.slideContent.length; i++) {
					$(`#div${i +1}`).html(slidesSrvc.slideContent[i].divHtml);
					$(`#drag${i +1}`).draggable().resizable();
					if (slidesSrvc.slideContent[i].css) {
						$(`#drag${i +1}`).css('height', slidesSrvc.slideContent[i].css.height)
						$(`#drag${i +1}`).css('width', slidesSrvc.slideContent[i].css.width)
						$(`#drag${i +1}`).css('top', slidesSrvc.slideContent[i].css.top)
						$(`#drag${i +1}`).css('left', slidesSrvc.slideContent[i].css.left)
					}
					if (slidesSrvc.slideContent[i].inputVal) {
						$(`#${slidesSrvc.slideContent[i].innerId}`).val(slidesSrvc.slideContent[i].inputVal)
					}
					if(slidesSrvc.slideContent[i].slideId === 2) {
	          $(`#${slidesSrvc.slideContent[i].divId}`).css('display', 'none')
	        } else {
	          $(`#${slidesSrvc.slideContent[i].divId}`).css('display', 'block')
	        }
				}
			})
		}()


    $scope.createSlide = ()=>$scope.gInfo.slides.push($scope.gInfo.slides.length)

    $scope.currentSlide = 1;
    $scope.changeSlides = (x) => {
      for (var i = 0; i < slidesSrvc.slideContent.length; i++) {
        if (slidesSrvc.slideContent[i].slideId !== x) {
          $(`#${slidesSrvc.slideContent[i].divId}`).css('display', 'none')
        } else {
          $(`#${slidesSrvc.slideContent[i].divId}`).css('display', 'block')
        }
      }
      $scope.currentSlide = x ;
      console.log($scope.currentSlide);
    }


//Creates Divs
//This Pushes into SlideContent
    $scope.createTextBox = ()=> {
      slidesSrvc.slideContent
        .push({
          slideId: $scope.currentSlide,
          divId: 'drag' + String(slidesSrvc.slideContent.length +1),
          divHtml:   `<div id="drag${String(slidesSrvc.slideContent.length + 1)}"
          class="ui-widget-content new-text-box" grab-css>
          <input type="text" class="new-input" placeholder="Click to type" id="input${String(slidesSrvc.slideContent.length + 1)}"><div/>`,
          innerId: 'input' + String(slidesSrvc.slideContent.length +1)
        })
      $("#div" + String(slidesSrvc.slideContent.length))
        .html(slidesSrvc.slideContent[slidesSrvc.slideContent.length -1].divHtml)
      $("#drag" + String(slidesSrvc.slideContent.length)).draggable().resizable();
    };


//Create images
    $scope.createImg = (x)=> {
      var reader = new FileReader();
      reader.onload = function(event) {
        imgUrl = event.target.result
        slidesSrvc.slideContent
          .push({
            slideId: $scope.currentSlide,
            divId: 'drag' + String(slidesSrvc.slideContent.length +1),
            divHtml:`<div id="drag${String(slidesSrvc.slideContent.length + 1)}"class="ui-widget-content new-image-div">
            <img src="${imgUrl}" id="img${String(slidesSrvc.slideContent.length + 1)}" class="new-image"/><div/>`,
            innerId: 'img' + String(slidesSrvc.slideContent.length +1)
          })
        $("#div" + String(slidesSrvc.slideContent.length)).html(slidesSrvc.slideContent[slidesSrvc.slideContent.length -1].divHtml);
        $("#drag" + String(slidesSrvc.slideContent.length)).draggable().resizable();
        console.log(slidesSrvc.slideContent);
      }
      reader.readAsDataURL(x);
    };


    $scope.createShape = (shape)=> {
      shapeHtml =
      ` <div id="drag${String(slidesSrvc.slideContent.length + 1)}" class="ui-widget-content new-image-div" grab-css>
      <img src=${"./slidesView/pics/"+shape+".png"} id="shape${String(slidesSrvc.slideContent.length + 1)}" class="new-image"/><div/>`
      slidesSrvc.slideContent
        .push({
          slideId: $scope.currentSlide,
          divId: 'drag' + String(slidesSrvc.slideContent.length +1),
          divHtml: shapeHtml,
          innerId: shape + String(slidesSrvc.slideContent.length +1)
        });
      $scope.currentShape = shape
      $("#div" + String(slidesSrvc.slideContent.length)).html(slidesSrvc.slideContent[slidesSrvc.slideContent.length -1].divHtml);
      $("#drag" + String(slidesSrvc.slideContent.length)).draggable().resizable();
    }

    $scope.changeShapeColor = function(col) {
      slidesSrvc.slideContent[slidesSrvc.slideContent.length -1].divHtml =
      ` <div id="drag${String(slidesSrvc.slideContent.length)}" class="ui-widget-content new-image-div" grab-css>
      <img src=${"./slidesView/pics/" + $scope.currentShape + "-" + col + ".png"} id="shape${String(slidesSrvc.slideContent.length + 1)}" class="new-image"/><div/>`
      $("#div" + String(slidesSrvc.slideContent.length)).html(slidesSrvc.slideContent[slidesSrvc.slideContent.length -1].divHtml);
      $("#drag" + String(slidesSrvc.slideContent.length)).draggable().resizable();
    }





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
