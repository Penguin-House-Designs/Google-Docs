
GoogleApps.controller('driveCtrl', function($scope, slidesSrvc) {

  $scope.setSlideId = (id) => {
  	slidesSrvc.slideId = id
  	console.log(slidesSrvc.slideId);
  }

  $scope.driveArray = [
    {
      name: "The Deaths of Penguins",
      img:"./driveView/img/sheets-icon.png"
    },
    {
      name: "The Pyramids Are Batteries",
      img:"./driveView/img/doc-icon.png"
    },
    {
      name: "Stats Of Bear Penguins",
      img:"./driveView/img/sheets-icon.png"
    },
    {
      name: "Penguin Food are Good Groth",
      img:"./driveView/img/sheets-icon.png"
    },
    {
      name: "Penguin Research",
      img:"./driveView/img/doc-icon.png"
    },
    {
      name: "Physiology Penguin Research",
      img:"./driveView/img/doc-icon.png"
    },
    {
      name: "2013-2015",
      img:"./driveView/img/sheets-icon.png"
    },
    {
      name: "Penguin Food Research",
      img:"./driveView/img/doc-icon.png"
    },
    {
      name: "Penguin Growth",
      img:"./driveView/img/sheets-icon.png"
    },
    {
      name: "Group Project Presentation",
      img:"./driveView/img/doc-icon.png"
    },
    {
      name: "Cool Slides",
      img:"./driveView/img/slides-icon.png"
    },
  ]


});

GoogleApps.directive('paral', function(){
  return {
	  link: function(sco, ele, attr){
	     ele.parallax();
	  }
 	}
})
