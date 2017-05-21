app.controller('slidesCtrl', function ($scope, $state, slidesSrvc) {
  $scope.broken = "slides Home view"
  $scope.alsoBroken = "You are now working in a new SLIDE"
  $scope.templatePics = slidesSrvc.slidesTemplates;
})
