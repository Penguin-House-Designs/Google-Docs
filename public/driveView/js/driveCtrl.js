
GoogleApps.controller('driveCtrl', function($scope) {
});

GoogleApps.directive('paral', function(){
  return {
	  link: function(sco, ele, attr){
	     ele.parallax();
	  }
 	}
})
