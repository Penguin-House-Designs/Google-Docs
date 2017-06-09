GoogleApps.controller('landingCtrl', function($location, $anchorScroll, $scope, $stateParams, sheetsSrvc) {

  $scope.$watchCollection('$stateParams', function() {
    $location.hash('top');
    $anchorScroll();
  });

  $('.type-it-docs').typeIt({
    strings: [
      'Create persuasive documents', 'Create impactful documents', 'Create meaningful documents'
    ],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

  $('.type-it-sheets').typeIt({
    strings: [
      'Create complex spreadsheets', 'Create useful spreadsheets', 'Create powerful spreadsheets'
    ],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

  $('.type-it-slides').typeIt({
    strings: [
      'Create beautiful presentations', 'Create impactful presentations', 'Create inspiring presentations'
    ],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

  $(window).scroll(function() {
    $(".fadeout-cont").css("opacity", 1 - $(window).scrollTop() / 250);
  })

  $scope.d=false;

  function getUser() {
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
 getUser()

})
